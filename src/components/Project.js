import React from 'react'

function Project(){
    return(
        <section className=" bg-black py-24 px-4 text-white " id="project">
        <h2 className="text-5xl text-center mt-5 mb-20 mx-0">Project</h2>
        <div className="relative max-w-full lg:mx-24 my-auto">
            <div className="py-3 px-12 relative w-full md:w-1/2 bg-black left-0">
                <div className="hidden md:block w-4 h-4 absolute bg-teal-500 rounded-full bottom-2 -right-2 top-8 z-10"></div>
                <div className="px-5 py-7 bg-black relative rounded-2xl text-sm text-white border-solid border-2 border-teal-500 ">
                    <h3>Crime Management System</h3>
                    <p className="text-sm leading-5 font-light text-left"> The database with webpage UI will accept the police complaint registrations and through middle where those data 
                        is saved in database and manipulated using Mysql queries. The main goal is to reduce paper works and to 
                        access/modify data easily.</p>
                </div>
            </div>
        </div>
        <div className="relative max-w-full lg:mx-24 my-auto " >
            <div className="py-3 px-12 relative w-full md:w-1/2 bg-black md:left-1/2">
                <div className="hidden md:block w-4 h-4 absolute bg-teal-500 rounded-full bottom-2 -left-2 top-8 z-10"></div>
                <div className="px-5 py-7 bg-black relative rounded-2xl text-sm text-white border-solid border-2 border-teal-500">
                    <h3>Resort Management System</h3>
                    <p className="text-sm leading-5 font-light text-left"> The database with webpage UI will accept the police complaint registrations and through middle where those data 
                        is saved in database and manipulated using Mysql queries. The main goal is to reduce paper works and to 
                        access/modify data easily.</p>
                </div>
            </div>
        </div>
        <div className="relative max-w-full lg:mx-24 my-auto">
            <div className="py-3 px-12 relative w-full md:w-1/2 bg-black left-0">
                <div className="hidden md:block w-4 h-4 absolute bg-teal-500 rounded-full bottom-2 -right-2 top-8 z-10"></div>
                <div className="px-5 py-7 bg-black relative rounded-2xl text-sm text-white border-solid border-2 border-teal-500 ">
                    <h3>Hospital Management System</h3>
                    <p className="text-sm leading-5 font-light text-left"> The database with webpage UI will accept the police complaint registrations and through middle where those data 
                        is saved in database and manipulated using Mysql queries. The main goal is to reduce paper works and to 
                        access/modify data easily.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Project;