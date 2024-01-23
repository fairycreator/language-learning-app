import React from "react";

const TeacherDetailsModal = ({ teacher, onClose }) => {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TeacherDetailsModal;
