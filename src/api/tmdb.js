import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Axios instance for base setup
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch trending movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdb.get("/trending/movie/week");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Search movies by query
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await tmdb.get("/search/movie", {
      params: {
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

// Get movie details
export const getMovieDetails = async (id) => {
  try {
    const response = await tmdb.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos,credits",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

// Get genres
export const getGenres = async () => {
  try {
    const response = await tmdb.get("/genre/movie/list");
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};
