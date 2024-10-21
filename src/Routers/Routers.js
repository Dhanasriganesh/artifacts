import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Login from '../pages/Login';
function Routers() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
        <Route path="/" element={<Login />} />
    </Routes>
    </>
  )
}

export default Routers