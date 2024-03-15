import { React, useState } from "react";
import "./navbar.css";
import AddMovie from "./add-movie";
import AddReview from "./add-review";

function Navbar() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const openMovieModal = () => {
    setIsMovieModalOpen(true);
  };

  const closeMovieModal = () => {
    setIsMovieModalOpen(false);
  };
  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  return (
    <>
      <div className="navbar px-2 d-flex justify-content-between align-items-center">
        <div className="">MOVIECRITIC</div>
        <div className="d-flex">
          <button onClick={openMovieModal} type="button" className="btn mx-2 add-movie-btn">
            Add new movie
          </button>
          <button onClick={openReviewModal} type="button" className="btn add-review-btn">
            Add new review
          </button>
        </div>
      </div>
      {isMovieModalOpen && (
        <div className="modal-background">
          <AddMovie closeModal={closeMovieModal}></AddMovie>
        </div>
      )}
      {isReviewModalOpen && (
        <div className="modal-background">
          <AddReview closeModal={closeReviewModal}></AddReview>
        </div>
      )}
    </>
  );
}

export default Navbar;
