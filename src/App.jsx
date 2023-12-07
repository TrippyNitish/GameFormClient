import { useState } from 'react'
import './App.css'
import FormSubmit from './Pages/form'
import Admin from './Pages/adim'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/loginPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormSubmit />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
