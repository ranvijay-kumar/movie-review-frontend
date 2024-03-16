import { React, useState } from "react";
import "./add-movie.css";
import { addMovie } from "../services/http-request-service";

function AddMovie({ closeModal }) {
  const [movieName, setMovieName] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date());

  const addMovieToList = async () => {
    const movie = {name: movieName, releaseDate: releaseDate};
    await addMovie(movie);
    closeModal();
    console.log(movieName);
    console.log(releaseDate);
  };
  const updateMovieName = (event) => {
    setMovieName(event.target.value);
  };
  const updateReleaseDate = (event) => {
    setReleaseDate(event.target.value);
  };

  return (
    <div className="my-container p-4 d-flex flex-column justify-content-between">
      <div className="">Add new movie</div>
      <div className="">
        <input type="text" value={movieName} onChange={updateMovieName}></input>
      </div>
      <div className="">
        <input type="date" value={releaseDate} onChange={updateReleaseDate} placeholder="Release Date"></input>
      </div>
      <div className="d-flex flex-column align-items-end">
        <button onClick={addMovieToList} type="button" className="btn add-review-btn">
          Create Movie
        </button>
      </div>
    </div>
  );
}

export default AddMovie;
