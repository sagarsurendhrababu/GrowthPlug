import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Profile from '../Pages/Profile';

const Container =()=>{
    return (
        <section className='c3b c7t'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>                                   
        </section>
    )
}
export default Container;