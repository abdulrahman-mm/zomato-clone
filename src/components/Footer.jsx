import React from "react";
import linkedin from "../assets/linked.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";

function Footer() {
  return (
    <div className="bg-customLightGray flex flex-col items-center mx-auto py-8 px-5">
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl">
        <div className="mb-6 md:mb-0 flex-1">
          <p className="text-4xl font-extrabold">zomato</p>
        </div>

        <div className="flex gap-5 mb-6 md:mb-0 flex-1">
          <select name="" id="" className="p-2 border border-gray-300 rounded-lg">
            <option value="">India</option>
            <option value="">UAE</option>
          </select>

          <select name="" id="" className="p-2 border border-gray-300 rounded-lg">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Polish">Polish</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-10 w-full max-w-6xl">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <p className="font-semibold tracking-widest">ABOUT ZOMATO</p>
          <p className="mt-1 text-gray-400">Who We Are</p>
          <p className="mt-1 text-gray-400">Blog</p>
          <p className="mt-1 text-gray-400">Work With Us</p>
          <p className="mt-1 text-gray-400">Investor Relations</p>
          <p className="mt-1 text-gray-400">Report Fraud</p>
          <p className="mt-1 text-gray-400">Press Kit</p>
          <p className="mt-1 text-gray-400">Contact Us</p>
        </div>

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
          <p className="font-semibold tracking-widest">ZOMAVERSE</p>
          <p className="mt-1 text-gray-400">Zomato</p>
          <p className="mt-1 text-gray-400">Blinkit</p>
          <p className="mt-1 text-gray-400">Feeding India</p>
          <p className="mt-1 text-gray-400">Hyperpure</p>
          <p className="mt-1 text-gray-400">Zomato Live</p>
          <p className="mt-1 text-gray-400">Zomaland</p>
          <p className="mt-1 text-gray-400">Weather Union</p>
        </div>

        <div className="flex flex-col w-full lg:w-1/4">
          <p className="font-semibold tracking-widest">FOR RESTAURANTS</p>
          <p className="mt-1 text-gray-400">Partner with Us</p>
          <p className="mt-1 text-gray-400">Apps For You</p>
        </div>

        <div className="flex flex-col w-full lg:w-1/4">
          <p className="font-semibold tracking-widest">LEARN MORE</p>
          <p className="mt-1 text-gray-400">Privacy</p>
          <p className="mt-1 text-gray-400">Security</p>
          <p className="mt-1 text-gray-400">Terms</p>
          <p className="mt-1 text-gray-400">Sitemap</p>
        </div>

        <div className="flex flex-col w-full lg:w-1/4">
          <p className="font-semibold tracking-widest">SOCIAL LINKS</p>
          <div className="flex gap-3 mt-3">
            <img className="w-6 h-6 rounded-full" src={linkedin} alt="LinkedIn" />
            <img className="w-6 h-6 rounded-full" src={instagram} alt="Instagram" />
            <img className="w-6 h-6 rounded-full" src={twitter} alt="Twitter" />
            <img className="w-6 h-6 rounded-full" src={youtube} alt="YouTube" />
            <img className="w-6 h-6 rounded-full" src={facebook} alt="Facebook" />
          </div>
          <img
            className="w-[137px] mt-3"
            src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            alt="app"
          />
          <img
            className="w-[137px] mt-3"
            src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            alt="app"
          />
        </div>
      </div>

      <hr className="w-full max-w-6xl border-t-2 border-gray-300 mt-6 mb-6" />

      <p className="text-gray-400 text-sm text-center w-full max-w-6xl">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
