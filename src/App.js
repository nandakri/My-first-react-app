import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Main from './Components/main/Main';
import Home from './Components/home/Home';
import Comics from './Components/comics/Comics';
import Login from './Components/login/Login';
import About from './Components/about/About';
import Videos from './Components/Videos/Videos';
import Booking from './Components/booking/Booking';
import Cart from './Components/cart/Cart';
import Register from './Components/register/Register';
import Contact from './Components/contact/Contact';
import Shirts from './Components/shirts/Shirts';
import Pants from './Components/pants/Pants';
import Gym from './Components/gym/Gym';
import Electronics from './Components/electronics/Electronics';
import Shoes from './Components/shoes/Shoes';
import Gaming from './Components/gaming/Gaming';
import Groccery from './Components/groccery/Groccery';

const App = () => {
  return (
	<Routes>
                <Route path='Home' element={<Home />}></Route>
				<Route path='Navbar' element={<Navbar />}></Route>
                <Route path='Contact' element={<Contact />}></Route>
                <Route path='Login' element={<Login />}></Route>
                <Route path='About' element={<About />}></Route>
                <Route path='Videos' element={<Videos />}></Route>
                <Route path='Booking' element={<Booking />}></Route>
                <Route path='Cart' element={<Cart />}></Route>
                <Route path='Register' element={<Register />}></Route>
                <Route path='Shirts' element={<Shirts />}></Route>
                <Route path='Pants' element={<Pants />}></Route>
                <Route path='Gym' element={<Gym />}></Route>
                <Route path='Groccery' element={<Groccery />}></Route>
                <Route path='Gaming' element={<Gaming />}></Route>
                <Route path='Comics' element={<Comics />}></Route>
                <Route path='Electronics' element={<Electronics />}></Route>
                <Route path='Shoes' element={<Shoes />}></Route>
                <Route path='/' element={<Main />}></Route>
            </Routes>
  )
}

export default App
