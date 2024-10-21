import React from 'react';
import back from '../images/back.jpg'; // Import the background image
import { Link } from 'react-router-dom';
 
function ForgotPassword() {
    return (
        <div className="h-screen flex bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center" style={{ marginLeft: '10%', maxWidth: '500px' }}>
                <div className="bg-white border-2 border-orange-400 rounded-xl shadow-lg p-6 relative">
                    {/* Close Button */}
                    <Link to="/"><button className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800">
                        &#x2715;
                    </button></Link>
 
                    {/* Form Fields */}
                    <form className="mt-8">
                        <div className="mb-4 flex items-center">
                            <label className="w-1/3 mb-1">Username</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Username" type="text" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label className="w-1/3 mb-1">Mobile OTP</label>
                            <div className="w-2/3 flex items-center">
                                <input className="w-3/4 p-2 border rounded" placeholder="Enter OTP" type="number" />
                                <a href="#" className="text-orange-400 text-sm ml-4">Resend OTP</a>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <label className="w-1/3 mb-1">Email OTP</label>
                            <div className="w-2/3 flex items-center">
                                <input className="w-3/4 p-2 border rounded" placeholder="Enter OTP" type="number" />
                                <a href="#" className="text-orange-400 text-sm ml-4">Resend OTP</a>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <label className="w-1/3 mb-1">New Password</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Enter Password" type="password" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label className="w-1/3 mb-1">Confirm Password</label>
                            <input className="w-2/3 p-2 border rounded" placeholder="Re-Enter Password" type="password" />
                        </div>
                        {/* Submit Button */}
                        <Link to="/congrats">
                            <div>
                                <button className="w-full p-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition">SUBMIT</button>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ForgotPassword;