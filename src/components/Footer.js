import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return (
        <footer class=" bg-black py-12 px-0 text-white">
        <div class="mx-auto justify-center flex mb-4">
            <a href="" class="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i class='bx bxl-linkedin'></i></a>
            <a href="" class="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i class='bx bxl-github'></i></a>
            <a href="" class="inline-flex justify-center items-center w-10 h-10 border-solid border-2 text-2xl rounded-full mx-3 mt-12 mb-0 hover:bg-gradient-to-t from-orange-600 to-red-600"><i class='bx bxl-instagram' ></i></a>
            <a href=""></a>
        </div>
        <ul className="text-center text-lg flex gap-3 mx-auto my-auto justify-center mb-4">
      <li>
        <Link to="/home" className="hover:text-teal-600 ml-5 inline-block">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-teal-600 ml-5 inline-block">
          About Me
        </Link>
      </li>
      <li>
        <Link to="/project" className="hover:text-teal-600 ml-5 inline-block">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-teal-600 ml-5 inline-block">
          Contact
        </Link>
      </li>
    </ul>

        <p class="text-center font-semibold mt-8 text-sm">
            @Copyrights | All Rights Reserved
        </p>
    </footer>
    );
}

export default Footer;