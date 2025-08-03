import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default App