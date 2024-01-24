import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TbEye, TbEyeOff } from "react-icons/tb";
import { toast } from "react-toastify";
import { logUpThunk } from "../../redux/auth/authOperations";
import "../Modals/BookLesson.css";

const RegisterForm = ({ setIsActiveRegisterModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  function handleFormEvent(e) {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const body = { login: name, email, password };

    dispatch(logUpThunk(body))
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
        setIsActiveRegisterModal(false);
        resetFormFields();
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed");
      });
  }

  const resetFormFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="LogInFormBox">
      <p className="formTitle">Registration</p>
      <p className="formText">
        Thank you for your interest in our platform! To register, please provide
        the following information.
      </p>

      <div className="inputBox">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleFormEvent}
          value={name}
          pattern="[A-Za-z ]+"
          required
        />

        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleFormEvent}
          value={email}
          required
        />

        <div className="passwordInputBox">
          <input
            className="form-control"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleFormEvent}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <TbEye size="20px" /> : <TbEyeOff size="20px" />}
          </button>
        </div>
      </div>

      <button className="submitBtn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
