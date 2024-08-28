import React from 'react'

function Contact(){
    return(
        <section className=" bg-black py-24 px-4 text-white " id="contact">
        <h2 className="text-4xl text-center mt-2 mb-2 mx-0">Contact <span className="text-teal-600">Me</span></h2>
        <form action="" className="flex justify-center items-center gap-12 my-12 mx-0 text-center">
            <div>
                <div className="text-sm border-solid border-2 border-teal-500 my-6 mx-6 resize-none rounded-xl p-5">
                    Email: poornashetty890@gmail.com
                </div>
                <div className="text-sm border-solid border-2 border-teal-500 my-6 mx-6 resize-none rounded-xl p-5">
                    Mob: 9902507794
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1YXzhpOKkDPYEq_aC0fcHQUWNLnP1Ivdw/view?usp=drivesdk" target='_blank' rel="noopener noreferrer"
                    className="inline-block hover:bg-black hover:text-teal-500 bg-teal-600 py-2 px-6 rounded-3xl text-2xl text-black border-solid border-2 font-semibold cursor-pointer" >Download CV</a>
                </div>
            
            </div>
        </form>
    </section>
    );
}

export default Contact;