import React from "react";
import "./add-movie.css";

function AddMovie({closeModal}) {
  return (
    <div className="my-container p-4 d-flex flex-column justify-content-between">
      <div className="">Add new movie</div>
      <div className=""><input type="text"></input></div>
      <div className=""><input type="date" placeholder="Release Date"></input></div>
      <div className="d-flex flex-column align-items-end"><button type="button" className="btn add-review-btn">Create Movie</button></div>
    </div>
  );
}

export default AddMovie;
