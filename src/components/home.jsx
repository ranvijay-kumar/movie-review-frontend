import { React, useEffect, useState } from "react";
import "./home.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { getMovieList } from "../services/http-request-service";
import MovieTile from "./movie-tile";
import MovieDetails from "./movie-details";

const Home = () => {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    console.log("getting movie data");
    getAllMovie();
  }, []);
  const getAllMovie = async () => {
    setLoadingMovie(true);
    const response = await getMovieList();
    setLoadingMovie(false);
    if (!response) return;
    const { data: movieItems } = response;

    if (movieItems && movieItems.length) {
      setMovieList(movieItems);
      console.log(movieItems);
    }
  };
  const showMovieReview = (movie) => {
    setIsHomePage(false);
    setSelectedMovie(movie);
  };
  return (
    <div className="home d-flex flex-column justify-content-between">
      <Navbar />
      <div className="px-2 home-body">
        {isHomePage ? (
          <>
            <div>
              <h1>The best movie reviews site!</h1>
              <div className="d-flex">
                <input type="text"></input>
                <button className="mx-3 btn add-review-btn">Search</button>
              </div>
            </div>
            <div className="">
              {movieList.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      showMovieReview(item);
                    }}>
                    <MovieTile key={item.id} movie={item}></MovieTile>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div>
            <MovieDetails movie={selectedMovie}></MovieDetails>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
