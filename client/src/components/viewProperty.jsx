import React, { useEffect, useState, useParams } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ImageSlider from "./imageSlider";

const PropertyCard = () => {
  const [property, setProperty] = useState({});
  let { propertyId } = require("react-router-dom").useParams();
  useEffect(() => {
    const fetchProperties = async () => {
      console.log(propertyId);
      try {
        const response = await axios.get(
          `http://localhost:8080/property/${propertyId}`,
          {}
        );
        setProperty(response.data || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProperties();
  }, []);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src="http://localhost:3000/assets/imgs/livit_logo.png"
          alt="Logo"
          style={{ maxHeight: "100px" }}
        />
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Card
          sx={{ maxWidth: 600, border: "2px solid", borderColor: "#fe5c00" }}
        >
          <CardContent>
            <Grid container mb={2}>
              <Grid item xs={12}>
                <ImageSlider />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h5" component="div">
                  {property.title}
                </Typography>
              </Grid>
              <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
                <LocationOnIcon sx={{ color: "#686D76", marginRight: 1 }} />
                <Typography variant="body1" component="div">
                  {property.location}
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="body1" sx={{ mt: 2, color: "#fe5c00" }}>
              AUD {formatPrice(property.price)}
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Typography variant="body1" component="div">
                  <BedIcon sx={{ mr: 0.5, color: "#686D76" }} />{" "}
                  {property.numberOfBedrooms}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" component="div">
                  <BathtubIcon sx={{ mr: 0.5, color: "#686D76" }} />{" "}
                  {property.numberOfBathrooms}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" component="div">
                  <DirectionsCarIcon sx={{ mr: 0.5, color: "#686D76" }} />{" "}
                  {property.numberOfParkings}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {property.description}
            </Typography>
            <Typography variant="body1" component="div" mt={2} mb={2}>
              <LocalPhoneIcon sx={{ mr: 0.5, color: "#686D76" }} /> +094 71 456
              789
            </Typography>

            {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button variant="outlined" color="success" sx={{ mr: 1 }}>
                Edit
              </Button>
              <Button variant="outlined" color="error" sx={{ mr: 1 }}>
                Delete
              </Button>
            </Box> */}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default PropertyCard;
