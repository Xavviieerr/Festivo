import React, { use, useState } from "react";
import FriendsWithpizza from "../../assets/friends-with-pizza-drinks-low-angle.jpg";
import Logo from "../../assets/logo2.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation function
  const validate = () => {
    // declarations
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const newErrors = {};

    // username checker
    if (!formData.username) {
      newErrors.name = "Name is required";
    } else if (formData.username.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // email checker
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email must be in format example@email.com";
    }

    //password checker
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Your password should contain UPPERCASE and special characters";
    }

    //confirmpassword checker
    if (formData.confirmpassword !== formData.password) {
      newErrors.confirmpassword = "Password and confirmpassword must match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(validationErrors);
    } else {
      setErrors({});
      console.log("voila");
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-1/2 flex items-center px-24 text-center">
          {/* festivo`s login page logo */}
          <img
            src={Logo}
            alt="Festivo logo"
            className="flex-shrink-0 h-17 w-17 rounded-2xl absolute top-5 left-5
            "
          />
          {/* form for user details */}
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-4xl">
              {isSignup ? "Sign Up!" : "Welcome Back!"}
            </h1>
            <h3 className="text-sm my-4 mb-8 text-concrete-600">
              Send personalized birthday wishes to your loved ones with the
              <span className="font-bold text-concrete-900"> Festivo app</span>.
              Get started for free.
            </h3>
            <div
              className="flex flex-col
            "
            >
              <input
                type="text"
                placeholder="Username"
                className=" rounded-full pl-5 h-9 border-2 border-concrete-700 mb-3"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-red-600">{errors.name}</small>
              )}
              {isSignup ? (
                <>
                  <input
                    type="text"
                    placeholder="Email"
                    className=" rounded-full pl-5 h-9 border-2 border-concrete-700 mb-3"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small className="text-red-600">{errors.email}</small>
                  )}
                </>
              ) : (
                ""
              )}
              <input
                type="password"
                placeholder="Password"
                className=" rounded-full pl-5 h-10 border-2 border-concrete-700 mb-3"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="text-red-600">{errors.password}</small>
              )}
              {isSignup ? (
                <>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className=" rounded-full pl-5 h-9 border-2 border-concrete-700 mb-3"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                  />
                  {errors.confirmpassword && (
                    <small className="text-red-600">
                      {errors.confirmpassword}
                    </small>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
            <span className="text-concrete-700 text-sm flex hover:cursor-pointer flex-row-reverse hover:pointer">
              Forgot password?
            </span>

            {/* form submit button */}
            <button
              type="submit"
              className="bg-black rounded-full h-10 text-concrete-200 w-full my-7"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>

            {/* demacator */}
            <div className="flex items-center justify-center font-bold">
              <hr className="w-20 text-concrete-400" />
              or continue with
              <hr className="w-20 text-concrete-400" />
            </div>

            {/* google and facebook icons */}
            <div className="flex justify-center gap-6 mt-6 mb-9">
              <button
                className="h-12 w-12 hover:cursor-pointer
               bg-black text-concrete-300 flex justify-around items-center text-xl
               rounded-full "
              >
                <FaGoogle />
              </button>
              <button
                className="h-12 w-12 hover:cursor-pointer
               bg-black text-concrete-300 text-xl rounded-full
               flex justify-around items-center
               "
              >
                <FaFacebook />
              </button>
            </div>

            {/* to toggle between login and signup pages */}
            <div
              onClick={() => setIsSignup((prev) => !prev)}
              className="font-bold text-sm hover:cursor-pointer"
            >
              {isSignup ? "Already a member" : "Not a member"}{" "}
              <span className="text-concrete-400">
                {isSignup ? "Login" : "Register now"}
              </span>{" "}
            </div>
          </form>
        </div>

        {/* right hand side image */}

        <img
          src={FriendsWithpizza}
          alt="Friends celebrating with pizza and drinks"
          className=" w-1/2 rounded-4xl my-7 object-cover mx-5 brightness-50"
        />
      </div>
    </>
  );
};

export default Login;
