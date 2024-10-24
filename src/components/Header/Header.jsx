import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Header() {
    const { theme } = useContext(ThemeContext); // Use the theme from context

    return (
        <header className={`sticky z-50 top-0 w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <nav className={`px-4 lg:px-6 py-2.5 w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./src/assets/Images/logo.jpg"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <NavLink
                            to="/login"
                            className={`text-gray-800 hover: focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${theme === 'light' ? 'text-black' : 'text-white'}`}
                        >
                            Log in
                        </NavLink>
                        <ThemeToggle />
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : theme === 'light' ? "text-gray-700" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : theme === 'light' ? "text-gray-700" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : theme === 'light' ? "text-gray-700" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
