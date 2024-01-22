import React, { useState, useEffect } from "react";
import TeacherCard from "./TeacherCard";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      {favorites.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default FavoritePage;
