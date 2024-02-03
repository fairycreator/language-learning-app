import React from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/icons/logoIcon";
import "./Logo.css";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logoBox" onClick={() => navigate("/")}>
      <LogoIcon />
      <p className="logoText">LearnLingo</p>
    </div>
  );
};

export default Logo;
