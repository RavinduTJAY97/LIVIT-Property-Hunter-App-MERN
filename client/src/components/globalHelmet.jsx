// src/components/GlobalHelmet.js
import React from "react";
import { Helmet } from "react-helmet";

const GlobalHelmet = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>LIVIT</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />

    {/* < google fonts> */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default GlobalHelmet;
