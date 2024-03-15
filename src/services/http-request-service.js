import axios from "axios";
const BASE_URL = "http://localhost:5000";

const addMovie = async (movie) => {
  try {
    const url = BASE_URL + "/movie";
    return await axios.post(url, movie);
  } catch (e) {
    return false;
  }
};
const getMovieList = async () => {
  try {
    const url = BASE_URL + "/movie";
    return await axios.get(url);
  } catch (e) {
    return false;
  }
};
const deleteMovie = async (id) => {
  try {
    const url = BASE_URL + "/movie/" + id;
    return await axios.get(url);
  } catch (e) {
    return false;
  }
};
const addReview = async (review) => {
  try {
    const url = "/review";
    return await axios.post(url, review);
  } catch (e) {
    return false;
  }
};
const getReview = async (movieId) => {
  try {
    const url = "/review/" + movieId;
    return await axios.get(url);
  } catch (e) {
    return false;
  }
};
const deleteReview = async (reviewId) => {
  try {
    const url = "/review/" + reviewId;
    return await axios.delete(url);
  } catch (e) {
    return false;
  }
};

export default getMovieList;
