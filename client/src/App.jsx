import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  index  element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default App