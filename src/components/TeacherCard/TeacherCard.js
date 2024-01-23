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
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img
        className="w-full"
        src={teacher.avatar_url}
        alt={`${teacher.name} ${teacher.surname}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {teacher.name} {teacher.surname}
        </div>
        <p className="text-gray-700 text-base">
          Languages: {teacher.languages.join(", ")}
        </p>
        <p className="text-gray-700 text-base">
          Price per hour: ${teacher.price_per_hour}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className={`bg-${isFavorite ? "red" : "blue"}-500 hover:bg-${
            isFavorite ? "red" : "blue"
          }-700 text-white font-bold py-2 px-4 rounded`}
          onClick={() => addToFavorites(teacher.id)}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
