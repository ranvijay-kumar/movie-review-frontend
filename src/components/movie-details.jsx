import { React, useEffect, useState } from "react";
import { getReview } from "../services/http-request-service";
import ReviewTile from "./review-tile";

function MovieDetails(props) {
  const [loadingReview, setLoadingReview] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const movieId = props.movie._id;
  console.log(props);

  useEffect(() => {
    console.log("getting movie review data");
    getAllReview();
  }, []);
  const getAllReview = async () => {
    setLoadingReview(true);
    const response = await getReview(movieId);
    setLoadingReview(false);
    if (!response) return;
    const { data: reviewItems } = response;

    if (reviewItems && reviewItems.length) {
      setReviewList(reviewItems);
      console.log(reviewItems);
    }
  };

  return (
    <div className="movie-details d-flex flex-column justify-content-between">
      <div className="px-2 home-body">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h1>{props.movie.name}</h1>
          <div>{props.movie.averageRating}</div>
        </div>
        <div className="">
          {reviewList.map((item) => {
            return (
              <div key={item.id}>
                <ReviewTile key={item.id} review={item}></ReviewTile>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
