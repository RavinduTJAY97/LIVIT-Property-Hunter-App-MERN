import React from "react";
import "../../styles/main.css";
import { Helmet } from "react-helmet";
export default function aboutUs() {
  return (
    <div>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="">About Us</h2>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-12 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="about-content">
                Welcome to Livit, your trusted partner in finding the perfect
                home or apartment. Our mission is to make your real estate
                journey seamless and enjoyable, offering comprehensive listings,
                personalized search options, and expert guidance. With years of
                industry experience, we prioritize transparency, integrity, and
                customer satisfaction. Whether you're buying, renting, or
                selling, Livit is here to help you every step of the way.
                Discover your dream property with us today!
              </p>

              <div className="row">
                <div className="col-lg-4 content">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Comprehensive Listings</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Convenient Virtual Tours</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 content">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Personalized Service</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Full Support</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 content">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Market Expertise</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Customer Focused</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
