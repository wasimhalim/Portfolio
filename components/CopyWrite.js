import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function CopyWrite() {
  return (
    <div className='flex flex-col p-4 text-center bg-gray-800 '>
       <div>
       <h1 className='font-semibold text-white'>Copyright © 2023 Mohammad Wasim Halim •  Full Stack Developer</h1>
       </div>
       <ul className='flex flex-row items-center justify-center gap-4 pt-4 text-2xl text-emerald-500'>
        <li className='cursor-pointer' onClick={()=>window.open("https://www.facebook.com/wasimhalim007/",'_blank')}><FaFacebook/></li>
        <li className='cursor-pointer' onClick={()=>window.open("https://twitter.com/WasimHalim007",'_blank')}><FaTwitter/></li>
        <li className='cursor-pointer' onClick={()=>window.open("https://github.com/wasimhalim",'_blank')}><FaGithubSquare/></li>
       </ul>
    </div>
  )
}

export default CopyWrite