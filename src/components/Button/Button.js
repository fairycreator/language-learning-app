import "./Button.css";

const Button = ({ isActive = true, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: isActive ? "var(--accent-color)" : "#EBD8FF",
      }}
      className="mainButtonBox"
    >
      {text}
    </button>
  );
};

export default Button;
