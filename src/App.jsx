import './App.css'
import Navbar from './Components/Layouts/Navbar'
import Home from './Components/Home/Home'
import Project from './Components/Home/Project'
import Contact from './Components/Home/Contact'
import About from './Components/Home/About'

function App() {

  return (
    <>
     <div className='bg-gray-950 text-white'>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
     </div>
    </>
  )
}

export default App
