import React from 'react'
import './About.css'

function About() {
  return (
    <>
        <div className="sm:top-36 mb-20 top-24 relative z-10" id="about">
    <div className="text-center text-3xl sm:text-7xl mb-10 font-extrabold">MY ABOUT</div>
<div className=" sm:flex block justify-center items-center" >
    
    <div className="max-w-full mb-4 p-6 mx-3 sm:mx-3 sm:w-96 md:w-96 h-56 bg-transparent border-2 border-white rounded-lg shadow shadow-white">
        <h5 className="text-2xl font-bold tracking-tight text-white text-center mb-5">My About</h5>
            <p className="font-normal text-white text-center"><i className="fa-solid fa-user"></i> My name is ufuk surname kuru. I'm 22 years old. I'am developing myself as a front end developer and in English.</p>

        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get CV
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>

    <div className="max-w-full mb-4 p-6 mx-3 sm:mx-3 sm:w-96 md:w-96 h-56 bg-transparent border-2 border-white rounded-lg shadow shadow-white">
        <h5 className=" text-2xl font-bold tracking-tight text-white text-center mb-5">My Experiences</h5>
             <a href="#"><p className="mb-3 font-normal text-white text-center"><i className="fa-solid fa-briefcase"></i> Turhal Blue Informatics</p></a>

            <a href="https://www.istanbulavm.com.tr/"><p className="mb-3 font-normal text-white text-center"><i className="fa-solid fa-briefcase"></i> Istanbul Home Shopping Mall</p></a>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get CV
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>

    <div className="max-w-full mb-4 p-6 mx-3 sm:mx-3 sm:w-96 md:w-96 bg-transparent h-56 border-2 border-white rounded-lg shadow shadow-white">
         <h5 className=" text-2xl font-bold tracking-tight text-white text-center mb-5">My Trainings</h5>
             <a href="https://www.gop.edu.tr/"><p className="mb-3 font-normal text-white text-center"><i className="fa-solid fa-graduation-cap"></i> Tokat Gaziosmanpaşa Universty</p></a>

            <a href="https://zdmtal.meb.k12.tr/icerikler/zile-ticaret-meslek-lisesi_173305.html"><p className="mb-3 font-normal text-white text-center"><i className="fa-solid fa-graduation-cap"></i> Zile Dinçerler Anadolu Meslek High School</p></a>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get CV
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
    </div>

</div>
</div>
<div className="sm:flex backgrounds mx-auto hidden justify-center relative items-center " style={{width: '450px', height: '400px'}}></div>
    </>
  )
}

export default About