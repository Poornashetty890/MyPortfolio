import React from 'react'
import prof from '../assets/Profile.jpeg'
import {Link} from 'react-router-dom'

function  Home(){
    return(
        <section id="home" className=" bg-black text-white  px-6 sm:px-20 lg:px-40 py-30 flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-40">
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center sm:mt-40">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6">Hi It's <span className="text-teal-600">PoornaChandra</span></h1>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-4 mb-8">I'm a <span className="text-teal-600">Web Developer</span></h3>
            <p className="w-full sm:w-5/6">A fresher who wishes to equip myself with additional skills and looking to work in an organization that can provide a variety of opportunities that allow me to expand my skills and knowledge while working towards achieving the organizational goals. </p>
            <div className="">
                <a href="" className="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i className='bx bxl-linkedin'></i></a>
                <a href="" className="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i className='bx bxl-github'></i></a>
                <a href="" className="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i className='bx bxl-instagram' ></i></a>
                <a href=""></a>
            </div>

            <div className="mt-6 gap-6 items-center flex">
                <a href="https://drive.google.com/file/d/1YXzhpOKkDPYEq_aC0fcHQUWNLnP1Ivdw/view?usp=drivesdk" target='_blank' rel="noopener noreferrer"
                className="inline-block hover:bg-black hover:text-teal-500 bg-teal-600 py-2 px-6 rounded-3xl text-sm md:text-2xl text-black border-solid border-2 font-semibold cursor-pointer" >Download CV</a>
                
                <Link to="/contact" className="inline-block hover:bg-black hover:text-teal-500 bg-teal-600 py-2 px-6 rounded-3xl text-sm md:text-2xl text-black border-solid border-2 font-semibold cursor-pointer">Contact</Link>
            </div>
        </div>
        <div className="w-1/3 mt-24 md:mt-0">
            <img src={prof} alt="" className="h-full w-full rounded-full"/>
        </div>
    </section>
    );
}

export default Home;