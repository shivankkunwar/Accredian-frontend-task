import { useState } from 'react'
import './App.css'
import Login from "./component/Login";
import Signup from './component/Signup';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <div>
        <Router>
          <Routes>
          <Route key="login" path="/"  element={<Login/>}/>
          <Route key="signup" path="/signup"  element={<Signup/>}/>
          </Routes>
        </Router>
        
    </div>
  )
}

export default App
