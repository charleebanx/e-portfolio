import React from 'react'
import { Link } from 'react-router-dom'
import { TbCircleDashedLetterC } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-2 px-2 fixed top-0 left-0 w-full'>
            <Link to="/">
                <span className='font-semibold text-lg flex items-center gap-2 text-red-300'>
                    <TbCircleDashedLetterC className='text-6xl' />
                    <span className='font-semibold text-2xl'></span>
                </span>
            </Link>

            <div className="flex items-center gap-5">
                <Link to="/" className="py-1 px-3 text-lg font-light text-white hover:text-sky-200 rounded-md hover:bg-slate-700 transition duration-300">
                    Home
                </Link>

                <Link to="/about" className="py-1 px-3 text-lg font-light text-white hover:text-sky-200 rounded-md hover:bg-slate-700 transition duration-300">
                    About
                </Link>

                <Link to="/portfolio" className="py-1 px-3 text-lg font-light text-white hover:text-sky-200 rounded-md hover:bg-slate-700 transition duration-300">
                    Portfolio
                </Link>

                <Link to="/contact" className="py-1 px-3 text-lg font-light text-white hover:text-sky-200 rounded-md hover:bg-slate-700 transition duration-300">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
export default Navbar
