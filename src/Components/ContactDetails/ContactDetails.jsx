import React from "react";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import telephone from "../../assets/Images/telephone.jpg";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  return (
    <section className="m-5">
      <Sectiontitle
        heading={"Contact Us:"}
        subHeading={"Want to start?"}
      ></Sectiontitle>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="hidden lg:block" src={telephone} alt="Album" />
        </figure>
        <div className="card-body flex flex-col items-center justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Name?</span>
            </div>
            <input
              type="text"
              placeholder="Ex: John Doe"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Email?</span>
            </div>
            <input
              type="text"
              placeholder="Ex: John@Doe.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What do want to know?</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="What do you want to know?"
            ></textarea>
          </label>
          <Link className="btn btn-neutral w-1/3">Submit</Link>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
