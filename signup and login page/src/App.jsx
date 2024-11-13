import EmployerPage from './pages/EmployerPage/EmployerPage.jsx';
import JobPage from './pages/JobPage/JobPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import BrowseCandidatePage from './pages/BrowseCandidatePage/BrowseCandidatePage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage.jsx';
function App() {
  return (
    <>
      {/* <JobPage></JobPage> */}
      {/* <EmployerPage></EmployerPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <BrowseCandidatePage></BrowseCandidatePage> */}
      {/* <ForgotPasswordPage></ForgotPasswordPage> */}
      <ResetPasswordPage></ResetPasswordPage>
    </>
  )
}

export default App;
