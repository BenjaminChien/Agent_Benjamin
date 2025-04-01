import './App.css'
import Stamp from './components/Stamp.jsx'
import BasicInfo from './components/BasicInfo.jsx'
import About from './components/About'
import about from './assets/about.js'

function App() {
  return (
    <>
      <Stamp></Stamp>
      <img src="/profile_photo.png" alt="Profile_Photo"></img>
      <BasicInfo></BasicInfo>
      <About info={about.content}></About>
    </>
  )
}

export default App
