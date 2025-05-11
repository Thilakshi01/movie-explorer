import React from "react";
import { TextField, Button } from "@mui/material";

const SearchBar = ({ setSearchQuery, setPage }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(event.target.value);
      setPage(1);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <TextField
        label="Search Movies"
        variant="outlined"
        fullWidth
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
