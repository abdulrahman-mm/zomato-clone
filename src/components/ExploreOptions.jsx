import React from 'react';
import downArrow from '../assets/down.png';

function ExploreOptions() {
  return (
    <div className='flex flex-col items-center mx-auto px-5 pt-8 bg-customLightWhite pb-12'>
      <p className='text-3xl text-center w-full max-w-4xl'>
        Explore options near me
      </p>

      <div className='flex flex-col w-full max-w-4xl'>
        <div className='flex items-center justify-between border border-gray-300 bg-white rounded-lg p-4 mt-6 cursor-pointer'>
          <p className='text-xl text-gray-600'>Popular cuisines near me</p>
          <img src={downArrow} className='w-4' alt='Down arrow' />
        </div>

        <div className='flex items-center justify-between border border-gray-300 bg-white rounded-lg p-4 mt-6 cursor-pointer'>
          <p className='text-xl text-gray-600'>Popular restaurant types near me</p>
          <img src={downArrow} className='w-4' alt='Down arrow' />
        </div>

        <div className='flex items-center justify-between border border-gray-300 bg-white rounded-lg p-4 mt-6 cursor-pointer'>
          <p className='text-xl text-gray-600'>Top Restaurant Chains</p>
          <img src={downArrow} className='w-4' alt='Down arrow' />
        </div>

        <div className='flex items-center justify-between border border-gray-300 bg-white rounded-lg p-4 mt-6 cursor-pointer'>
          <p className='text-xl text-gray-600'>Cities We Deliver To</p>
          <img src={downArrow} className='w-4' alt='Down arrow' />
        </div>
      </div>
    </div>
  );
}

export default ExploreOptions;
