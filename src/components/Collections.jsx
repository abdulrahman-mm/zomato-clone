import React from "react";
import play from '../assets/play.png';
import newly from '../assets/newly.png';
import seaView from '../assets/seaView.png';
import best from '../assets/best.png';
import buffets from '../assets/buffets.png';

function Collections() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center flex-wrap mx-auto px-5 md:px-8">
      
      <p className="text-4xl max-w-[1050px] text-left">Collections</p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-2 gap-4 md:gap-10 max-w-[1050px] flex-wrap text-center md:text-left">
        <p className="text-lg font-light">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends
        </p>
        <p className="text-red-300 cursor-pointer hover:text-red-500 flex items-center justify-center md:justify-start">
          All collections in Chennai 
          <img className="inline h-3 w-2 ml-1 md:ml-3" src={play} alt="" /> 
        </p>
      </div>

      <div className="flex gap-2 mt-10 flex-wrap justify-center">
        <img className="h-[200px] md:h-[320px] max-w-[200px] md:max-w-[267px] rounded-lg cursor-pointer" src={newly} alt="" />
        <img className="h-[200px] md:h-[320px] max-w-[200px] md:max-w-[267px] rounded-lg cursor-pointer" src={seaView} alt="" />
        <img className="h-[200px] md:h-[320px] max-w-[200px] md:max-w-[267px] rounded-lg cursor-pointer" src={best} alt="" />
        <img className="h-[200px] md:h-[320px] max-w-[200px] md:max-w-[267px] rounded-lg cursor-pointer" src={buffets} alt="" />
      </div>
    </div>
  );
}

export default Collections;

