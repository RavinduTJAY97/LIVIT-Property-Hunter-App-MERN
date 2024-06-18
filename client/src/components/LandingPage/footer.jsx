/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="livit-footer">
        <img
          src="assets/imgs/livit_logo.png"
          alt=""
          style={{ height: "180px" }}
        />
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: "1.2rem", color: "#fe5c00" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "1.2rem", color: "#fe5c00" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: "1.2rem", color: "#fe5c00" }}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#fe5c00" }} />
          </a>
        </div>
        <p
          style={{ fontSize: "0.8rem", textAlign: "center", marginTop: "1rem" }}
        >
          <br />
          © 2024 All Rights Reserved.
          <br />
        </p>
      </footer>
    </div>
  );
}
