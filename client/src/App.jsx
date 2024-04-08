import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

export default function App() {
  
    return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
