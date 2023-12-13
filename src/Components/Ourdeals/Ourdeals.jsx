import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Ourdeals.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

import img1 from "../../assets/ImagesSwipper/img1.jpg";
import img2 from "../../assets/ImagesSwipper/img2.jpg";
import img3 from "../../assets/ImagesSwipper/img3.jpg";
import img4 from "../../assets/ImagesSwipper/img4.jpg";
import img5 from "../../assets/ImagesSwipper/img5.jpg";
import img6 from "../../assets/ImagesSwipper/img6.jpg";
import img7 from "../../assets/ImagesSwipper/img7.jpg";
import Sectiontitle from "../Sectiontitle/Sectiontitle";

const Ourdeals = () => {
  return (
    <section className="my-5">
      <Sectiontitle
        heading={"Our Packages:"}
        subHeading={"Let's Explore"}
      ></Sectiontitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        <SwiperSlide>
          <div className="card w-auto glass p-5">
            <figure>
              <img className="rounded-xl " src={img6} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center md:text-4xl text-black text-bold">
                Budget package
              </h2>
              <p className="card-title justify-center text-black">
                Explore top destinations affordably memorable experiences
                without breaking the bank!!
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-lime-600 text-black">
                  Book now!
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-auto glass p-5">
            <figure>
              <img className="rounded-xl" src={img2} alt="car!" />
            </figure>

            <div className="card-body">
              <h2 className="card-title justify-center md:text-4xl text-black text-bold">
                Standard Package
              </h2>
              <p className="card-title justify-center text-black">
                Comfortable travel, guided tours, and mid-range accommodations.
              </p>
              <div className="card-actions justify-center">
                <div className="indicator">
                  <span className="indicator-item badge bg-lime-200 text-black uppercase">
                    Best Deal
                  </span>
                  <button className="btn bg-lime-600 text-black">
                    Book now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-auto glass p-5">
            <figure>
              <img className="rounded-xl" src={img5} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center md:text-4xl text-black text-bold">
                Premium Package
              </h2>
              <p className="card-title justify-center text-black">
                Luxury accommodations, exclusive experiences, and personalized
                travel services.
              </p>
              <div className="card-actions justify-center">
                <button className="btn bg-lime-600 text-black">
                  Book now!
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Ourdeals;
