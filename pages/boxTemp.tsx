import React from 'react';
import Image, { StaticImageData } from "next/image"

const BoxTemp = () => {
  return (

    <>
      <div className='w-96 h-48 border-2 border-black'>
        <div className='w-full h-8 bg-black'>
          <div className='flex justify-between'>
            <p className='text-white'>Question</p>
            <p className='text-white border-2 w-4 h-7'>X</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxTemp;

