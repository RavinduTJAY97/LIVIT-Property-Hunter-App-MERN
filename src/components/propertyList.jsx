import React, { useState } from "react";
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

/* Sample products  */

const sampleProducts = [
  {
    id: 1,
    name: "Apartment for sale in Brisbane",
    subheading: "3 Bedrooms | 2 Bathrooms | 1 Car Parking Area ",
    price: "AUD 415,000",
    image: "assets/imgs/ap1_1.jpg",
  },
  {
    id: 2,
    name: "Apartment for sale in Sydney",
    subheading: "3 Bedrooms | 2 Bathrooms | 1 Car Parking Area ",
    price: "AUD 425,000",
    image: "assets/imgs/ap1_2.jpg",
  },
  {
    id: 3,
    name: "Apartment for sale in Melbourne",
    subheading: "3 Bedrooms | 2 Bathrooms | 1 Car Parking Area ",
    price: "AUD 435,000",
    image: "assets/imgs/ap1_3.jpg",
  },
  {
    id: 4,
    name: "Apartment for sale in Perth",
    subheading: "3 Bedrooms | 2 Bathrooms | 1 Car Parking Area ",
    price: "AUD 445,000",
    image: "assets/imgs/ap1_4.jpg",
  },
  {
    id: 5,
    name: "Apartment for sale in Perth",
    subheading: "3 Bedrooms | 2 Bathrooms | 1 Car Parking Area ",
    price: "AUD 455,000",
    image: "assets/imgs/ap1_5.jpg",
  },
];

const ProductsList = () => {
  const [page, setPage] = useState(1);
  /* setting a constant for products per page  */
  const productsPerPage = 4;
  /* pagination handle  */
  const handleChange = (event, value) => {
    setPage(value);
  };

  /* start index depending on page  */

  const startIndex = (page - 1) * productsPerPage;

  /* selected products depending on page   */

  const selectedProducts = sampleProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <Container>
      <Grid container spacing={3} direction="column">
        {selectedProducts.map((product) => (
          <Grid item xs={12} key={product.id}>
            {/* Add product card  */}
            <Card
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
              {/* Add product image  */}
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150 }}
                image={product.image}
                alt={product.name}
              />
              {/* /Add product image */}

              {/* Add product details  */}
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {product.subheading}
                </Typography>
              </CardContent>
              {/* /Add product details  */}

              {/* Add product price  */}
              <Box sx={{ position: "absolute", top: 75, right: 16 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: "#fe5c00" }}
                >
                  {product.price}
                </Typography>
              </Box>
              {/* /Add product price  */}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination  */}
      <Pagination
        count={Math.ceil(sampleProducts.length / productsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        sx={{
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              color: "#fff",
              backgroundColor: "#fe5c00",
            },
          },
        }}
      />
      {/* /Pagination  */}
    </Container>
  );
};

export default ProductsList;
