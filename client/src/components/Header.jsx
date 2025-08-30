import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mb-8 mt-20">
        {" "}
        {/* removed extra spacing */}
        {/* Tagline */}
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
          <img src={assets.star_icon} className="w-2.5" alt="star icon" />
          <p>AI Integrated for Smart Bloggers</p>
          <img src={assets.star_icon} className="w-2.5" alt="star icon" />
        </div>
        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
          Your own <span className="text-primary">Intelligent</span> <br />
          blogging platform
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          {" "}
          Write smarter, not harder. <br /> Turn your ideas into powerful blogs
          with the magic of AI.{" "}
        </p>
        <form class="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input
            placeholder="Search for blogs"
            required=""
            class="w-full pl-4 outline-none"
            type="text"
          />
          <button
            type="submit"
            class="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            {" "}
            Search
          </button>
        </form>
      </div>

      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        className="absolute -top-[50px] -z-[1] opacity-50"
        alt="gradient background"
      />
    </div>
  );
};

export default Header;
