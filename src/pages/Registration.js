import React from 'react';
import back from '../images/back.jpg'; // Import the background image
import { Link } from 'react-router-dom';
 import logo from "../images/logo.jpg"
function Registration() {
    return (
        <div className="h-screen flex bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center" style={{ marginLeft: '10%', maxWidth: '500px' }}> {/* Adjusted for 10% margin */}
                <div className="bg-white border-2 border-orange-400 rounded-xl shadow-lg p-3 relative"> {/* Add relative positioning */}
                    {/* Close Button */}
                    <img src={logo} width={150} height={100} alt="logo" className="mb-2 ml-20" />
                   <Link to="/"> <button className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800">
                        &#x2715;
                    </button></Link>
 
                    {/* Form Fields */}
                    <form className="mt-8"> {/* Add margin to the top */}
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">First Name</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Name" type="text" />
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Last Name</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Name" type="text" />
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Employee No</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Number" type="number" />
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Employee Email</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Email" type="email" />
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Mobile No</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Number" type="tel" />
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Project Name</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Project Name" type="text" />
                        </div>
                        {/* Create Button */}
                        <div className="mb-2">
                            <button className="w-full p-1 bg-orange-400 text-white rounded hover:bg-orange-500 transition">CREATE</button>
                        </div>
                        {/* OTP Fields */}
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Mobile OTP</label>
                            <div className="w-2/3 flex items-center">
                                <input className="w-3/4 p-2 border rounded" placeholder="Enter OTP" type="number" />
                                <a href="#" className="text-orange-400 text-sm ml-4">Resend OTP</a>
                            </div>
                        </div>
                        <div className="mb-2 flex items-center">
                            <label className="w-1/3 mb-1">Email OTP</label>
                            <div className="w-2/3 flex items-center">
                                <input className="w-3/4 p-2 border rounded" placeholder="Enter OTP" type="number" />
                                <a href="#" className="text-orange-400 text-sm ml-4">Resend OTP</a>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div>
                           <Link to="/thankyou"> <button className="w-full p-1 bg-orange-400 text-white rounded hover:bg-orange-500 transition">SUBMIT</button></Link>
                        </div>
                    </form>
                </div>
            </div>
 
            {/* Optional Welcome Section */}
            {/* <div className="mt-16 mr-36">
                <h2 className="text-4xl text-black font-bold mb-4">Welcome</h2>
                <p className="flex flex-col font-bold text-blue-600 text-lg mb-6 text-center">
                    "Hello! Thank you for choosing us. <span>Let's get started."</span>
                </p>
                <div className="flex text-black gap-3">
                    <p className='font-bold'>New to Artifacts?</p>
                    <Link to="/register">
                        <button className='underline text-blue-700 rounded-lg w-32 bg-white text-blue-800'>Create Account?</button>
                    </Link>
                </div>
            </div> */}
        </div>
    );
}
 
export default Registration;