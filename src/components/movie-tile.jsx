import React from "react";
import './movie-tile.css'

function MovieTile(props) {
  let name = "Star Wars: A New Hope";
  let releaseDate="1st August, 2022";
  let rating = 9;
  let ratingStr = "";
  return (
      <div className="tile p-4 d-flex flex-column justify-content-around">
        <div className="px-2">{name}</div>
        <div className="px-2">Released: {releaseDate}</div>
        <div className="px-2">Rating: {rating}/10</div>
      </div>
  );
}

export default MovieTile;
