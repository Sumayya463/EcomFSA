import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        
        {/* ShopHub */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">ShopHub</h2>
          <p className="mt-3 text-sm">
            The best online shopping experience for all your needs.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <FaFacebook className="hover:text-gray-900 cursor-pointer" />
            <FaTwitter className="hover:text-gray-900 cursor-pointer" />
            <FaInstagram className="hover:text-gray-900 cursor-pointer" />
            <FaPinterest className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">All Products</a></li>
            <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
            <li><a href="#" className="hover:text-gray-900">Featured</a></li>
            <li><a href="#" className="hover:text-gray-900">Discounts</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Customer Service</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping Information</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Newsletter</h2>
          <p className="mt-3 text-sm">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="bg-gray-900 text-white px-5 py-2 rounded-r-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2025 ShopHub. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <a href="#" className="hover:text-gray-900">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
