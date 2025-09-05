import React, { useState } from "react";
import { addFriend } from "../../redux/slice/friendSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const AddFriend = () => {
  const token = useSelector((state) => state.authReducer.authData.token);
  const loading = useSelector((state) => state.friendSlice.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newFriendData, setNewFriendData] = useState({
    firstname: "friday",
    lastname: "Muyiwa",
    nickname: "Dennis",
    relationship: "friend",
    email: "dennisshola@gmail.com",
    tone: "humor",
    humor: "tine",
    length: "long",
    emojis: "yes",
    language: "japan",
    saying: "food",
    hobby: "milk",
    movieBook: "book",
    food: "ona",
    sport: "book",
    personality: "trait",
    messageStyle: "none",
    oneWord: "go",
    values: "hmm",
    insideJoke: "okay",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    Object.entries(newFriendData).forEach(([key, value]) => {
      if (key == "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[key] = "Email is not valid!";
        }
      }
      if (value.length == 0) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) return;
    dispatch(addFriend({ newFriendData, token }));
    //navigate("/home/friends");
  };

  const handleChange = (e) => {
    setNewFriendData({
      ...newFriendData,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <div className="px-30 pt-8 ">
      <div className="h-[550px] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] rounded-xl max-w-[87%] overflow-y-auto">
        <div className="">
          {loading && <Loader />}
          <div className="h-auto p-4 pt-10 text-gray-800 border-b-2 border-gray-300 ">
            <form onSubmit={handleSubmit}>
              <span className="font-bold text-xl text-gray-600 underline  ">
                Basic Information
              </span>
              <div className="pb-10 pt-5 grid grid-cols-2 gap-12 px-10">
                {/* firstname */}
                <div>
                  <label className="block mb-1 font-medium">
                    Whats your friend`s firstname?
                  </label>
                  <input
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    onChange={handleChange}
                    value={newFriendData.firstname}
                    className="w-full border rounded p-2"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>
                {/* lastname */}
                <div>
                  <label className="block mb-1 font-medium">
                    Whats your friend`s lastname?
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    onChange={handleChange}
                    value={newFriendData.lastname}
                    className="w-full border rounded p-2"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>
                {/* nickname */}
                <div>
                  <label className="block mb-1 font-medium">
                    What nickname do they have?
                  </label>
                  <input
                    name="nickname"
                    type="text"
                    placeholder="Nickname"
                    onChange={handleChange}
                    value={newFriendData.nickname}
                    className="w-full border rounded p-2"
                  />
                  {errors.nickname && (
                    <p className="text-red-500 text-sm">{errors.nickname}</p>
                  )}
                </div>
                {/* relationship */}
                <div>
                  <label className="block mb-1 font-medium">
                    Whats your relationship?
                  </label>
                  <input
                    name="relationship"
                    type="text"
                    placeholder="Relationship"
                    onChange={handleChange}
                    value={newFriendData.relationship}
                    className="w-full border rounded p-2"
                  />
                  {errors.tone && (
                    <p className="text-red-500 text-sm">
                      {errors.relationship}
                    </p>
                  )}
                </div>
                {/* email */}
                <div>
                  <label className="block mb-1 font-medium">
                    Whats the email we`ll send well wishes to?
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    value={newFriendData.email}
                    className="w-full border rounded p-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <span className="font-bold text-xl pb-5 text-gray-600 underline">
                Personlization Information
              </span>
              <div className="grid grid-cols-2 gap-10 px-12 text-gray-800 pt-4 ">
                {/* Tone */}
                <div>
                  <label className="block mb-1 font-medium">
                    What tone do they prefer?
                  </label>
                  <select
                    name="tone"
                    value={newFriendData.tone}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Formal">Formal</option>
                    <option value="Casual">Casual</option>
                  </select>
                  {errors.tone && (
                    <p className="text-red-500 text-sm">{errors.tone}</p>
                  )}
                </div>

                {/* Humor */}
                <div>
                  <label className="block mb-1 font-medium">
                    Do they like humor in messages?
                  </label>
                  <select
                    name="humor"
                    value={newFriendData.humor}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Sometimes">Sometimes</option>
                  </select>
                  {errors.humor && (
                    <p className="text-red-500 text-sm">{errors.humor}</p>
                  )}
                </div>

                {/* Message length */}
                <div>
                  <label className="block mb-1 font-medium">
                    Short wishes or long heartfelt messages?
                  </label>
                  <select
                    name="length"
                    value={newFriendData.length}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Short">Short</option>
                    <option value="Long">Long</option>
                  </select>
                  {errors.length && (
                    <p className="text-red-500 text-sm">{errors.length}</p>
                  )}
                </div>

                {/* Emojis */}
                <div>
                  <label className="block mb-1 font-medium">
                    Do they like emojis?
                  </label>
                  <select
                    name="emojis"
                    value={newFriendData.emojis}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.emojis && (
                    <p className="text-red-500 text-sm">{errors.emojis}</p>
                  )}
                </div>
                {/* Free text fields */}
                {[
                  { name: "language", label: "Preferred language?" },
                  { name: "saying", label: "Any saying/quote they like?" },
                  { name: "hobby", label: "Favorite hobby?" },
                  { name: "movieBook", label: "Favorite movie or book?" },
                  { name: "food", label: "Favorite food?" },
                  { name: "sport", label: "Favorite sport?" },
                  { name: "oneWord", label: "Describe them in one word:" },
                  {
                    name: "values",
                    label:
                      "What values matter most? (Family, friendship, etc.)",
                  },
                  {
                    name: "insideJoke",
                    label: "Do you share any inside joke?",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block mb-1 font-medium">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={newFriendData[field.name]}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Personality */}
                <div>
                  <label className="block mb-1 font-medium">
                    Are they more introverted or extroverted?
                  </label>
                  <select
                    name="personality"
                    value={newFriendData.personality}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Introvert">Introvert</option>
                    <option value="Extrovert">Extrovert</option>
                  </select>
                  {errors.personality && (
                    <p className="text-red-500 text-sm">{errors.personality}</p>
                  )}
                </div>

                {/* Message Style */}
                <div>
                  <label className="block mb-1 font-medium">
                    Do they like deep/serious or funny messages?
                  </label>
                  <select
                    name="messageStyle"
                    value={newFriendData.messageStyle}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select</option>
                    <option value="Deep">Deep</option>
                    <option value="Funny">Funny</option>
                    <option value="Both">Both</option>
                  </select>
                  {errors.messageStyle && (
                    <p className="text-red-500 text-sm">
                      {errors.messageStyle}
                    </p>
                  )}
                </div>
              </div>
              <div className="h-20 border-t-2 mt-4 border-gray-300 flex items-center justify-end px-8">
                <button
                  type="submit"
                  className=" h-9 w-21 rounded-lg border-2 border-gray-300 
              shadow-[0px_0px_7px_-1px_rgba(0,0,0,0.2)] text-medium font-bold text-gray-600
              hover:shadow-[0px_0px_7px_3px_rgba(0,0,0,0.2)] transform hover:scale-110 transition-transform duration-500 ease-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
