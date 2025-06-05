import React from "react";
import { Link } from "react-router-dom";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { dataList } from "@/mock/projectData"

import { FaEye, FaGithub } from "react-icons/fa6";

const Projects: React.FC = () => {
    return (
        <div className="mt-16 lg:mt-20">
            <h1 className="text-3xl font-montserrat-extrabold">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-3 text-gray-600">
                {
                    dataList.map((project, key) => (
                        <Card key={key} className="bg-gray-50 shadow-lg rounded-lg hover:bg-gray-100 cursor-default">
                            <CardHeader className="relative">
                                <img src={project.img} loading="lazy" alt={ project.title }  className="w-full h-48 object-fit rounded-t-lg" />
                            </CardHeader>
                            <CardContent className="px-3 max-h-48 mb-4 flex-grow">
                                <CardTitle className="text-xl font-montserrat-bold">{ project.title }</CardTitle>
                                <CardDescription>
                                    <span className="text-md font-montserrat-regular">{ project.type } {project.dataSets?.trim() ? ` | ${project.dataSets}` : ""}</span>
                                    <div className="flex flex-col justify-start items-start gap-2 mt-2 max-h-24 overflow-auto pr-2 overflow-x-hidden">
                                        <span className="text-sm font-montserrat-regular">{ project.skills }</span>
                                    </div>
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="grid grid-cols-2 gap-1 justify-items-center">
                                <Link 
                                    to={project.website || '#'}
                                    onClick={(e) => {
                                        if (project.website != "#") {
                                            e.preventDefault();
                                            window.open(project.website , '_blank', 'noopener noreferrer');
                                        }
                                    }}
                                    className={`flex flex-row items-center place-content-center gap-2 font-montserrat-semibold bg-white border border-gray-300 py-1.5 px-2.5 rounded-xl w-full duration-300 ${project.website == "#" ? 'bg-gray-300 text-gray-600 cursor-not-allowed opacity-50' : 'hover:shadow-sm hover:bg-gray-100'}`}>
                                    <FaEye /> Site
                                </Link>
                                <Link 
                                    to={project.github}
                                    onClick={(e) => {e.preventDefault(); window.open(project.github, '_blank', 'noopener noreferrer');}} 
                                    className="flex flex-row items-center place-content-center gap-2 font-montserrat-semibold bg-white border border-gray-300 py-1.5 px-2.5 rounded-xl w-full duration-300 hover:shadow-sm hover:bg-gray-100">
                                    <FaGithub /> Github
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;