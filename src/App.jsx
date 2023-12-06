import { useState } from 'react'
import './App.css'
import FormSubmit from './Pages/form'
import Admin from './Pages/adim'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<FormSubmit />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
