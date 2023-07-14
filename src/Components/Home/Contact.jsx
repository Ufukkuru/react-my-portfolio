import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Contanct() {

  const form = useRef();

  const [country, setCountry] = useState('+90')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [textArea, setTextArea] = useState('')

  const toastrNofity = ()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zpzrepw', 'template_lxv5naf', form.current, 'kZ5QksfTh786n8Ke4')
      .then((result) => {
          console.log(result.text);
          setFirstName('')
          setLastName('')
          setEmail('')
          setNumber('')
          setTextArea('')
          setCountry('+90')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <div className="text-center text-3xl sm:text-7xl sm:mb-12 mb-8 font-extrabold sm:top-28 top-16 relative">Contact</div>
<section className="py-24 lg:py-36 bg-black overflow-hidden" id="contact">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8 sm:top-16 sm:left-14 relative mb-10">
          <div className="md:max-w-md">
            <div className=" flex items-start mb-8 mx-auto justify-start rounded-xl">
                <span className=" text-3xl relative  sm:text-5xl font-semibold whitespace-nowrap text-indigo-500"><i className="fa-solid fa-code" style={{color:'#ffffff'}} ></i><span className="ml-2">Developer</span><span className="text-green-700">.</span><span className="text-indigo-600">__</span></span>
            </div>
            <h3 className="mb-6 font-semibold text-xl sm:text-3xl"  style={{ letterSpacing: '-0.5px' }}>&ldquo;To contact me, fill in the right section and send. &amp; I will respond within 24 hours!&rdquo;</h3>
            <h4 className="font-semibold text-xl sm:text-2xl tracking-tight mb-5">Social Media</h4>
            <span className="mx-auto space-x-5"><a href="https://www.linkedin.com/in/ufuk-kuru-frontend/?locale=en_US"><i className="fa-brands fa-linkedin fa-2xl text-blue-500"></i></a><a href="https://github.com/Ufukkuru"><i className="fa-brands fa-github fa-2xl text-neutral-50"></i></a><a href="#"><i className="fa-brands fa-instagram fa-2xl text-pink-800"></i></a><a href="#"><i className="fa-brands fa-twitter fa-2xl text-blue-600"></i></a></span>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <form className="flex flex-wrap -m-3" ref={form} onSubmit={sendEmail}>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-1" value={firstName} onChange={(e) => setFirstName(e.target.value)} required type="text" name="firstName" placeholder="First Name"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" required placeholder="Last Name"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-3" type="email" value={email} name="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Email Address"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                  <div className="relative flex">
                    <select id='country' name='country' value={country} required onChange={(e)=>setCountry(e.target.value)} className='w-14 text-black rounded-l-lg items-center justify-center border-0 border-white'>
                      <option value="+90">+90 (Turkey)</option>
                      <option value="+44">+44 (United Kingdom)</option>
                      <option value="+49">+49 (Germany)</option>
                    </select>
                    <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-r-lg transition duration-200" id="contactInput1-4" type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} required placeholder="Phone Number"/>
                  </div>
                </label>
              </div>
            <div className="w-full p-3">
              <label className="block">
                <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 h-52 rounded-lg transition duration-200" id="contactInput1-5" type="text" name="textarea" value={textArea} onChange={(e)=> setTextArea(e.target.value)} required placeholder="Please Enter Message"></textarea>
              </label>
            </div>
            <div className="w-full p-3">
              <button className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-200" type="submit" onClick={toastrNofity}>Send</button>
              <span className="text-sm text-gray-600 tracking-tight"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <ToastContainer/>
    </>
  )
}

export default Contanct