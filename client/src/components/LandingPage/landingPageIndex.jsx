import React from "react";
import NavigationBar from "./navigationBar";
import HeroSection from "./heroSection";
import AboutUs from "./aboutUs";
import Services from "./services";
import LogoWithSlogan from "./logoWithSlogan";
import PriceItems from "./priceItems";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <LogoWithSlogan />
      <PriceItems />
      <Footer />
    </div>
  );
}
