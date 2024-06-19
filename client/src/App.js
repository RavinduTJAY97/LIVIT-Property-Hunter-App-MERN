// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPageIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import "google-fonts";
import "bootstrap-icons/font/bootstrap-icons.css";
import GlobalHelmet from "./components/globalHelmet";
import SignIn from "./components/login.jsx";
import Properties from "./components/properties.jsx";
import AddProperty from "./components/addProperty.jsx";
import NotFoundPage from "./components/notFoundPage";
import PropertyView from "./components/viewProperty";
import ImageSlider from "./components/imageSlider";
import SignUp from "./components/signup";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <GlobalHelmet />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/properties" element={<Properties />}></Route>
            <Route
              path="/properties-add/:propertyId?"
              element={<AddProperty />}
            ></Route>
            <Route path="/images" element={<ImageSlider />}></Route>
            <Route
              path="/properties-view/:propertyId"
              element={<PropertyView />}
            ></Route>
            {/* not found */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
