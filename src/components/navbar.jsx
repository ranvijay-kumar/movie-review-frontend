import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar px-2 d-flex justify-content-between align-items-center">
      <div className="">MOVIECRITIC</div>
      <div className="d-flex">
        <button type="button" className="btn mx-2 add-movie-btn">
          Add new movie
        </button>
        <button type="button" className="btn add-review-btn">
          Add new review
        </button>
      </div>
    </div>
  );
}

export default Navbar;
