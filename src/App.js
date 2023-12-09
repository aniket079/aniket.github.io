import React from 'react'
import Login from './components/Login'
import Dash from './components/Dashboard'
import Emp from './components/Employee'
import Search from './components/Searched'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
<Router>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dash/>} />
        <Route path="/Employee" element={<Emp/>} />
        <Route path="/Dashboard" element={<Dash/>} />
        <Route path="/Searched" element={<Search/>} />
      </Routes>
    </Router>
  )
}

export default App
