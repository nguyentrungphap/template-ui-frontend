import React from "react";
import slide2 from "./assets/images/banners/slide-lg-2.jpg";
import slide3 from "./assets/images/banners/slide-lg-3.jpg";
const Slider = () => {
  return (
    <section className="section-intro padding-y">
      <div className="container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slide3} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
