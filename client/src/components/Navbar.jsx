import React, { useState } from 'react';
import logo from '../assets/nestlogo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

    return (
        <>
            {/* Main Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* Left - Logo and Analysis dropdown (dropdown hidden on small screens) */}
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />

                        {/* Analysis dropdown - only visible on large screens */}
                        <div className="relative hidden lg:block group">
                            <button className="text-lg font-medium text-gray-700 group-hover:text-blue-600 focus:outline-none">
                                Analysis
                            </button>
                            <div className="absolute top-full mt-2 left-0 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-200 invisible group-hover:visible">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Damage Estimation
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Prediction Reports
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right - EW Circle (Always shown on mobile) */}
                    <div className="lg:hidden">
                        <div
                            className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold cursor-pointer"
                            onClick={() => setMenuOpen(true)}
                        >
                            EW
                        </div>
                    </div>

                    {/* Desktop Nav (hidden on small screens) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <span className="text-gray-600 font-medium">MyCompany</span>
                        <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                            EW
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay and Sidebar Menu */}
            {menuOpen && (
                <>
                    {/* Blur Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    {/* Sidebar */}
                    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transition-transform duration-300 overflow-y-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-semibold text-gray-800">MyCompany</span>
                            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold text-gray-600 hover:text-red-500">
                                ×
                            </button>
                        </div>

                        {/* Sidebar Content */}
                        <div className="flex flex-col space-y-4">
                            {/* Dropdown Toggle */}
                            <div>
                                <button
                                    onClick={() => setSidebarDropdownOpen(!sidebarDropdownOpen)}
                                    className="w-full text-left text-gray-700 font-medium hover:text-blue-600 focus:outline-none"
                                >
                                    Analysis
                                </button>
                                {sidebarDropdownOpen && (
                                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                                            Damage Estimation
                                        </a>
                                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                                            Prediction Reports
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-700 font-medium hover:text-blue-600">Contact</a>

                            {/* Added EW + Effin Wilson with spacing */}
                            <div className="pt-4 mt-2 border-t">
                                <div className="flex items-center space-x-3 mt-4">
                                    <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                                        EW
                                    </div>
                                    <span className="text-gray-700 font-medium">Effin Wilson</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>
    );
};

export default Navbar;
