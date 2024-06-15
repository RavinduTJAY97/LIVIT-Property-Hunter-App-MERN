import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Container,
  Typography,
  CssBaseline,
  Box,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe5c00",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h5: {
      color: "#fe5c00",
    },
  },
});

const AddProperty = () => {
  const [propertyType, setPropertyType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [formValues, setFormValues] = React.useState({
    title: "",
    bathrooms: "",
    bedrooms: "",
    garage: "",
    description: "",
    price: "",
    location: "",
  });
  const [error, setError] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: value,
      };
    });
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = [];

    switch (true) {
      case !formValues.title:
        errors.push("Title is required");
        break;
      case !propertyType:
        errors.push("Property Type is required");
        break;
      case !formValues.location:
        errors.push("Location is required");
        break;
      case !formValues.bathrooms:
        errors.push("Bathrooms is required");
        break;
      case !formValues.bedrooms:
        errors.push("Bedrooms is required");
        break;
      case !formValues.garage:
        errors.push("Garage is required");
        break;
      case !formValues.description:
        errors.push("Description is required");
        break;
      case !formValues.price:
        errors.push("Price is required");
        break;
      case !status:
        errors.push("Status is required");
        break;
      default:
        break;
    }

    if (errors.length > 0) {
      setError(errors[0]);
      setOpenSnackbar(true);
      return;
    }

    const data = {
      ...formValues,
      propertyType,
      status,
    };

    try {
      setError("Property added successfully!");
      const response = await fetch("https://api.example.com/add-property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setError("Property added successfully!");
      } else {
        setError("Failed to add property");
      }
    } catch (error) {
      setError("An error occurred");
    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src="assets/imgs/livit_logo.png"
          alt="Logo"
          style={{ maxHeight: "100px" }}
        />
      </Box>
      <Container component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ alignSelf: "flex-start" }}
          >
            Add Property
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  margin="normal"
                  value={formValues.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" variant="standard">
                  <InputLabel id="property-type-label">
                    Property Type
                  </InputLabel>
                  <Select
                    labelId="property-type-label"
                    id="property-type"
                    value={propertyType}
                    onChange={handlePropertyTypeChange}
                    label="Property Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="HOUSE">House</MenuItem>
                    <MenuItem value="APARTMENT">Apartment</MenuItem>
                    <MenuItem value="CONDO">Condo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  margin="normal"
                  value={formValues.location}
                  onChange={handleChange}
                  sx={{ width: "50%" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="bathrooms"
                  label="Bathrooms"
                  name="bathrooms"
                  type="number"
                  margin="normal"
                  value={formValues.bathrooms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="bedrooms"
                  label="Bedrooms"
                  name="bedrooms"
                  type="number"
                  margin="normal"
                  value={formValues.bedrooms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="garage"
                  label="Garage"
                  name="garage"
                  type="number"
                  margin="normal"
                  value={formValues.garage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  margin="normal"
                  value={formValues.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  type="number"
                  margin="normal"
                  value={formValues.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" variant="standard">
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    id="status"
                    value={status}
                    onChange={handleStatusChange}
                    label="Status"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="AVAILABLE">Available</MenuItem>
                    <MenuItem value="SOLD">Sold</MenuItem>
                    <MenuItem value="PENDING">Pending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 10,
                  mb: 2,
                  borderRadius: "50px",
                  width: "15%",
                  "&:hover": {
                    backgroundColor: "#e54b00",
                  },
                }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={8000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={error.includes("successfully") ? "success" : "error"}
          >
            {error}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default AddProperty;
