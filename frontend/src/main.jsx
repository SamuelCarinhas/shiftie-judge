import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage, LoginPage, AllCoursesPage, DecisionPage, ProblemPage } from './pages/Pages'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Logout from "./pages/Logout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/courses" element={<AllCoursesPage/>}/>
        <Route path="/menu" element={<DecisionPage/>}/>
        <Route path="/problem" element={<ProblemPage />}/>
        <Route path="/logout" element={<Logout />}/>
    </Routes>
  </BrowserRouter>,
)
