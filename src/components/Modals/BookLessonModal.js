import "./BookLesson.css";
import { useState } from "react";
import { toast } from "react-toastify";

const BookLessonForm = ({
  teacherName,
  surname,
  avatar_url,
  setIsModalActive,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reasonForLearning, setReasonForLearning] = useState(
    "Career and business"
  );

  function handleFormEvent(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "reasonForLearning":
        setReasonForLearning(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const request = { name, email, phone, reasonForLearning };

    setIsModalActive(false);

    toast.success("Thank you for your trust!!!");

    setName("");
    setEmail("");
    setPhone("");
    setReasonForLearning("Career and business");
    return request;
  }

  return (
    <form onSubmit={handleSubmit} className="LogInFormBox">
      <p className="formTitle">Book trial lesson</p>
      <p className="formText">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <img
          src={avatar_url}
          height="44px"
          width="44px"
          className="teacherAvatar"
          alt="Teacher avatar"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <p className="yourTeacher"> Your teacher</p>
          <p className="bleackTitle">{`${teacherName} ${surname}`}</p>
        </div>
      </div>

      <p className="reasonForLearn">
        What is your main reason for learning English?
      </p>

      <div className="radioInputBox">
        <label className="radioInput">
          <input
            type="radio"
            name="reasonForLearning"
            value="Career and business"
            checked={reasonForLearning === "Career and business"}
            onChange={handleFormEvent}
          />
          Career and business
        </label>
        <label className="radioInput">
          <input
            type="radio"
            name="reasonForLearning"
            value="Lesson for kids"
            checked={reasonForLearning === "Lesson for kids"}
            onChange={handleFormEvent}
          />
          Lesson for kids
        </label>
        <label className="radioInput">
          <input
            type="radio"
            name="reasonForLearning"
            value="Living abroad"
            checked={reasonForLearning === "Living abroad"}
            onChange={handleFormEvent}
          />
          Living abroad
        </label>
        <label className="radioInput">
          <input
            type="radio"
            name="reasonForLearning"
            value="Exams and coursework"
            checked={reasonForLearning === "Exams and coursework"}
            onChange={handleFormEvent}
          />
          Exams and coursework
        </label>
        <label className="radioInput">
          <input
            type="radio"
            name="reasonForLearning"
            value="Culture, travel or hobby"
            checked={reasonForLearning === "Culture, travel or hobby"}
            onChange={handleFormEvent}
          />
          Culture, travel or hobby
        </label>
      </div>

      <div className="inputBox">
        <input
          className="form-control"
          type="name"
          name="name"
          placeholder="Full Name"
          onChange={handleFormEvent}
          value={name}
          pattern="[A-Za-z ]+"
          required
        ></input>

        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleFormEvent}
          value={email}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          required
        ></input>

        <input
          className="form-control"
          type="tel"
          name="phone"
          placeholder="Phone number"
          onChange={handleFormEvent}
          value={phone}
          pattern="^[\d\s.+]+$"
          title="Please enter a valid phone number"
          required
        />
      </div>

      <button className="submitBtn" type="submit">
        Book
      </button>
    </form>
  );
};

export default BookLessonForm;
