import React from 'react'

import { FaLaptopCode } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

function Skills() {
  return (
   
    <div className='flex flex-row flex-wrap items-center justify-center gap-6 p-20'>
        <div className='flex-row flex-wrap'>
                <div className='flex flex-col items-center p-6 text-white transition-all bg-gray-800 rounded-md shadow-2xl cursor-pointer h-80 w-80 hover:translate-y-1 max-h-80'>
                    <div className='text-emerald-500 mb-14'>
                        <span className='text-7xl'><FaLaptopCode /></span>
                    </div>
                    <div className='my-2 text-2xl font-semibold '>
                        <h1 className=''>Front-end development</h1>
                    </div>
                    <div className='font-normal text-center text-justify'>
                        <p>
                        Responsive websites built for an optimal user experience that achieves your business goals.
                        </p>
                    </div>
                </div>
        </div>
     
        <div className='flex-row flex-wrap'>
                <div className='flex flex-col items-center p-6 text-white transition-all bg-gray-800 rounded-md shadow-2xl cursor-pointer h-80 w-80 hover:translate-y-1 max-h-80'>
                    <div className='mb-14 text-emerald-500'>
                        <span className='text-7xl '><FaLayerGroup /></span>
                    </div>
                    <div className='my-2 text-2xl font-semibold'>
                        <h1 className=''>Design + Development</h1>
                    </div>
                    <div className='font-normal text-center text-justify'>
                        <p>
                        Clean, modern designs - optimized for performance, search engines, and converting users to customers.
                        </p>
                    </div>
                </div>
        </div>
        <div className='flex-row flex-wrap'>
                <div className='flex flex-col items-center p-6 text-white transition-all bg-gray-800 rounded-md shadow-2xl cursor-pointer h-80 w-80 hover:translate-y-1 max-h-80'>
                    <div className='text-emerald-500 mb-14'>
                        <span className='text-7xl'><FaRegFileCode /></span>
                    </div>
                    <div className='my-2 text-2xl font-semibold'>
                        <h1 className=''>Code</h1>
                    </div>
                    <div className='font-normal text-center text-justify'>
                        <p>
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Skills