import React from "react";

export default function services() {
  return (
    <div>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast icon"></i>
                </div>
                <h4 className="item-header">Property Alerts</h4>
                <p>
                  Stay updated with the latest property listings that match your
                  criteria through personalized email alerts.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles icon"></i>
                </div>
                <h4 className="item-header">Neighborhood Insights</h4>
                <p>
                  Access detailed information about neighborhoods, including
                  amenities, schools, and community statistics.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-tag"></i>
                </div>
                <h4 className="item-header">Price Estimator</h4>
                <p>
                  Utilize our online tool to get an estimated value of
                  properties based on current market trends.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi-file-earmark-text"></i>
                </div>
                <h4 className="item-header">Document Assistance</h4>
                <p>
                  Receive support with the preparation and organization of
                  necessary documents for buying, renting, or selling
                  properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
