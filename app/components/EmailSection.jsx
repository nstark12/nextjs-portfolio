"use client";
import { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/nstark12"}>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/nicole-stark-151410194/"}>
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="alex@gmail.com"
              className="bg-[#18191E] border border-primary-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-primary-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-primary-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-full w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
