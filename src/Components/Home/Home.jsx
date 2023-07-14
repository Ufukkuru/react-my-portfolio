import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
        <div className="background font text-center text-white font-extrabold justify-center " id="home">
            <h1 className="text-center relative sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl top-60 sm:top-96 md:top-96 xl:top-96">!HI I'M <span data-text="UFUK..." className='Span-animation'>UFUK...</span></h1>
            <h2 className=" flex justify-center relative text-center top-60 sm:top-96 md:top-96 2xl:top-96 sm:text-4xl md:text-5xl lg:text-7xl">I'M A <p data-text="FRONT" className='P-animation'> FRONT </p> END DEVELOPER</h2>
        </div>  
    </>
  )
}

export default Home