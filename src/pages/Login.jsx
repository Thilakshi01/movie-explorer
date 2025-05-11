import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";


const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isRegistering) {
      const userExists = users.find((u) => u.username === username);
      if (userExists) {
        setError("Username already taken.");
        return;
      }

      const newUser = { username, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      navigate("/");
    } else {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <form onSubmit={handleAuth}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
        </form>
        <FormControlLabel
          control={
            <Switch
              checked={isRegistering}
              onChange={() => {
                setIsRegistering(!isRegistering);
                setError("");
              }}
              color="primary"
            />
          }
          label="Switch to Register"
          sx={{ mt: 2 }}
        />
      </Box>
    </Container>
  );
};

export default Login;