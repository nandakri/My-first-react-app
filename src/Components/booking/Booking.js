import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Shirts from '../shirts/Shirts';
import Pants from '../pants/Pants';
import Groccery from '../groccery/Groccery';
import Electronics from '../electronics/Electronics';
import Gaming from '../gaming/Gaming';
import Shoes from '../shoes/Shoes';
import Comics from '../comics/Comics';
import './Booking.css';
import Navbar from '../navbar/Navbar';
import Gym from '../gym/Gym';

const Booking = () => {
  return (
    <>
    <Navbar />
    <div className='con1'>
      
    
      <div className='bnk'>
        <div className='cards1'>
          <div className='card1' id='c1'><p><Link to='/Shirts'>SHIRTS</Link></p></div>
          <div className='card1' id='c2'><p><Link to='/Pants'>PANTS</Link></p></div>
          <div className='card1' id='c3'><p><Link to='/Groccery'>GROCERIES</Link></p></div>
          <div className='card1' id='c4'><p><Link to='/Electronics'>GADGETS</Link></p></div>
          <div className='card1' id='c5'><p><Link to='/Gaming'>GAMING</Link></p></div>
          <div className='card1' id='c6'><p><Link to='/Shoes'>SHOES</Link></p></div>
          <div className='card1' id='c7'><p><Link to='/Comics'>COMICS</Link></p></div>
          <div className='card1' id='c8'><p><Link to='/Gym'>FITNESS</Link></p></div>
        </div>
      </div>
      </div>
      <Routes>
        <Route path='Shirts' element={<Shirts />}></Route>
        <Route path='Pants' element={<Pants />}></Route>
        <Route path='Groccery' element={<Groccery />}></Route>
        <Route path='Electronics' element={<Electronics />}></Route>
        <Route path='Gaming' element={<Gaming />}></Route>
        <Route path='Shoes' element={<Shoes />}></Route>
        <Route path='Comics' element={<Comics />}></Route>
        <Route path='Gym' element={<Gym />}></Route>

      </Routes>
    </>
  )
}

export default Booking