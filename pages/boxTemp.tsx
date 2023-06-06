import React from 'react';
import Image, { StaticImageData } from "next/image"

const BoxTemp = () => {
  return (

    <>
      <div className='w-96 h-60 overflow-clip border-2 border-black'>
        <div className='w-full h-8 bg-black'>
          <div className='flex  justify-between'>
            <p className='text-white'>Question</p>
            <div className='border-2 w-6 h-6 items-center justify-center flex' >
              <p className='text-white'>X</p>
            </div>
          </div>
        </div>
        <div className='w-full h-52 bg-gray-500'>
          <div className='flex items-center h-32 w-full'>
            <p>Warning</p>
          </div>
          <div className='h-20 w-full flex gap-5'>
            <button className=' border-2 border-black h-8 w-fit px-4'>Cancel</button>
            <button>OK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxTemp;

