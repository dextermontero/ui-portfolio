import React from "react";
import { dataList } from "../data/projectData";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <h1 className="mb-3 font-bold tracking-wider text-3xl">Works</h1>
            <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
                {
                    dataList.map((item, index) => (
                        <Link key={index} to={"/" + item.link}>
                            <div className="w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 group">
                                <img src={item.img} alt={item.title} className="w-full h-72 object-cover rounded-t-lg group-hover:opacity-50" />
                                <div className="p-3">
                                    <h5 className="text-1xl font-bold tracking-wide text-gray-50 capitalize">{item.title}</h5>
                                    <span className="text-blue-300 text-lg tracking-wide mb-2">{item.type}</span>
                                    <p className="text-gray-50 text-md tracking-wide truncate">{item.tools}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Projects