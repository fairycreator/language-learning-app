import React from "react";

const TeacherDetailsModal = ({ teacher, onClose }) => {
  return (
    <div className="modal">
      <img
        src={teacher.avatar_url}
        alt={`${teacher.name} ${teacher.surname}`}
      />
      <h3>
        {teacher.name} {teacher.surname}
      </h3>
      <p>{teacher.bio}</p>
      {/* Display other details and reviews */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TeacherDetailsModal;
