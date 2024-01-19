import React from "react";

const TeacherFilter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <form>
      <label>
        Language:
        <select name="language" onChange={handleFilterChange}>
          <option value="">Any</option>
          <option value="">English</option>
          <option value="">Ukrainian</option>
        </select>
      </label>
      <label>
        Price:
        <select name="language" onChange={handleFilterChange}>
          <option value="">Any</option>
          <option value="">Low</option>
          <option value="">High</option>
        </select>
      </label>
    </form>
  );
};

export default TeacherFilter;
