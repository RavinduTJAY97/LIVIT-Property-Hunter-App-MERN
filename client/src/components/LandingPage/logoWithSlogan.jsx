import React from "react";

export default function logoWithSlogan() {
  return (
    <div>
      <section id="why-us" className="section why-us" data-builder="section">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-lg-12 order-1 order-lg-2 why-us-img">
              <img
                src="assets/imgs/logo_slogan.png"
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
