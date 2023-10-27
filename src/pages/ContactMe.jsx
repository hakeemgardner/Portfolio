import React from "react";
import Button from "../components/Button";
import Linkedin from "../assets/LinkedinBlack.svg";
import Twitter from "../assets/TwitterBlack.svg";
import Github from "../assets/GithubBlack.svg";
import { useState } from "react";
export default function ContactMe() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5173/ContactMe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="mx-6 md:mx">
      <div className="md:flex">
        <div className="md:w-1/2">
          <h2 className="font-bold text-3xl text-Onyx my-6 font-IbarraRealNova">
            Get in Touch
          </h2>
        </div>
        <div className="md:w-1/2 md:mt-10">
          <p className="">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="flex mt-6">
            <img src={Github} alt="" />
            <img className="ml-4" src={Twitter} alt="" />
            <img className="ml-4" src={Linkedin} alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2">
          <h2 className="font-bold text-3xl text-Onyx my-6 font-IbarraRealNova">
            Contact Me
          </h2>
        </div>
        <div className="md:w-1/2 md:mt-10">
          <form action="">
            <label htmlFor="name">Name</label>
            <input
              className="block w-full h-11 bg-LightGrey my-3 placeholder:text-Onyx"
              type="text"
              placeholder="Jane Appleseed"
            />
            <label htmlFor="email">Email Address</label>
            <input
              className="block w-full h-11 my-3 bg-LightGrey placeholder:text-Onyx"
              type="email"
              placeholder="email@example.com"
            />
            <label htmlFor="email">Message</label>
            <textarea
              className="block w-full h-32 mt-3 bg-LightGrey placeholder:text-Onyx"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How can I help?"
            ></textarea>
          </form>
          <Button
            alternateClass="bg-JapaneseIndigo text-white  w-48 flex items-center text-xs mb-12 mt-6 "
            buttonText="SEND MESSAGE"
          />
        </div>
      </div>
    </div>
  );
}
