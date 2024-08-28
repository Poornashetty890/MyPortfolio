import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

function Header(){

    useEffect(() => {
        const icon = document.querySelector("#icon");
        const menu = document.querySelector("#menu");

        // Define the event handler function
        const toggleMenu = () => {
            menu.classList.toggle("hidden");
            icon.classList.toggle("bg-black-200");
        };

        // Add event listener to the icon
        icon.addEventListener("click", toggleMenu);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            icon.removeEventListener("click", toggleMenu);
        };
    }, [])

    return(
        <header className="w-full text-white fixed bg-gray-900 z-10 py-5 flex justify-between ">
        <Link to="/home" className="font-bold text-xl cursor-pointer ml-7 sm:ml-10 transition duration-300 ease-linear hover:scale-105">PC</Link>

        <div id="icon" className="space-y-1 cursor-pointer md:hidden z-10">
            <div className="h-0.5 w-4 mr-1 bg-white"></div>
            <div className="h-0.5 w-4 mr-1 bg-white"></div>
            <div className="h-0.5 w-4 mr-1 bg-white"></div>
        </div>

        <nav className=" hidden md:flex font-bold uppercase space-x-9 px-6">
        <Link to="/home" className="hover:text-teal-600">Home</Link>
        <Link to="/about" className="hover:text-teal-600">About Me</Link>
        <Link to="/project" className="hover:text-teal-600">Projects</Link>
        <Link to="/contact" className="hover:text-teal-600">Contact</Link>
        </nav>
        <nav id="menu" className="hidden absolute right-0 top-0 w-1/2 p-10 shadow shadow-teal-600 bg-black bg-opacity-65">
      <Link to="/home" className="hover:text-teal-600 block text-lg mb-6 mx-0">Home</Link>
      <Link to="/about" className="hover:text-teal-600 block text-lg my-6 mx-0">About Me</Link>
      <Link to="/project" className="hover:text-teal-600 block text-lg my-6 mx-0">Projects</Link>
      <Link to="/contact" className="hover:text-teal-600 block text-lg my-6 mx-0">Contact</Link>
    </nav>
    </header>

    );
}

export default Header;