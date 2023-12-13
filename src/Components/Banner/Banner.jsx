import React from "react";
import slide1 from "../../assets/Images/slide1.jpg";
import slide2 from "../../assets/Images/slide2.jpg";
import slide3 from "../../assets/Images/slide3.jpg";
import slide4 from "../../assets/Images/slide4.jpg";
import Populardestination from "../Populardestination/Populardestination";
import Ourdeals from "../Ourdeals/Ourdeals";
import ContactDetails from "../ContactDetails/ContactDetails";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1} className="w-full rounded-b-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="text-center text-white bg-black bg-opacity-50 p-3 rounded-md hidden md:block">
              <p className="hidden sm:block">
                "Wanderlust fuels the adventurous soul."
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-bold">
                Your Journey our Story
              </h2>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="text-center text-white bg-black bg-opacity-50 p-3 rounded-md hidden md:block">
              <p className="hidden sm:block">
                "Wanderlust fuels the adventurous soul."
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-bold">
                Your Journey our Story
              </h2>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="text-center text-white bg-black bg-opacity-50 p-3 rounded-md hidden md:block">
              <p className="hidden sm:block">"Explore more, worry less."</p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-bold">
                Your Journey our Story
              </h2>
            </div>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <div className="text-center text-white bg-black bg-opacity-50 p-3 rounded-md hidden md:block ">
              <p className="hidden sm:block">
                "Journey before destination always."
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-bold">
                Your Journey our Story
              </h2>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Populardestination></Populardestination>
      <Ourdeals></Ourdeals>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default Banner;
