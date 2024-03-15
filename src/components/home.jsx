import { React, useEffect, useState } from "react";
import "./home.css";
import Navbar from "./navbar";
import Footer from "./footer";
import getMovieList from "../services/http-request-service";
import MovieTile from "./movie-tile";
import axios from "axios";

const Home = () => {
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [movieList, setMovieList] = useState([]);
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
  return (
    <div className="home d-flex flex-column justify-content-between">
      <Navbar />
      <div className="px-2 home-body">
        <div>
          <h1>The best movie reviews site!</h1>
          <div className="d-flex">
            <input type="text"></input>
            <button className="mx-3 btn add-review-btn">Search</button>
          </div>
        </div>
        <div className="">
          {movieList.map((item) => {
            return <MovieTile key={item.id} movie={item}></MovieTile>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
