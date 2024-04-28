import React from 'react';
import './About.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';
function About() {
  let log = true;
  return (
    <>
      {log ? (<Nthg />) : (<Nthg2 />)}
    </>
  );
}

export function Nthg() {
  return (
    <>
    <Navbar />
      <div className='bnk'>
        <div className='hd'><h4>About NMV Cart</h4></div>
        <div className='hello'>
          <div className='hd2'>
            <br /><br /><br /><br />
            <h6 id='abp'>Welcome to NMV Cart, your go-to destination for a seamless online shopping experience!</h6>
            <h6 id='abp'>At NMV Cart, we strive to provide high-quality products, excellent customer service, and a user-friendly platform. Whether you're looking for the latest fashion trends, electronics, home essentials, or more, we've got you covered.</h6>
            <h6 id='abp'>Why choose NMV Cart?</h6>
            <ul id='l1'>
              <li>Wide range of products</li>
              <li>Secure and convenient online shopping</li>
              <li>Fast and reliable delivery</li>
              <li>Responsive customer support</li>
            </ul>

            <h6 id='abp'>Thank you for choosing NMV Cart for all your shopping needs. Happy shopping!</h6>
            <h5>follow us on :</h5>
            <div>
              <ul id='follow'>
                <li><a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href='https://twitter.com/i/flow/login'><i class="fa-brands fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function Nthg2() {
  return (
    <>
      <div className='msg'>
        <h2>OOPS!!!..  PLEASE GO TO <span> LOGIN PAGE</span></h2>
        <i class="fa-solid fa-right-to-bracket fa-beat-fade"></i>
        <p>click here to go to <span><Link to='/Login'>Login page</Link></span></p>
      </div>
      <Routes>
        <Route path='Login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default About;