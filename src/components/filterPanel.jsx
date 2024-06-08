import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterPanel = () => {
  const [filter1, setFilter1] = React.useState("");
  const [filter2, setFilter2] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleFilter1Change = (event) => {
    setFilter1(event.target.value);
  };

  const handleFilter2Change = (event) => {
    setFilter2(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    // < -- Filter panel  -->
    <Box
      sx={{
        width: 250,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        border: "2px solid #fe5c00",
        borderRadius: 2,
        height: "100%",
      }}
    >
      {/* Search field */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        InputLabelProps={{
          style: { color: "#37517e" },
        }}
      />
      {/* /Search field */}

      {/* Filter by location */}
      <FormControl fullWidth>
        <InputLabel id="filter1-label" style={{ color: "#37517e" }}>
          Filter 1
        </InputLabel>
        <Select
          labelId="filter1-label"
          value={filter1}
          onChange={handleFilter1Change}
          label="Filter 1"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </FormControl>
      {/* /Filter by location */}

      {/* Filter by property type */}
      <FormControl fullWidth>
        <InputLabel id="filter2-label" style={{ color: "#37517e" }}>
          Filter 2
        </InputLabel>
        <Select
          labelId="filter2-label"
          value={filter2}
          onChange={handleFilter2Change}
          label="Filter 2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Option A</MenuItem>
          <MenuItem value={20}>Option B</MenuItem>
          <MenuItem value={30}>Option C</MenuItem>
        </Select>
      </FormControl>
      {/* /Filter by property type */}

      {/* logo */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="16px"
      >
        <img
          src="assets/imgs/livit_logo.png"
          alt="Logo"
          style={{ maxHeight: "150px" }}
        />
      </Box>
      {/* /logo */}
    </Box>
    // </ -- Filter panel -->
  );
};

export default FilterPanel;
