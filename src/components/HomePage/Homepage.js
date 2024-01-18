import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Language Learning App</h1>
      <Link to="/teachers">See our Teachers</Link>
    </div>
  );
};

export default HomePage;
