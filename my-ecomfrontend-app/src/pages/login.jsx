import React, { useState } from "react";
import { FaGoogle, FaFacebookF,FaLock, FaShieldAlt, FaBalanceScale } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-6">
          Sign in to your account to continue shopping
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
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
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            {showPassword ? (
              <IoEyeOffOutline
                onClick={togglePassword}
                className="text-gray-400 cursor-pointer"
              />
            ) : (
              <IoEyeOutline
                onClick={togglePassword}
                className="text-gray-400 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-indigo-600" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-gray-600 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-800 transition">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50">
            <FaGoogle className="text-gray-700" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50">
            <FaFacebookF className="text-gray-700" />
            Facebook
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-gray-700 font-bold hover:underline">
            Sign up here
          </a>
        </p>

       
      </div>
       {/* Footer Icons */}
       <div className="flex justify-center gap-10 text-gray-500 text-sm mt-6">
        <span className="flex items-center gap-2">
          <FaLock /> Secure Login
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

export default Login;
