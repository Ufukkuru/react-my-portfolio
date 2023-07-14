import React, { useState } from 'react'
import './Navbar.css'
import { Divide } from 'hamburger-react'

function Navbar(){ 

    const [showMenu, setShowMenu] = useState(false)

    const NavbarHandle = () =>{
        setShowMenu(!showMenu)
    }
    
  return (
    <>
       <nav className="bg-neutral-950 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <a href="#home" className="flex items-center">
      <span className="self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap text-indigo-500"><i className="fa-solid fa-code" style={{color: '#ffffff'}}></i><span className="ml-2">Developer</span><span className="text-green-700">.</span><span className="text-indigo-500">__</span></span>
  </a>
  
  <button data-collapse-toggle="navbar-cta" onClick={NavbarHandle} type="button" className="inline-flex absolute top-0 right-2 p-3 text-3xl z-40 text-white rounded-lg md:hidden hover:bg-transparent hover:text-white hover:before:bg-transparent " aria-controls="navbar-cta" aria-expanded="false"><Divide size={22} distance='md'/></button>
  
  <div className="flex md:order-2">
      <a href="#contact" className="text-white hover:bg-indigo-500 bg-indigo-700 hover:scale-100 transition ease-linear text-1xl sm:text-xl md:text-xl font-medium text-sm px-3 py-3 rounded-2xl text-center mr-3 md:mr-0 right-1 bottom-7 md:hover:scale-110 md:rounded-2xl md:relative md:px-5 md:py-3 md:right-0 md:top-0 absolute md:block">Contanct</a>
  </div>

  <div className={`items-center sm:sticky text-center relative w-full z-40 left-0 borderXwidth justify-between  md:flex md:w-auto md:order-1 ${showMenu ? "flex" : "hidden"}`} id="navbar-cta">
    <ul className="flex flex-col bg-indigo-700 sm:bg-transparent w-full font-extrabold text-1xl sm:text-2xl md:text-xl p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-transparent ">
      <li>
        <a href="#home" className="block py-2 pl-3 pr-4  rounded text-white md:hover:text-green-700 md:p-0  md:hover:scale-125 transition ease-in-out" >HOME</a>
      </li>
      <li>
        <a href="#about" className="block py-2 pl-3 pr-4  rounded text-white md:hover:text-green-700 md:p-0  md:hover:scale-125 transition ease-in-out">ABOUT</a>
      </li>
      <li>
        <a href="#project" className="block py-2 pl-3 pr-4  rounded text-white md:hover:text-green-700 md:p-0  md:hover:scale-125 transition ease-in-out">MY PROJECT</a>
      </li>
    </ul>
  </div>
  
  </div>
</nav>
    </>
  )
  }
export default Navbar