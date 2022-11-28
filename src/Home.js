import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import Navigation from './Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EmpListing />}></Route>
                    <Route path='/employee/create' element={<EmpCreate />}></Route>
                    <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
                    <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Home