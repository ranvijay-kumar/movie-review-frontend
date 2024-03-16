import React from "react";
import './movie-tile.css';

function MovieTile(props) {
  let name = props.movie.name;
  let releaseDate = new Date(props.movie.releaseDate).toLocaleDateString();
  let rating = props.movie.averageRating;
  let ratingStr = "";
  if(rating) {
    ratingStr = rating + "/10";
  } else{
    ratingStr = "Not Rated Yet"
  }
  return (
      <div className="tile m-4 p-4 d-flex flex-column justify-content-around">
        <div className="px-2">{name}</div>
        <div className="px-2">Released: {releaseDate}</div>
        <div className="px-2">Rating: {ratingStr}</div>
      </div>
  );
}

export default MovieTile;
