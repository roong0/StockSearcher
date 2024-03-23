//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Stockpage from './components/Stockpage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stock/:id" element={<Stockpage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
