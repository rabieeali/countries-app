import React from "react";

const Header = ({ dark, darkMode }) => {
  return (
    <div>
      <div
        className={`shadow ps-5 mb-5 d-flex justify-content-center py-3 align-items-center ${
          dark ? "bg-dark-blue text-white" : "text-secondary"
        }`}
      >
        <h1 className="display-6 text-center text-capitalize">
          Where in the world?
        </h1>
        <i
          onClick={darkMode}
          className={`fa ${
            dark ? "fa-sun" : "fa-moon"
          } text-warning d-block mx-4 ms-auto cursor-pointer fs-4`}
        ></i>
      </div>
    </div>
  );
};

export default Header;
