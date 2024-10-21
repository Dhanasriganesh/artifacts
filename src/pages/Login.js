import React from 'react';
import back from '../images/back.jpg'; // Background image
import logo from "../images/logo.jpg"; // Logo image
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="h-screen flex bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      
      {/* Left side: Form section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-opacity-80 ">
          <div className="bg-white bg-opacity-10 p-8 -mt-10  rounded-lg shadow-lg border-orange-500 w-full max-w-sm ">
            <div className="text-center mb-6">
              <img src={logo} width={200} height={100} alt="logo" className="mb-2" />
              <h1 className="text-3xl text-orange-600 font-semibold">Welcome! Let's get started</h1>
            </div>
            <form className="w-full max-w-sm">
              <div className='grid gap-4'>
                  <div className="mb-4 text-orange-400">
                    <input
                      type="text"
                      placeholder="Employee Email / Employee Number"
                      className="text-orange-400 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button type="button" className="absolute right-3 top-3 text-gray-500">
                      {/* Add eye icon for visibility toggle (optional) */}
                      <FaRegEye />
                    </button>
                  </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <label className="flex items-center text-orange-400">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="/forgotpassword" className="hover:underline text-orange-400">Forgot Password?</a>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition">
                SIGN IN
              </button>
            </form>
          </div>
      </div>

      {/* Right side: Welcome section */}
      <div className="mt-16 mr-36">
        <h2 className="text-4xl font-bold mb-4">Welcome</h2>
        <p className="flex flex-col font-bold text-blue-600 text-lg mb-6 text-center">
          Hello! Thank you for choosing us. <span>Let's get started.</span>
        </p>
        <div className="flex text-black gap-3">
          <p className='font-bold'>New to Artifacts?</p>
         
         <Link to="/register"> <button className='rounded-lg w-32 underline bg-white text-blue-800'>Create Account?</button></Link>
        </div>
      </div>
{/* <div className='flex items-end justify-center '>
    copyrightwww.artihcuh.com
</div> */}
    </div>
  );
}

export default Login;
