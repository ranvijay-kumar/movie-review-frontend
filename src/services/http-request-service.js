import axios from "axios";
const BASE_URL = "http://18.234.194.174:8000";

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
    return await axios.delete(url);
  } catch (e) {
    return false;
  }
};
const addReview = async (review) => {
  try {
    const url = BASE_URL + "/review";
    return await axios.post(url, review);
  } catch (e) {
    return false;
  }
};
const getReview = async (movieId) => {
  try {
    const url = BASE_URL + "/review/" + movieId;
    return await axios.get(url);
  } catch (e) {
    return false;
  }
};
const deleteReview = async (reviewId) => {
  try {
    const url = BASE_URL + "/review/" + reviewId;
    return await axios.delete(url);
  } catch (e) {
    return false;
  }
};

export { addMovie, getMovieList, deleteMovie, addReview, getReview, deleteReview };
