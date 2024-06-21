import React from "react";
import axios from "axios";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const LogoutButton = () => {
  const navigate = require("react-router-dom").useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
    // try {
    //   await axios.post("/logout");

    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }
  };

  return (
    <LogoutOutlinedIcon
      onClick={handleLogout}
      sx={{ cursor: "pointer", color: "#fe5c00", fontSize: "40px" }}
    />
  );
};

export default LogoutButton;
