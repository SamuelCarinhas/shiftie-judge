import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage, LoginPage, AllCoursesPage } from './pages/Pages'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/courses" element={<AllCoursesPage/>}/>
    </Routes>
  </BrowserRouter>,
)
