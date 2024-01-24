import React, { useEffect } from "react";
import "./Modal.css";
import exitBtnSvg from "../../assets/icons/exitBtnSvg";

const Modal = ({ active = false, setActive, children }) => {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.code === "Escape") {
        setActive(false);
      }
    };

    window.addEventListener("keydown", handleCloseByEsc);

    return () => {
      window.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [setActive]);

  return (
    <div
      className={active ? "backdrop active" : "backdrop"}
      onClick={() => setActive(false)}
    >
      <div className="modalBoxScroll">
        <div
          className={active ? "modalBox active" : "modalBox"}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="exitBtn"
            aria-label="Close"
            onClick={() => setActive(false)}
          >
            {exitBtnSvg}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
