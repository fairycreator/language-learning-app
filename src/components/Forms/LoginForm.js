import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TbEye, TbEyeOff } from "react-icons/tb";
import { toast } from "react-toastify";
import { logInThunk } from "../../redux/auth/authOperations";
import "../Modals/BookLesson.css";

const LogInForm = ({ setIsActiveLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  function handleFormEvent(e) {
    const { name, value } = e.target;
    switch (name) {
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
    const body = { email, password };

    dispatch(logInThunk(body))
      .unwrap()
      .then((result) => {
        if (!result.error) {
          toast.success("Login successful");
          setIsActiveLoginModal(false);
          resetFormFields();
        } else {
          toast.error("Invalid credentials");
        }
      })
      .catch((error) => {
        toast.error(error.message || "Login failed");
      });
  }

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="LogInFormBox">
      <p className="formTitle">Log In</p>
      <p className="formText">
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>

      <div className="inputBox">
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
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
