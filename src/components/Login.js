import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData, checkValidateDataSignUp } from "../utils/validate";

const Login = () => {
  const [isSignINForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignINForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    let message = null;
    if (isSignINForm) {
      message = checkValidateData(email.current.value, password.current.value);
    } else {
      message = checkValidateDataSignUp(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }

    //console.log(message);
    setErrorMessage(message);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignINForm ? "Sign In" : "SignUp"}
        </h1>

        {!isSignINForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email Address"
          className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-400 placeholder-gray-700"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 rounded-lg bg-red-800 w-full"
          onClick={handleButtonClick}
        >
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
