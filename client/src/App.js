import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
function App() {
  const { user } = useSelector((state) => state.auth);
  console.log("user: ",user);
  
  return (
    <div>
       <ToastContainer position="top-right" autoClose={3000}/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
