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
import SignUp from "./components/signup";
import ProtectedRoutes from "./components/protectedRoutes";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <GlobalHelmet />
        <BrowserRouter>
          <Routes>
            {/* landing page */}
            <Route path="/" element={<LandingPage />}></Route>

            {/* auth pages */}
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>

            {/* not found */}
            <Route path="*" element={<NotFoundPage />}></Route>
            {/* auth protected */}
            <Route element={<ProtectedRoutes />}>
              {/* properties */}
              <Route path="/properties" element={<Properties />}></Route>
              <Route
                path="/properties-add/:propertyId?"
                element={<AddProperty />}
              ></Route>
              <Route
                path="/properties-view/:propertyId"
                element={<PropertyView />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default App;
