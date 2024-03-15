import React from "react";
import "./review-tile.css";

function ReviewTile(props) {
  const comment = props.review.comment;
  const rating = props.review.rating;
  const reviewerName = props.review.reviewerName;
  return (
    <div className="review-tile p-4 d-flex flex-column my-3">
      <div className="d-flex flex-row justify-content-between">
        <p>{comment}</p>
        <p className="color-voilet">{rating}/10</p>
      </div>
      <div>{reviewerName}</div>
    </div>
  );
}

export default ReviewTile;
