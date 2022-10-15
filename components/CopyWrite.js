import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function CopyWrite() {
  return (
    <div className='flex flex-col p-4 text-center bg-gray-800 '>
       <div>
       <h1 className='font-semibold text-white'>Copyright © 2022 Mohammad Wasim Halim •  Freelance Web Designer & Developer</h1>
       </div>
       <ul className='flex flex-row items-center justify-center gap-4 pt-4 text-2xl text-emerald-500'>
        <li><a href="https://www.facebook.com/wasimhalim007/" target="_blank"><FaFacebook/></a></li>
        <li><a href="https://twitter.com/WasimHalim007" target="_blank"><FaTwitter/></a></li>
        <li><a href="https://github.com/wasimhalim" target="_blank"><FaGithubSquare/></a></li>
       </ul>
    </div>
  )
}

export default CopyWrite