import React from "react";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher-card">
      <img src={teacher.avatar_url} alt={teacher.name} />
      <h3>
        {teacher.name} {teacher.surname}
      </h3>
      <p>Languages: {teacher.languages.join(", ")}</p>
      <p>Price per hour: ${teacher.price_per_hour}</p>
    </div>
  );
};

export default TeacherCard;
