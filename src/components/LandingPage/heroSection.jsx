import React from "react";
import "../../styles/main.css";

export default function heroSection() {
  return (
    <div>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="zoom-out"
            >
              <h1 className="">We find you a better place to live!</h1>
              <p style={{ marginTop: "15px" }}>
                From Listings to Living: Your Journey Begins Here
              </p>

              <div className="d-flex">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src="assets/imgs/for-sale-amico.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
