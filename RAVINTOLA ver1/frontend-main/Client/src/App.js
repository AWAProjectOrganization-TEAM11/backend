import './App.css';
import React, {useEffect} from 'react'
import Ravintolaui from './components/Ravintolaui';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element= { <Login /> } />
      <Route path="/Ravintolaui" element= { <Ravintolaui /> } />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
