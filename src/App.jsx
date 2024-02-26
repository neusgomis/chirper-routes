import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import FilmDetails from './pages/FilmDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />}  />
        <Route path="/films/:filmid" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
