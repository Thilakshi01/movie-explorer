import React from 'react';
import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ handleSearch }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <TextField
        label="Search for movies..."
        variant="outlined"
        fullWidth
        onKeyPress={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: 'white',
          borderRadius: 1,
        }}
      />
    </Paper>
  );
};

export default SearchBar;
