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
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Signup = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = require("react-router-dom").useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = formValidations();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post("http://localhost:8080/user", formValues);
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/properties");
        }, 1000);
      } catch (error) {
        if (
          error.response &&
          error.response.data.error === "Email already exists"
        ) {
          setError((prevError) => ({
            ...prevError,
            email: "Email already exists",
          }));
        } else {
          setError(null);
        }
        console.error("Error fetching data:", error);
      }
    }
  };

  const formValidations = () => {
    const errors = {};

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: value,
      };
    });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const checkPasswordMatch = (password) => {
    setError((prevError) => ({
      ...prevError,
      confirmPassword:
        password !== formValues.password ? "Passwords do not match" : "",
    }));
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
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
                Let's get started, Crete your account here
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="text"
                variant="standard"
                fullWidth
                margin="normal"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#00000",
                    fontSize: "0.9rem",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#686D76",
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
              {error.email && (
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  style={{ color: "red" }}
                >
                  {error.email}
                </Typography>
              )}

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="standard"
                fullWidth
                margin="normal"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#00000",
                    fontSize: "0.9rem",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#686D76",
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {error.password && (
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  style={{ color: "red" }}
                >
                  {error.password}
                </Typography>
              )}
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="standard"
                fullWidth
                margin="normal"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onInput={(e) => checkPasswordMatch(e.target.value)}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#00000",
                    fontSize: "0.9rem",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#686D76",
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
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {error.confirmPassword && (
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  style={{ color: "red" }}
                >
                  {error.confirmPassword}
                </Typography>
              )}
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
                  Sign up
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
                    href="/sign-in"
                    underline="hover"
                    sx={{ color: "#9aa6b0", fontSize: "0.9rem" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert onClose={handleSnackbarClose} severity="success">
            Welcome to LIVIT
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Signup;
