import React from 'react'
import './Project.css'

function Project() {
  return (
    <>
        <div className="container relative justify-center mx-auto text-center block mt-32 " id="project">
    <h1 className="mb-6 text-4xl sm:text-7xl font-extrabold">My Project</h1>
    
    <div className="sm:flex sm:space-x-14 justify-center">

    <div className="max-w-sm mx-3 mb-3 relative bg-transparent border-2 border-white rounded-lg shadow">
        <a href="https://github.com/Ufukkuru/angular-movie-site">
            <img className="rounded-t-lg cover" src="../../../assets/movie-app-3.png" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal relative text-white ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="https://github.com/Ufukkuru/angular-movie-site" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm mx-3 mb-3 relative bg-transparent border-2 border-white rounded-lg shadow">
        <a href="https://github.com/Ufukkuru/book-blog">
            <img className="rounded-t-lg" src="../../../assets/book-blog.png" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-white ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="https://github.com/Ufukkuru/book-blog" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm mx-3 mb-3 relative bg-transparent border-2 border-white rounded-lg shadow">
        <a href="https://github.com/Ufukkuru/Angular-is-My-XoX-game">
            <img className="rounded-t-lg" src="../../../assets/xox-2.png" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-white ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="https://github.com/Ufukkuru/Angular-is-My-XoX-game" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Project