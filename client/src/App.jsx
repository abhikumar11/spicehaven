import React from 'react'
import Header from './components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default App