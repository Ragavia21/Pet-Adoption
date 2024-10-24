import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Breed from './Pages/Breed';
import Pets from './Pages/Pets';
import Adopt from './Pages/Adopt';
import Login from './Pages/Login';
import Cat from './Pages/Cat';
import Bird from './Pages/Bird';
import Login1 from './Pages/Login1';
import Petgroom from './Pages/Petgroom';
import Pettrain from './Pages/Pettrain';
import Consult from './Pages/Consult';
import Petgroomappont from './Pages/Petgroomappont';

function App() {
  return (
    <Router>
      <div>
        <Navbar /><br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Breed" element={<Breed />} />
          <Route path="/Pets" element={<Pets />} />
          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/Bird" element={<Bird />} />
          <Route path="/Login1" element={<Login1 />} />
          <Route path="/Petgroom" element={<Petgroom />} />
          <Route path="/Pettrain" element={<Pettrain />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Petgroomappont" element={<Petgroomappont />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
