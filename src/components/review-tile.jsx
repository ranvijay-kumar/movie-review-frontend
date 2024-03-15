import React from "react";
import "./review-tile.css";

function ReviewTile() {
  return (
    <div className="review-tile p-4 d-flex flex-column">
      <div className="d-flex flex-row justify-content-between">
        <p>This is best movie ever</p>
        <p className="color-voilet">9/10</p>
      </div>
      <div>By Amit</div>
    </div>
  );
}

export default ReviewTile;
