import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { nanoid } from "@reduxjs/toolkit";
import getUniqueValues from "../../helpers/getUniqueValues";
import "./TeacherFilter.css";

const Dropdown = ({ title, items, onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filterBox">
      <p className="filterTitle">{title}</p>
      <div onClick={() => setIsOpen(!isOpen)} className="filterInputBox">
        {selectedValue}
        <button type="button" className="openListBtn">
          <BsChevronDown size={20} />
        </button>
        <ul
          className={
            isOpen ? "dropDowList active" : "dropDowList visually-hidden"
          }
        >
          <li onClick={() => onSelect(false)}>skip...</li>
          {items.map((el) => (
            <li key={nanoid()} onClick={() => onSelect(el)}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Filter = ({
  teachers,
  setLanguageFromFilter,
  setLevelFromFilter,
  setPriceFromFilter,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Choose a value");
  const [selectedLevel, setSelectedLevel] = useState("Choose a value");
  const [selectedPrice, setSelectedPrice] = useState("Choose a value");

  const uniqueLanguages = getUniqueValues(teachers, "languages");
  const uniqueLevels = getUniqueValues(teachers, "levels");
  const uniquePrices = getUniqueValues(teachers, "price_per_hour");

  return (
    <div className="FilterMainBox">
      <Dropdown
        title="Languages"
        items={uniqueLanguages}
        onSelect={(value) => {
          setSelectedLanguage(value || "Choose a value");
          setLanguageFromFilter(value);
        }}
        selectedValue={selectedLanguage}
      />
      <Dropdown
        title="Level of Knowledge"
        items={uniqueLevels}
        onSelect={(value) => {
          setSelectedLevel(value || "Choose a value");
          setLevelFromFilter(value);
        }}
        selectedValue={selectedLevel}
      />
      <Dropdown
        title="Price"
        items={uniquePrices}
        onSelect={(value) => {
          setSelectedPrice(value ? `${value} $` : "Choose a value");
          setPriceFromFilter(value);
        }}
        selectedValue={selectedPrice}
      />
    </div>
  );
};

export default Filter;
