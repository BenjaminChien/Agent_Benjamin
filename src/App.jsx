import './App.css'
import Stamp from './components/Stamp.jsx'
import BasicInfo from './components/BasicInfo.jsx'
import About from './components/About'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Expertise from './components/Expertise.jsx'
import Footer from './components/Footer.jsx'

import about from './assets/about.js'
import experience from './assets/experience.js'
import education from './assets/education.js'
import expertise from './assets/expertise.js'


function App() {
  return (
    <div className='w-fit mx-auto'>
      <Stamp></Stamp>
      <div className='lg:flex'>
        <div className='top-10 lg:w-md lg:px-20 lg:fixed lg:z-10'>  
          <img className='pt-4' src="/profile_photo.png" alt="Profile_Photo"></img>
          <BasicInfo></BasicInfo>
        </div>
        <div className='w-2xs lg:w-auto lg:pr-20 lg:pl-110'>
          <About info={about.content}></About>
          <Experience info={experience}></Experience>
          <Education info={education}></Education>
          <Expertise info={expertise}></Expertise>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
