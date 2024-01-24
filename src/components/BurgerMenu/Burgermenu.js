import { nanoid } from "@reduxjs/toolkit";
import "./BurgerMenu.css";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const BurgerMenu = ({ header, items, isBrgOpen, setIsBrgOpen }) => {
  return (
    <div
      className={isBrgOpen ? "burgerMenuMainBox active" : "burgerMenuMainBox"}
      onClick={() => setIsBrgOpen(false)}
    >
      <div className="burgerMenuContent" onClick={(e) => e.stopPropagation()}>
        {header && <div className="burgerMenuHeader">{header}</div>}
        <nav>
          <ul className="burgerMenuList">
            {items.map((item) => {
              if (!item.isPrint) {
                return null;
              }
              return (
                <li key={nanoid()}>
                  <Link
                    className="burgerMenuLink"
                    to={item.goTo}
                    onClick={() => setIsBrgOpen(false)}
                  >
                    {item.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="burgerMenuBtnExit"
          onClick={() => setIsBrgOpen(false)}
        >
          <FiX size={20} color="black" />
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
