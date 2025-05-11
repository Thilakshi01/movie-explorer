import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const handleSaveFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!savedFavorites.find((fav) => fav.id === movie.id)) {
      savedFavorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(savedFavorites));
    }
  };

  return (
    <Card sx={{ width: 200 }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">{movie.release_date}</Typography>
        <Button variant="contained" onClick={handleSaveFavorite}>Save to Favorites</Button>
        <Button variant="outlined" component={Link} to={`/movie/${movie.id}`}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
