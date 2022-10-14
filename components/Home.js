import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from  'next/image'
function HomePage() {
    function reply_click(id) {
        document.documentElement.style.scrollBehavior = "smooth";
        document.querySelector(`#${id}`).scrollIntoView();
     }
  return (
        <div className='flex flex-row flex-wrap items-center justify-center w-full gap-10 p-24 text-4xl font-extrabold text-center bg-gray-800'>
           
            <div >
                        <h1 className='text-white'>Hello, I'm <span className='text-emerald-500' >Mohammad Wasim Halim</span></h1>
                    <h1 className='text-white'> I'm a</h1>
                        <h1 className='text-emerald-500 '>
                                <span> <Typewriter
                            options={{
                            strings: ['Frontend Developer', 'Backend Developer','Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                            }}/></span>
                        </h1>
                        <div className='p-4'>
                            <h1 className='text-lg font-thin text-white '>I design and code beautifully simple things, and I love what I do.</h1>
                        </div>
                        <button onClick={()=>reply_click("contactme")} className='px-8 py-2 mt-10 text-lg font-normal text-white transition-all rounded-md outline-none bg-emerald-500 hover:bg-emerald-600'>Contact Me !</button>
            </div>
            <div className='rounded-lg opacity-80'>
                <Image className='' width="400px" height="300px" src='/images/HomeBackground.jpg' />
            </div>
        </div>
  )
}

export default HomePage