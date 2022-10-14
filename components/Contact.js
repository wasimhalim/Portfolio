import React from 'react'

function Contact() {
  return (
    <div id="contactme" className='flex flex-row items-center justify-center p-20 '>
          <div className='max-w-md p-2 rounded-lg shadow-2xl bg-emerald-500'>
            <h1 className='text-2xl font-bold text-center text-white'>Contact Me !</h1>
             <div className=''>
                     <form>
                  <div className='flex flex-col items-center justify-center'>
                      <div className='p-4'>
                        <input type="text"  className='h-10 p-2 font-semibold rounded-md outline-none w-72' placeholder='Name...' required />
                      </div>
                      <div className='p-1'>
                        <input type="email"  className='h-10 p-2 font-semibold rounded-md outline-none w-72' placeholder='Email...' required/>
                      </div>
                      <div className='p-2'>
                        <textarea placeholder='Message' id="" cols="100" rows="10" className='h-10 p-2 rounded-md outline-none ont-semibold w-72'></textarea>
                       
                      </div>
                  </div>
              </form>
             </div>
          </div>
    </div>
  )
}

export default Contact