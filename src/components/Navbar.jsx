import React from "react";
import { AppBar, Toolbar, Button, Typography, Switch, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setDarkMode, user, setUser }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar 
    position="sticky"
    sx={{backgroundColor:"#8B0000"}}
    >
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 6 }}>
          <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
            Moovix
          </Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Switch onChange={(e) => setDarkMode(e.target.checked)} />

          <Button component={Link} to="/favorites" sx={{ color: "#000000", textTransform: "none", }}>
          <Typography variant="h2" sx={{ flexGrow: 6 }}></Typography>
            Favorites
          </Button>

          {user ? (
            <Button onClick={handleLogout} sx={{color:"#000000", textTransform: "none"}}>
              Logout 
            </Button>
          )  : (
            <Button 
            component={Link} to="/login"
            sx={{ color: "#000000", textTransform: "none" }}>
              Login
            </Button>
          )}
        </Box> 
      </Toolbar>   
    </AppBar>
  );
};

export default Navbar;
