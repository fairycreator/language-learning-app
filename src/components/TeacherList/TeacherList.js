import React, { useState, useEffect } from "react";
import { database } from "../firebase/config";
import TeacherCard from "./TeacherCard";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const teacherRef = database.ref("teachers");
    teacherRef.on("value", (snapshot) => {
      const teachersData = snapshot.val();
      const teacherList = [];
      for (let id in teachersData) {
        teacherList.push({ id, ...teachersData[id] });
      }
      setTeachers(teacherList);
    });

    return () => {
      teacherRef.off();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;
