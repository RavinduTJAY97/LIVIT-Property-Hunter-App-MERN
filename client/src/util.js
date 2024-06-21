// src/util.js
const { jwtDecode } = require("jwt-decode");

const returnToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const checkUserRole = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.role;
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  }
  return null;
};

module.exports = {
  checkUserRole,
  returnToken,
};
