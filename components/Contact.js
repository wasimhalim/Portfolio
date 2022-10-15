import React,{useState,useEffect} from 'react'
import {supabase} from '../config/supabase'
function Contact() {
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [message, setMessage] = useState("")
      const [clickStatus, setClickStatus] = useState(false)
      const [succeessMessageStatus, setSucceessMessageStatus] = useState(false)
      const handleForm=async (browser)=>{
        setClickStatus(true)
          browser.preventDefault()
          const {status}=await supabase.from("messages")
          .insert([{name,email,message}]);
          if(status==201){
              setClickStatus(false)
              setName("")
              setEmail("")
              setMessage("")
              setSucceessMessageStatus(true)
              setTimeout(()=>{
                setSucceessMessageStatus(false)
              },4000)
              
          }
          else{
            window.alert("Network Issue")
          }
      }
  return (
    
    <div id="contactme" className='flex flex-row items-center justify-center p-20 '>
          <div className='max-w-md p-2 py-6 rounded-lg shadow-2xl bg-emerald-500'>
            <h1 className='text-2xl font-bold text-center text-white'>Contact Me !</h1>
            
             <div className='relative'>
             
                    <div className={` absolute p-3 text-xl transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 bg-emerald-500 ${succeessMessageStatus? 'opacity-100':'opacity-0'}`}>
                        <h4 className='text-center'>Thanks for your message</h4>
                    </div>
                     <form onSubmit={handleForm}>
                  <div className='flex flex-col items-center justify-center'>
                      <div className='p-4'>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className='h-10 p-2 font-semibold rounded-md outline-none w-96' placeholder='Name...' required />
                      </div>
                      <div className='p-1'>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='h-10 p-2 font-semibold rounded-md outline-none w-96' placeholder='Email...' required/>
                      </div>
                      <div className='p-2'>
                        <textarea value={message} onChange={(e)=>setMessage(e.target.vlaue)} placeholder='Message' id="" cols="20" rows="5" className='p-2 rounded-md outline-none p-242 h- ont-semibold w-96' required></textarea>
                       
                      </div>
                      
                      <div className='p-1'>
                        <input type="submit"  className='h-10 p-2 font-semibold text-white transition-all bg-gray-800 rounded-md outline-none cursor-pointer hover:bg-gray-900 w-96 ' value={`${clickStatus? 'Wait...':'Send Message...'}`}  />
                      </div>
                  </div>
              </form>
             </div>
          </div>
    </div>
  )
}

export default Contact