import React, { useState } from "react";

const Input = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="p-5">
      {fullName}
      <input
        type="text"
        name="fullName"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      {message}
      <textarea
        className="w-full max-w-[300px] p-5 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleCountryChange}>
        <option value="nghean">Nghệ An</option>
        <option value="dongnai">Đồng Nai</option>
        <option value="hcm">Hồ Chí Minh</option>
        <option value="hanoi">Hà Nội</option>
      </select>
    </div>
  );
};

export default Input;
