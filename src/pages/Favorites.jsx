import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, [navigate, user]);

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        {user?.username}'s Favorite Movies
      </Typography>
      <Grid container spacing={2}>
        {favorites.length > 0 ? (
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <Typography>No favorite movies found!</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
