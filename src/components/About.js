import React from 'react'
import about from '../assets/prof.jpeg'
function  About(){
    return(
        <section className=" bg-black text-white px-6 sm:px-20 lg:px-40 py-30 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-40" id="about">
        <div className="w-1/3 mt-12 md:mt-0">
          <img src={about} alt="" className="h-full w-full rounded-full mt-10 sm:mt-16"/>
        </div>
        <div className="md:mt-20 mt-9 justify-center flex flex-col ">
            <h2 className="text-7xl text-left">About <span className="text-amber-500">Me</span></h2>
            <table className="border-none mt-4">
                <tr>
                    <td className="font-bold">Profile:</td>
                    <td>Web Designer</td>
                </tr>
                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                <tr>
                    <td className="font-bold">Education:&nbsp;&nbsp;</td>
                    <td>Bachelor of Engineering</td>
                </tr>
                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                <tr>
                    <td className="font-bold">Language:</td>
                    <td>English, Kannada, Hindi</td>
                </tr>
                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                <tr>
                    <td className="font-bold ">Skills:</td>
                    <td>
                        <div>
                            <h2>SQL</h2>
                            <div className="w-full bg-indigo-200 rounded-md h-1.5"><div className="w-full bg-indigo-500 rounded-md h-1.5"></div></div>                                
                        </div>
                        <div>
                            <h2>React js</h2>
                            <div className="w-full bg-indigo-200 rounded-md h-1.5"><div className="w-4/5 bg-indigo-500 rounded-md h-1.5"></div></div>                                
                        </div>
                        
                        <div>
                            <h2>Java</h2>
                            <div className="w-full bg-indigo-200 rounded-md h-1.5"><div className="w-5/6 bg-indigo-500 rounded-md h-1.5"></div></div>                                
                        </div>
                        <div>
                            <h2>Javascript</h2>
                            <div className="w-full bg-indigo-200 rounded-md h-1.5"><div className="w-full bg-indigo-500 rounded-md h-1.5"></div></div>                                
                        </div> 
                        <div>
                            <h2>Wordpress</h2>
                            <div className="w-full bg-indigo-200 rounded-md h-1.5"><div className="w-3/4 bg-indigo-500 rounded-md h-1.5"></div></div>                                
                        </div>  
                    </td>
                </tr>
                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                <tr>
                    <td className="font-bold">Hobbies:</td>
                    <td>Cricket, Reading Books </td>
                    
                </tr>
            </table>
        </div>
    </section>
    );
}

export default About;