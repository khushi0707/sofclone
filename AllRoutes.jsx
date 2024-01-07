import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/home/Home';
import Auth from './pages/Home/Auth/Auth';
import Questions from './Questions/Questions';
const AllRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/Auth' element={<Auth/>}/>
            <Route path='/Questions' element={<Questions/>}/>
        </Routes>
    );
};

export default AllRoutes;