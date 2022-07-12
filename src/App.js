import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return(
    <Box width='440px' sx={{width: {xl: '1488px'}}} m='auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/excercise/:id' element={<ExcerciseDetail/>}/>
        </Routes>
        <Footer />
    </Box>
    );
}

export default App
