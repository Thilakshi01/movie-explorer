import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Container, Typography, Grid, Button } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setMovie(res.data);
        const trailerRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setTrailer(trailerRes.data.results[0]?.key);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return null;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">{movie.title}</Typography>
          <Typography variant="body1">{movie.overview}</Typography>
          <Button variant="contained" onClick={() => window.history.back()}>
            Go Back
          </Button>
          {trailer && <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
