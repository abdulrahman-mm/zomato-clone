import React from "react";

function Popular_Localities() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 pb-24 px-5 md:px-8">
      <p className="text-3xl mb-10 w-full max-w-[1050px] text-left">
        Popular localities in and around <b className="font-semibold">Chennai</b>
      </p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        
        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">T.Nagar</p>
            <p className="font-thin">373 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Nungambakkam</p>
            <p className="font-thin">323 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Velachery</p>
            <p className="font-thin">511 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Adyar</p>
            <p className="font-thin">224 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Anna Nagar East</p>
            <p className="font-thin">382 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Thuraipakkam</p>
            <p className="font-thin">274 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Mylapore</p>
            <p className="font-thin">182 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-between border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <div>
            <p className="text-lg">Alwarpet</p>
            <p className="font-thin">148 places</p>
          </div>
          <div>
            <p>&gt;</p>
          </div>
        </div>

        <div className="flex justify-center border rounded-xl h-20 p-3 items-center shadow-sm hover:shadow-md w-full sm:w-1/2 md:w-1/4 cursor-pointer">
          <p className="text-lg flex items-center">
            see more <span className="rotate-90 ml-4">&gt;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popular_Localities;
