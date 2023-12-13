import React, { useState } from "react";
import register from "../../assets/Images/Register.jpg";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row items-start">
      <div className="relative w-full sm:w-1/2 h-full flex items-start">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn your dreams into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offer from us
          </p>
        </div>
        <img
          src={register}
          alt="register"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2 h-full bg-white flex flex-col p-4 sm:p-20 justify-between">
        <div className="flex flex-col ">
          <div className="w-full flex flex-col mb-10">
            <h3 className="text-2xl font-bold mb-4">Login</h3>
            <p className="text-sm mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            ></input>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full  flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p>
          </div>
          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
              Log in
            </button>
            <button className="w-full text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
