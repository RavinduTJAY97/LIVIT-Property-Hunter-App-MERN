import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        mt={10}
        sx={{ color: "#fe5c00" }}
      >
        404 - Not Found :(
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist. Go back to{" "}
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
