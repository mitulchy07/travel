import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Destination from "../Destination/Destination";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/ImagesSwipper/img1.jpg";
import img2 from "../../assets/ImagesSwipper/img2.jpg";
import img3 from "../../assets/ImagesSwipper/img3.jpg";
import img4 from "../../assets/ImagesSwipper/img4.jpg";
import img5 from "../../assets/ImagesSwipper/img5.jpg";
import img6 from "../../assets/ImagesSwipper/img6.jpg";
import img7 from "../../assets/ImagesSwipper/img7.jpg";
import "./Populardestination.css";

const Populardestination = () => {
  const [showAll, setShowAll] = useState(false);

  const [place, setPlace] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <section className="sm: p-4">
      <Sectiontitle
        heading={"Popular Destination:"}
        subHeading={"By Traveller's"}
      ></Sectiontitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img1} className="rounded-xl"></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">Munich</h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img2}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">
            Liberty Island
          </h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img3}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">Paris</h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img4}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">Monaco</h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img5}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">
            Los Angeles
          </h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img6}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">
            NewYouk City
          </h3>
        </SwiperSlide>
        <SwiperSlide onClick={handleClick} className="element">
          <img src={img7}></img>
          <h3 className="text-4xl text-white -mt-16 p-4 text-bold">Delhi</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Populardestination;
