import React, { useRef, useState } from "react";
import youngManPartying from "../../assets/portrait-young-man-party-with-champagne-bottle.jpg";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserDetailsForm = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    nationality: "",
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.firstname === "" ||
      userInfo.lastname === "" ||
      userInfo.gender === "" ||
      userInfo.nationality === ""
    ) {
      console.log("incomplete");
    } else {
      console.log(userInfo);
    }
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50
      "
      ></div>
      <div
        className="bg-white
      flex justify-center items-center
      mx-50 pt-20
      "
      >
        <img
          src={youngManPartying}
          className="h-110 w-1/2 z-[999] bg-white"
          alt="young man partying"
        />
        <div
          className="h-120 w-1/2 bg-white z-[999] flex items-center
         justify-center text-center rounded-lg"
        >
          <form className="mx-15" onSubmit={handleSubmit}>
            {/*Headings*/}
            <h2 className="font-bold text-2xl text-concrete-800">
              {" "}
              Complete your Festivo Profile!
            </h2>
            <h2 className="text-sm mt-2 text-ring-color">
              Help us personalize your experience on Festivo. Just a few quick
              details to set up your account and get you ready to explore!
            </h2>

            {/*info*/}
            <div className="my-5">
              <div className=" flex flex-col gap-3 items-center my-3">
                {image && (
                  <img
                    alt="profile picture"
                    className="rounded-full h-15 w-15 border-ring-color
                   bg-concrete-900 text-sm ring ring-concrete-300"
                    src={image.image}
                  />
                )}
                <input
                  type="file"
                  name="myImage"
                  className="text-sm text-concrete-800 border
                  rounded
                   border-concrete-400"
                  onChange={onImageChange}
                />
              </div>
              <div className="mt-5">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={userInfo.firstname}
                    onChange={handleChange}
                    className="pl-2 outline-none text-sm text-concrete-800 
                    shadow-ring-color shadow-2xs
                    "
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={userInfo.lastname}
                    onChange={handleChange}
                    className="pl-2 outline-none text-sm text-concrete-800 
                    shadow-ring-color shadow-2xs
                    "
                  />
                </div>

                <div className="flex gap-4 mt-8 items-center justify-evenly">
                  <label className="text-sm">
                    Gender:
                    <br />
                    <select
                      value={userInfo.gender}
                      onChange={handleChange}
                      name="gender"
                      className="outline-none border border-ring-color"
                    >
                      <option value="">-Choose gender-</option>
                      <option className="" value="male">
                        Male
                      </option>
                      <option value="female">Female</option>
                    </select>
                  </label>
                  <input
                    type="text"
                    placeholder="Nationality"
                    name="nationality"
                    value={userInfo.nationality}
                    onChange={handleChange}
                    className="pl-2 outline-none text-sm text-concrete-800 
                    shadow-ring-color shadow-2xs
                    "
                  />
                </div>
              </div>
            </div>

            {/*submit button*/}
            <button
              className=" text-white text-sm bg-ring-color rounded-full w-30 h-7
   hover:bg-white shadow-md transition ease-in hover:text-ring-color mt-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetailsForm;
