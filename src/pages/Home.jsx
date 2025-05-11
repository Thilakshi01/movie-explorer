import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import { Container, CircularProgress } from "@mui/material";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (query = "", page = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <Container>
      <SearchBar setSearchQuery={setSearchQuery} setPage={setPage} />
      {loading ? (
        <CircularProgress />
      ) : (
        <MovieGrid movies={movies} />
      )}
    </Container>
  );
};

export default Home;
