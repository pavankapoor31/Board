import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<><div className='home__dashboard'> <Sidebar /> </div>
                        <div className="home__content"> <Dashboard /> </div></>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home