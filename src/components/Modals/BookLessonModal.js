import React from "react";
import { useFormik } from "formik";

const BookLessonModal = ({ teacher, onClose }) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      // інші поля
    },
    // валідація та onSubmit
  });

  return (
    <div className="modal">
      <form onSubmit={formik.handleSubmit}>
        {/* Форма для бронювання */}
        <button type="submit">Book Lesson</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BookLessonModal;
