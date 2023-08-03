import React from "react"
import Navbar from "./components/Navbar"
import Audio from "./components/Audio"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sprint from "./components/Sprint"
import Textbooks from "./components/Textbooks"
import { Route, Routes} from 'react-router-dom'



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sprint" element={<Sprint />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/textbooks" element={<Textbooks />} />
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
