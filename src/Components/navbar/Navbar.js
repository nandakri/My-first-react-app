import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Login from '../login/Login';
import About from '../about/About';
import Videos from '../Videos/Videos';
import Booking from '../booking/Booking';
import Cart from '../cart/Cart';
import Register from '../register/Register';
import Shirts from '../shirts/Shirts';
import Pants from '../pants/Pants';
import Groccery from '../groccery/Groccery';
import Gaming from '../gaming/Gaming';
import Electronics from '../electronics/Electronics';
import Comics from '../comics/Comics';
import Gym from '../gym/Gym';
import Shoes from '../shoes/Shoes';
import './Navbar.css'
import Main from '../main/Main';
function Navbar({size}) {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <p className='nmv'><i class="fa-solid fa-shop"></i> N M V <span> Cart</span></p>
                </div>
                <div className='menu'>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/booking'>Shop</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/'>Log out</Link></li>                        
                    </ul>
                </div>
                <div className="cartt">
                    <span>
                        <Link to='/Cart'><i class="fa-solid fa-cart-plus"></i></Link>
                    </span>
                    <span>
                        {size}
                    </span>
                </div>
            </div>
            <div className='footer'>
                <footer>
                    <div className='content2'>
                        <ul>
                            <li><Link to='/Home'><i class="fa-solid fa-house"></i></Link></li>
                            <li><Link to='/Contact'><i class="fa-solid fa-phone"></i></Link></li>
                            <li><Link to='/About'><i class="fa-solid fa-user"></i></Link></li>
                            <li><a href='mailto:darkknight39003@gmail.com'><i class="fa-solid fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>

            <Routes>
                <Route path='Home' element={<Home />}></Route>
                <Route path='Contact' element={<Contact />}></Route>
                <Route path='Login' element={<Login />}></Route>
                <Route path='About' element={<About />}></Route>
                <Route path='Videos' element={<Videos />}></Route>
                <Route path='Booking' element={<Booking />}></Route>
                <Route path='Cart' element={<Cart />}></Route>
                <Route path='Register' element={<Register />}></Route>
                <Route path='Shirts/*' element={<Shirts />}></Route>
                <Route path='Pants' element={<Pants />}></Route>
                <Route path='Gym' element={<Gym />}></Route>
                <Route path='Groccery' element={<Groccery />}></Route>
                <Route path='Gaming' element={<Gaming />}></Route>
                <Route path='Comics' element={<Comics />}></Route>
                <Route path='Electronics' element={<Electronics />}></Route>
                <Route path='Shoes' element={<Shoes />}></Route>
                <Route path='' element={<Main />}></Route>
            </Routes>
        </>
    )
}



export default Navbar;