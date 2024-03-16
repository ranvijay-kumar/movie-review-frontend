import { React, useState, useEffect } from "react";
import "./add-review.css";
import { getMovieList, addReview } from "../services/http-request-service";

function AddReview({ closeModal }) {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewer, setReviewer] = useState("");
  useEffect(() => {
    console.log("getting movie data");
    getAllMovie();
  }, []);
  const getAllMovie = async () => {
    setLoading(true);
    const response = await getMovieList();
    if (!response) return;
    const { data: movieItems } = response;

    if (movieItems && movieItems.length) {
      setMovieList(movieItems);
      setSelectedMovieId(movieItems[0]._id);
      console.log(selectedMovieId);
      setLoading(false);
      console.log(movieItems);
    }
  };

  const updateComment = (event) => {
    setComment(event.target.value);
  };

  const updateRating = (event) => {
    setRating(event.target.value);
  };

  const updateReviewer = (event) => {
    setReviewer(event.target.value);
  };

  const updateSelectedMovie = (event) => {
    setSelectedMovieId(event.target.value);
  };

  const addReviewToList = async () => {
    const review = { movie: selectedMovieId, reviewerName: reviewer, rating: rating, comment: comment };
    await addReview(review);
    closeModal();
    console.log(review);
  };

  return (
    <div className="my-container p-4 d-flex flex-column justify-content-between">
      <div className="">Add new review</div>
      <div className="">
        {!loading ? (
          <select
            name="movies"
            value={selectedMovieId}
            onChange={updateSelectedMovie}
            id=""
            className="movie-dropdown">
            {movieList.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        ) : (
          <select>
            <option>Loading movie details</option>
          </select>
        )}
      </div>
      <div className="">
        <input type="text" onChange={updateReviewer} placeholder="Your Name"></input>
      </div>
      <div className="">
        <input
          type="number"
          min={1}
          max={10}
          value={rating}
          onChange={updateRating}
          placeholder="Rating out of 10"></input>
      </div>
      <div className="comment-box">
        <input
          className="comment-box"
          value={comment}
          onChange={updateComment}
          type="text"
          placeholder="Review Comments"></input>
      </div>
      <div className="d-flex flex-column align-items-end">
        <button type="button" onClick={addReviewToList} className="btn add-review-btn">
          Add Review
        </button>
      </div>
    </div>
  );
}

export default AddReview;
