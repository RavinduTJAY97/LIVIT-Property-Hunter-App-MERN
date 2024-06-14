// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPageIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import "google-fonts";
import "bootstrap-icons/font/bootstrap-icons.css";
import GlobalHelmet from "./components/globalHelmet";
import Login from "./components/login.jsx";
import Properties from "./components/properties.jsx";
import AddProperty from "./components/addProperty.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <div className="App">
      <GlobalHelmet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/properties" element={<Properties />}></Route>
          <Route path="/properties-add" element={<AddProperty />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
