import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col items-center gap-20 bg-gray-800 p-14'>
            <div >
                <h1 className='p-3 text-3xl font-semibold text-white border-b-4 border-emerald-500'>Web Development Skills</h1>
                   
               
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-8'>
                    <div className='transition-all rounded-md shadow-xl shadow-gray-500 bg-emerald-500 w-80 h-96 hover:rotate-2'>
                        <div>
                              <h1 className='p-3 text-3xl font-bold text-center text-white'>Front-end</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>HTML5</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>CSS3</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Bootstrap</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Tailwindcss</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Javascript</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>React</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Next Js</h1>
                        </div>
                    </div>
                    <div className='transition-all rounded-md shadow-xl shadow-gray-500 bg-emerald-500 w-80 h-96 hover:rotate-2'>
                        <div>
                              <h1 className='p-3 text-3xl font-bold text-center text-white'>Back-end</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Java</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Python</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>PHP</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Django</h1>
                              <h1 className='p-1 text-3xl text-center text-white'>Laravel</h1>
                            
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Projects