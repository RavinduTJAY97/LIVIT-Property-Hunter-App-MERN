/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function priceItems() {
  return (
    <div>
      <section id="pricing" className="pricing section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="pricing-item">
                <h3 className="item-header">Free Plan</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Access to basic property listings</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Standard customer support</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Email alerts for new listings</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>
                    <span>Personalized property recommendations</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x"></i>
                    <span>Advanced search filters</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Sign Up
                </a>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-item featured">
                <h3 className="item-header">Business Plan</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>All features of Free Plan</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Personalized property recommendations</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Advanced search filters</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Priority customer support</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Access to exclusive listings</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-item">
                <h3 className="item-header">Developer Plan</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>All features of Business Plan</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Dedicated account manager</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Priority access to new developments</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>In-depth market analysis reports</span>
                  </li>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>Customizable search options</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
