import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignINForm, setIsSignInForm] = useState();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignINForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Logo"
        />
      </div>
      <form className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">
          {isSignINForm ? "Sign In" : "SignUp"}
        </h1>

        {!isSignINForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="email Address"
          className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
        />
        <button className="p-4 my-6 rounded-lg bg-red-800 w-full">
          {isSignINForm ? "Sign In" : "SignUp"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignINForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registred ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
