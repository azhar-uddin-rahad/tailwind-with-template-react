import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import WeWork from './Component/WeWork/WeWork'
import Project from './Component/Project/Project'
import Features from './Component/Features/Features'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <WeWork></WeWork>
      <Project></Project>
      <Features></Features>
        
    </>
  )
}

export default App
