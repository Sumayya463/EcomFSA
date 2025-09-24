import { ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className=" px-6 py-3 flex items-center justify-between  ">
        
        {/* Logo */}
       <Link to="/" ><h1 className="text-xl font-semibold text-gray-800 px-15">ShopHub</h1></Link>

        {/* Search Bar */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none"
          />
          <button className=" absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer  ">
            <Search className="w-4 h-4 " />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center px-5 space-x-12 text-gray-700">
          <Link to="/login" className="flex items-center space-x-1 hover:text-black">
            <User className="w-4 h-4" />
            <span className="text-sm">Login</span>
          </Link>
          <Link to="/register" className="text-sm hover:text-black">
            Register
          </Link>

          {/* Cart Icon */}
          <div className="relative cursor-pointer ">
            <Link to="/cart"><ShoppingCart className="w-5 h-5" /></Link>
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
