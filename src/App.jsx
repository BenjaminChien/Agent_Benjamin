import './App.css'
import Stamp from './components/Stamp.jsx'
import BasicInfo from './components/BasicInfo.jsx'
import About from './components/About'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

import about from './assets/about.js'
import experience from './assets/experience.js'

function App() {
  return (
    <>
      <Stamp></Stamp>
      <img src="/profile_photo.png" alt="Profile_Photo"></img>
      <BasicInfo></BasicInfo>
      <About info={about.content}></About>
      <Experience info={experience}></Experience>
      <Education></Education>
    </>
  )
}

export default App
