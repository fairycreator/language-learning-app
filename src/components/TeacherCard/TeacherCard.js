import React, { useState, useEffect } from "react";

const TeacherCard = ({ teacher }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(teacher.id));
  }, [teacher.id]);

  const addToFavorites = (teacherId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(teacherId)) {
      // Remove from favorites
      const newFavorites = favorites.filter((id) => id !== teacherId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const newFavorites = [...favorites, teacherId];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="teacher-card">
      <img
        src={teacher.avatar_url}
        alt={`${teacher.name} ${teacher.surname}`}
      />
      <h3>
        {teacher.name} {teacher.surname}
      </h3>
      <p>Languages: {teacher.languages.join(", ")}</p>
      <p>Price per hour: ${teacher.price_per_hour}</p>
      <button onClick={() => addToFavorites(teacher.id)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default TeacherCard;
