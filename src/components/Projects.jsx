import React from "react";
import { dataList } from "../data/projectData";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <>
            <h1 className="text-3xl xl:text-4xl font-montserrat-extrabold mb-4 text-gray-700">Works</h1>
            <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
                {
                    dataList.map((item, index) => (
                        
                        <div key={index} className="w-full relative cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 group">
                            <img src={item.img} alt={item.title} loading="lazy" className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-50 transition duration-300 ease-in-out" />
                            <div className="p-3">
                                <h5 className="text-1xl font-bold font-montserrat-regular tracking-wider text-gray-50 capitalize">{item.title}</h5>
                                <span className="text-blue-300 text-lg font-sans tracking-wide mb-2">{item.type}</span>
                                <p className="text-gray-50 text-md font-sans tracking-wide truncate">{item.tools}</p>
                            </div>
                            <div className="absolute group-hover:block hidden top-1/2 left-1/3 flex-row justify-center items-center transition duration-300 ease-in-out">
                                <Link to={{ pathname: item.github }} target="_blank">
                                    <button className="py-2 px-3 bg-blue-600 rounded-md text-md text-gray-100 font-medium hover:opacity-85 hover:bg-blue-700">View Repository</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Projects
