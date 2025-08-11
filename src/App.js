/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*18-11-24
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './project/mainstyle.css';
import SignUp from './project/SignUp';
import LogIn from './project/LogIn';
import Home from './project/Home';
import Class510 from './project/Class510';
import Diploma from './project/Diploma';
import PUC from './project/PUC';
import UgCourses from './project/UgCourses';
import CompetitiveExams from './project/CompetitiveExams';
import Interests from './project/Interests';
import Help from './project/Help';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/" element={<LogIn />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/class510" element={<Class510 />} />
                <Route path="/diploma" element={<Diploma />} />
                <Route path="/puc" element={<PUC />} />
                <Route path="/ugCourses" element={<UgCourses />} />
                <Route path="/competitiveExams" element={<CompetitiveExams />} />

                <Route path="/interests" element={<Interests />} />
                <Route path="/help" element={<Help />} />
            </Routes>  
        </Router>
    );
}

export default App;*/


/* main app.js for student guide*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './project/SignUp';
import LogIn from './project/LogIn';
import Home from './project/Home';
import Class510 from './project/Class510';
import PUC from './project/PUC';
import UgCourses from './project/UgCourses';
import Engineering from './project/Engineering';
import Medical from './project/Medical';
import Bca from './project/Bca'
import CompetitiveExams from './project/CompetitiveExams';
import Interests from './project/Interests';
import Chatbot from './project/Chatbot';
import Help from './project/Help';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true' // Initialize from localStorage
    );

    // Update localStorage whenever isLoggedIn changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/class510" element={<Class510 />} />
                <Route path="/puc" element={<PUC />} />
                <Route path="/ugCourses" element={<UgCourses />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/medical" element={<Medical />} />
                <Route path="/bca" element={<Bca />} />
                <Route path="/competitiveExams" element={<CompetitiveExams />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
}

export default App;


/*import React, { useState } from 'react';
// import './AccessLogs1.css';
import HealthChainLogin from './codeblitz/index.js';
import DoctorAuth from './codeblitz/DoctorAuth.js';
import PatientLogin from './codeblitz/patientlogin.js';
import PatientRegistration from './codeblitz/patientSignup.js'
import AccessLogs from './codeblitz/AccessLogs.js'
import DoctorDashboard from './codeblitz/hdashboard.js'
import PatientDashboard from './codeblitz/pdashboard.js'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AccessData from './codeblitz/AccessData.js';
import ManagePermissions from './codeblitz/Permissions.js';


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HealthChainLogin/>}></Route>
          <Route path='/doctersignup' element={<DoctorAuth/>}></Route>
          <Route path='/patientlogin' element={<PatientLogin/>}></Route>
          <Route path='/patientsignup' element={<PatientRegistration/>}></Route>
          <Route path='/AccessLogs' element={<AccessLogs/>}></Route>
          <Route path='/DoctorDashboard' element={<DoctorDashboard/>}></Route>
          <Route path='/PatientDashboard' element={<PatientDashboard/>}></Route>
          <Route path='/AccessData' element={<AccessData/>}></Route>
          <Route path='/Permissions' element={<ManagePermissions/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;*/

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./AI_Based_Tutor/AuthPage";
import HomePage from "./AI_Based_Tutor/HomePage";
import Dashboard from "./AI_Based_Tutor/Dashboard";
import ChatTutor from "./AI_Based_Tutor/ChatTutor";
import InteractiveQuizzes from "./AI_Based_Tutor/InteractiveQuizzes";
import LearningProcess from "./AI_Based_Tutor/LearningProcess";
import CareerRecommendation from "./AI_Based_Tutor/CareerRecommendation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ChatTutor" element={<ChatTutor />} />
        <Route path="/InteractiveQuizzes" element={<InteractiveQuizzes />} />
        <Route path="/LearningProcess" element={<LearningProcess />} />
        <Route path="/CareerRecommendation" element={<CareerRecommendation />} />
      </Routes>
    </Router>
  );
}

export default App;*/