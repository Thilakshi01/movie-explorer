import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode, user }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#8B0000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h1" component={Link} to="/" sx={{ textDecoration: 'none', color: '#000000', mr: 5 }}>
            Moovix
          </Typography>
          
        </Box>

        <Box>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="default"
          />
          <Typography variant="h5" display="inline" sx={{ ml: 3 }}>
            {darkMode ? 'Dark' : 'Light'} Mode
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
