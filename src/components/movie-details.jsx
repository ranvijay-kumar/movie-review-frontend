import React from "react";
import "./movie-details.css";
import Navbar from "./navbar";
import Footer from "./footer";

function MovieDetails() {
  return (
    <div className="movie-details d-flex flex-column justify-content-between">
      <Navbar />
      <div className="px-2 home-body">
        <div>
          <h1>The best movie reviews site!</h1>
          <div>
            <input type="text"></input> <button>Search</button>
          </div>
        </div>
        <div className="">{/* it contains movie name */}</div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
