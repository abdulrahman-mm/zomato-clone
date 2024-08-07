import React from "react";

function GetTheZomato() {
  return (
    <div className="bg-customLightYellow flex flex-col md:flex-row items-center justify-center gap-10 pb-20 pt-16 px-5">
      <div className="w-[250px] mb-10 md:mb-0">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt="Zomato Mobile App"
        />
      </div>

      <div className="w-full max-w-[450px]">
        <p className="text-3xl md:text-5xl font-normal">Get the Zomato app</p>
        <p className="mt-5 md:mt-10 text-base md:text-lg font-thin">
          We will send you a link, open it on your phone to download the app
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="flex items-center">
            <input
              className="mr-3 h-5 w-5"
              checked={true}
              type="radio"
              name="contact"
              id="email"
            />
            <label htmlFor="email" className="text-base md:text-lg">
              Email
            </label>
          </div>

          <div className="flex items-center">
            <input
              className="mr-3 h-5 w-5"
              type="radio"
              name="contact"
              id="phone"
            />
            <label className="text-base md:text-lg" htmlFor="phone">
              Phone
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <div className="w-full md:w-auto">
            <input
              className="p-3 w-full md:w-72 border border-gray-300 rounded-lg"
              type="text"
              name="contactDetail"
              id="contactDetail"
              placeholder="Email or Phone"
            />
          </div>

          <div className="w-full md:w-auto">
            <button className="bg-red-500 text-white p-3 w-full md:w-auto rounded-md">
              Share App Link
            </button>
          </div>
        </div>

        <p className="text-gray-400 mt-3">Download app from</p>

        <div className="flex mt-3 gap-5">
          <div>
            <img
              className="w-[120px] md:w-[137px]"
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt="Google Play Store"
            />
          </div>

          <div>
            <img
              className="w-[120px] md:w-[137px]"
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="Apple App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTheZomato;
