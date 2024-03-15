import React from "react";
import "./add-review.css";

function AddReview() {
  return (
    <div className="my-container p-4 d-flex flex-column justify-content-between">
      <div className="">Add new review</div>
      <div className="">
        <input type="select"></input>
      </div>
      <div className="">
        <input type="text" placeholder="Your Name"></input>
      </div>
      <div className="">
        <input type="number" placeholder="Rating out of 10"></input>
      </div>
      <div className="comment-box">
        <input className="comment-box" type="text" placeholder="Review Comments"></input>
      </div>
      <div className="d-flex flex-column align-items-end">
        <button type="button" className="btn add-review-btn">
          Add Review
        </button>
      </div>
    </div>
  );
}

export default AddReview;
