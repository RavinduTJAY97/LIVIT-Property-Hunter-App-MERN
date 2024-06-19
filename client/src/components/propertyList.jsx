import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Pagination,
  Container,
  Box,
} from "@mui/material";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const PropertyList = ({ propertyType, status, search }) => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const propertiesPerPage = 4;
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = require("react-router-dom").useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/property`, {
          params: {
            page,
            limit: propertiesPerPage,
            propertyType,
            status,
            search,
          },
        });
        setProperties(response.data.properties || []);
        setTotalPages(Math.ceil(response.data.total / propertiesPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProperties();
  }, [page, propertyType, status, search]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US").format(price);
  };
  const handlePropertyClick = (propertyId) => {
    setSelectedProperty(propertyId === selectedProperty ? null : propertyId);
    navigate(`/properties-view/${propertyId}`);
  };

  return (
    <Container>
      <Grid container spacing={3} direction="column">
        {properties.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Sorry No properties available
            </Typography>
          </Grid>
        ) : (
          properties.map((property) => (
            <Grid item xs={12} key={property._id}>
              <Card
                onClick={() => handlePropertyClick(property._id)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 2,
                  maxWidth: 900,
                  position: "relative",
                  boxShadow:
                    "0px 2px 1px -1px #fe5c00, 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 150 }}
                  image={"assets/imgs/ap1_1.jpg"}
                  alt={property.title}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {property.propertyType}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    mt={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <BedIcon sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                    {property.numberOfBedrooms} |
                    <BathtubIcon sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                    {property.numberOfBathrooms} |
                    <DirectionsCarIcon sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                    {property.numberOfParkings}
                  </Typography>
                </CardContent>
                <Box sx={{ position: "absolute", top: 75, right: 16 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "#fe5c00" }}
                  >
                    AUD {formatPrice(property.price)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationOnIcon
                    sx={{ color: "#686D76", fontSize: 16, mr: 0.5 }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "#686D76", fontSize: 12 }}
                  >
                    {property.location}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        sx={{
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              color: "#fff",
              backgroundColor: "#fe5c00",
              "&:hover": {
                backgroundColor: "gray",
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default PropertyList;
