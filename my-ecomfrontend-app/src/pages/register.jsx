import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaLock, FaShieldAlt, FaBalanceScale, FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-10">
      {/* Register Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-6">
          Join ShopHub and start your shopping journey
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <div className="flex items-center border rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Enter your full name"
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            <FaUser className="text-gray-400" />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <div className="flex items-center border rounded-md px-3 py-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            <HiOutlineMail className="text-gray-400" />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <div className="flex items-center border rounded-md px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            {showPassword ? (
              <IoEyeOffOutline
                onClick={() => setShowPassword(false)}
                className="text-gray-400 cursor-pointer"
              />
            ) : (
              <IoEyeOutline
                onClick={() => setShowPassword(true)}
                className="text-gray-400 cursor-pointer"
              />
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Password must contain at least 8 characters
          </p>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Confirm Password
          </label>
          <div className="flex items-center border rounded-md px-3 py-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            {showConfirmPassword ? (
              <IoEyeOffOutline
                onClick={() => setShowConfirmPassword(false)}
                className="text-gray-400 cursor-pointer"
              />
            ) : (
              <IoEyeOutline
                onClick={() => setShowConfirmPassword(true)}
                className="text-gray-400 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Account Type
          </label>
          <select className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none">
            <option value="">Select account type</option>
            <option value="customer">Customer</option>
            <option value="owner">Admin</option>
          </select>
        </div>

        {/* Terms + Newsletter */}
        <div className="mb-4 text-sm space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-indigo-600" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-grey-800 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-grey-800 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-indigo-600" />
            <span>
              Subscribe to our newsletter for exclusive offers and updates
            </span>
          </label>
        </div>

        {/* Create Account Button */}
        <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">Or sign up with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50">
            <FaGoogle className="text-grey-500" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50">
            <FaFacebookF className="text-grey-600" />
            Facebook
          </button>
        </div>

        {/* Sign In link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-grey-800 font-bold hover:underline">
            Sign in here
          </a>
        </p>
      </div>

      {/* Footer Icons */}
      <div className="flex justify-center gap-10 text-gray-400 text-sm mt-6">
        <span className="flex items-center gap-2">
          <FaLock /> Secure Registration
        </span>
        <span className="flex items-center gap-2">
          <FaShieldAlt /> SSL Protected
        </span>
        <span className="flex items-center gap-2">
          <FaBalanceScale /> Privacy First
        </span>
      </div>
    </div>
  );
};

export default Register;
