import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import WeWork from './Component/WeWork/WeWork'
import Project from './Component/Project/Project'
import Features from './Component/Features/Features'
import ClientReview from './Component/ClientReview/ClientReview'
import Faq from './Component/Faq/Faq'
import SendInquiry from './Component/SendInquiry/SendInquiry'
import Blog from './Component/Blog/Blog'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <WeWork></WeWork>
      <Project></Project>
      <Features></Features>
      <ClientReview></ClientReview>
      <Faq></Faq>
      <SendInquiry></SendInquiry>
      <Blog></Blog>
        
    </>
  )
}

export default App
