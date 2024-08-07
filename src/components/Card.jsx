import React from "react";
import online_food from "../assets/Online-Food.png";
import dine_out from "../assets/Dine-Out.png";
import live_events from "../assets/live-events.png";

function Card() {
  return (
    <div className="flex mt-10 justify-center gap-5 flex-wrap">
      <div className="w-[343px] rounded-xl overflow-hidden border cursor-pointer transform transition duration-500 hover:scale-105 ">
        <img
          className="w-full h-36 object-cover"
          src={online_food}
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
          <div className=" text-xl">Order Online</div>
          <p className="text-gray-700 text-base">
            Stay home and order to your doorstep
          </p>
        </div>
      </div>

      <div className="w-[343px] rounded-xl overflow-hidden border cursor-pointer transform transition duration-500 hover:scale-105">
        <img
          className="w-full h-36 object-cover"
          src={dine_out}
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
          <div className="text-xl">Dining</div>
          <p className="text-gray-700 text-base">
            View the city's favourite dining venues
          </p>
        </div>
      </div>

      <div className="w-[343px] rounded-xl overflow-hidden border cursor-pointer transform transition duration-500 hover:scale-105">
        <img
          className="w-full h-36 object-cover"
          src={live_events}
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
          <div className=" text-xl">Live Events</div>
          <p className="text-gray-700 text-base">
            Discover India's best events & concerts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
