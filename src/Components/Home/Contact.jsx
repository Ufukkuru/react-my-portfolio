import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contanct() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_zpzrepw', 'template_lxv5naf', form.current, 'kZ5QksfTh786n8Ke4')
      .then((result) => {
          console.log(result.text);
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
        <div className="w-full md:w-1/2 p-8 sm:top-16 sm:left-14 relative">
          <div className="md:max-w-md">
            <div className=" flex items-start mb-8 mx-auto justify-start rounded-xl">
                <span className=" text-3xl relative  sm:text-5xl font-semibold whitespace-nowrap text-indigo-500"><i className="fa-solid fa-code" style={{color:'#ffffff'}} ></i><span className="ml-2">Developer</span><span className="text-green-700">.</span><span className="text-indigo-600">__</span></span>
            </div>
            <h3 className="mb-6 font-semibold text-xl sm:text-3xl"  style={{ letterSpacing: '-0.5px' }}>&ldquo;To contact me, fill in the right section and send. &amp; I will respond within 24 hours!&rdquo;</h3>
            <h4 className="font-semibold text-xl sm:text-2xl tracking-tight mb-5">Social Media</h4>
            <span className="mx-auto space-x-5"><a href="https://www.linkedin.com/in/ufuk-kuru-frontend/?locale=en_US"><i className="fa-brands fa-linkedin fa-2xl text-blue-500"></i></a><a href="https://github.com/Ufukkuru"><i className="fa-brands fa-github fa-2xl text-gray-800"></i></a><a href="#"><i className="fa-brands fa-instagram fa-2xl text-pink-800"></i></a><a href="#"><i className="fa-brands fa-twitter fa-2xl text-blue-600"></i></a></span>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <form className="flex flex-wrap -m-3" ref={form} onSubmit={sendEmail}>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-1" type="text" name="firstName" placeholder="First Name"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-2" type="text" name="lastName" placeholder="Last Name"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-3" type="email" name="email" placeholder="Email Address"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-4" type="number" name="number" placeholder="Phone Number"/>
              </label>
            </div>
            <div className="w-full p-3">
              <label className="block">
                <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 h-52 rounded-lg transition duration-200" id="contactInput1-5" type="text" name="textarea" placeholder="Message (optinal)"></textarea>
              </label>
            </div>
            <div className="w-full p-3">
              <button className="inline-block mb-4 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-200" type="submit">Send</button>
              <span className="text-sm text-gray-600 tracking-tight"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contanct