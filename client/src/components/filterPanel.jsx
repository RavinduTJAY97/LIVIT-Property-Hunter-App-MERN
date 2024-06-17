import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FilterPanel = ({ emitter }) => {
  const [filter1, setFilter1] = React.useState("");
  const [filter2, setFilter2] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handlePropertyTypeChange = (event) => {
    setFilter1(event.target.value);
    emitter.emit("propertyType", event.target.value);
  };

  const handleStatusChange = (event) => {
    setFilter2(event.target.value);
    emitter.emit("status", event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    emitter.emit("search", event.target.value);
  };

  return (
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
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        InputLabelProps={{
          style: { color: "#37517e" },
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="filter1-label" style={{ color: "#37517e" }}>
          Property Type
        </InputLabel>
        <Select
          labelId="filter1-label"
          value={filter1}
          onChange={handlePropertyTypeChange}
          label="Filter 1"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Apartment">Apartment</MenuItem>
          <MenuItem value="Condo">Condo</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="filter2-label" style={{ color: "#37517e" }}>
          Status
        </InputLabel>
        <Select
          labelId="filter2-label"
          value={filter2}
          onChange={handleStatusChange}
          label="Filter 2"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="AVAILABLE">Available</MenuItem>
          <MenuItem value="SOLD">Sold</MenuItem>
          <MenuItem value="PENDING">Pending</MenuItem>
        </Select>
      </FormControl>
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
    </Box>
  );
};

export default FilterPanel;
