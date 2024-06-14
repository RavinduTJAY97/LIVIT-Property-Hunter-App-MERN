import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card
          sx={{
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <CardContent>
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

            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                variant="h5"
                component="h5"
                sx={{ fontWeight: "300", color: "#fe5c00" }}
              >
                Welcome to LIVIT
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#9aa6b0", padding: "10px" }}
              >
                Please Sign in for your account
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                variant="standard"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#00000",
                    fontSize: "0.9rem",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#fe5c00",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#fe5c00",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#fe5c00",
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#00000",
                    fontSize: "0.9rem",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#fe5c00",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#fe5c00",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#fe5c00",
                  },
                }}
              />
              <Box mt={5} ml={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#fe5c00",
                    fontSize: "14px",
                    borderRadius: "50px",
                    width: "90%",
                    "&:hover": {
                      backgroundColor: "#e54b00",
                    },
                  }}
                >
                  Sign in
                </Button>
              </Box>
              <Box
                mt={3}
                display="flex"
                alignItems="right"
                justifyContent="right"
              >
                <Typography mt={1} variant="subtitle1" gutterBottom>
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ color: "#9aa6b0", fontSize: "0.9rem" }}
                  >
                    New Here? Let's Sign Up
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginForm;
