import React from "react";

const addToFavorites = (teacherId) => {};

const TeacherCard = ({ teacher }) => {
  return (
    <div className="teacher-card">
      <img src={teacher.avatar_url} alt={teacher.name} />
      <h3>
        {teacher.name} {teacher.surname}
      </h3>
      <p>Languages: {teacher.languages.join(", ")}</p>
      <p>Price per hour: ${teacher.price_per_hour}</p>
      <button onClick={() => addToFavorites(teacher.id)}>
        Add to Favorites
      </button>
    </div>
  );
};

export default TeacherCard;
