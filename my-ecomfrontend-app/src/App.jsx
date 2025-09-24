import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart';
import Wishlist from './pages/wishlist';
import UserProfile from './pages/UserProfile';
function App() {

  
  return (
    <div>
    <div className="p-0 m-0">
      <Navbar />
    </div>
    
    <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path ="/cart" element={<Cart />}/>
    <Route path="/wishlist" element={<Wishlist />}/>
    <Route path="/UserProfile" element={<UserProfile />}/>
</Routes> 
    <Footer/>

      </div>
  )
}

export default App
