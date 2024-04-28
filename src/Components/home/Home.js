import { Routes, Route, Link } from "react-router-dom";

import React from 'react';
import './Home.css';
import Videos from "../Videos/Videos";
import About from "../about/About";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <>
    <Navbar />
      <div className='con2'>
        <div className='content'>
          <div className='home'><h3>WELCOME TO OUR <span>WEBSITE</span></h3></div>
          <div className='subtit'><p className="hm">you can simply place order in our website.</p></div>
          <div className='btn'>
            <ul>
              <li><Link to='/About'>ABOUT NMV</Link></li>
              <li><Link to='/Booking'>BOOKING</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='Videos' element={<Videos />}></Route>
        <Route path='About' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default Home;