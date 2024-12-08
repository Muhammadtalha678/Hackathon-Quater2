import React from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill, GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h1 className="font-semibold text-3xl lg:text-4xl text-center">
        Get In Touch With Us
      </h1>
      <p className="text-sm lg:text-base text-gray-500 text-center mt-4 sm:w-full">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Contact Info Section */}
        <div className="flex flex-col space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black text-2xl" />
            <div>
              <h2
                className={`${poppins.className} text-lg font-medium lg:text-xl`}
              >
                Address
              </h2>
              <p className="text-sm lg:text-base text-gray-700">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhone className="text-black text-2xl" />
            <div>
              <h2
                className={`${poppins.className} text-lg font-medium lg:text-xl`}
              >
                Phone
              </h2>
              <p className="text-sm lg:text-base text-gray-700">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black text-2xl" />
            <div>
              <h2
                className={`${poppins.className} text-lg font-medium lg:text-xl`}
              >
                Working Time
              </h2>
              <p className="text-sm lg:text-base text-gray-700">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded-lg  w-full">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className={`${poppins.className} text-sm lg:text-base font-medium`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-sm lg:text-base"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className={`${poppins.className} text-sm lg:text-base font-medium`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-sm lg:text-base"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className={`${poppins.className} text-sm lg:text-base font-medium`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject (optional)"
                className="mt-2 block w-full rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-sm lg:text-base"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className={`${poppins.className} text-sm lg:text-base font-medium`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here"
                className="mt-2 block w-full rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-sm lg:text-base"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg text-sm lg:text-base font-medium hover:bg-teal-700 focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-gray-100 p-6 rounded-lg ">
        <div>
          <BsTrophy className="text-4xl text-teal-600 mx-auto" />
          <h4 className="mt-4 text-lg font-semibold">High Quality</h4>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>
        <div>
          <GoVerified className="text-4xl text-teal-600 mx-auto" />
          <h4 className="mt-4 text-lg font-semibold">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
        <div>
          <MdSupportAgent className="text-4xl text-teal-600 mx-auto" />
          <h4 className="mt-4 text-lg font-semibold">24/7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
