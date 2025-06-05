import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

import IMAGES from "@/mock/imagesData"
import { timelineData } from "@/mock/timelineData";

import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { CgGames } from "react-icons/cg";

const About: React.FC = () => {

    useDocumentTitle("About Me | Personal Portfolio");
    return (
        <div className="container mx-auto p-4 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-montserrat-extrabold mb-4 text-gray-700">
                        <span className="text-yellow-500">About</span> Me
                    </h2>
                    <p className="text-start mb-4 font-montserrat-regular text-md">
                        An aspiring software and web developer. This Portfolio, contains my accomplished and ongoing personal and academic projects.
                    </p>
                    <div className="bg-white w-full shadow-md rounded-xl py-5 px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center justify-start text-justify break-all gap-4">
                                <div className="p-4 bg-gray-200 rounded-lg shadow-md">
                                    <FaBriefcase className="h-5 w-5 xl:h-8 xl:w-8 text-gray-600"/>
                                </div>
                                <div className="">
                                    <h2 className="text-md xl:text-md xl:text-lg font-montserrat-bold">Experience</h2>
                                    <p className="text-sm xl:text-sm xl:text-md font-montserrat-regular">Associate Backend Developer</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start text-justify break-all gap-4">
                                <div className="p-4 bg-gray-200 rounded-lg shadow-md">
                                    <GiSkills className="h-5 w-5 xl:h-8 xl:w-8 text-gray-600"/>
                                </div>
                                <div className="">
                                    <h2 className="text-md xl:text-md xl:text-lg font-montserrat-bold">Skills</h2>
                                    <p className="text-sm xl:text-sm xl:text-md font-montserrat-regular">Team-work, Critical Thinking, Curiosity, Problem Solving, Adaptability, Self-Motivation</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start text-justify break-all gap-4">
                                <div className="p-4 bg-gray-200 rounded-lg shadow-md">
                                    <CgGames className="h-5 w-5 xl:h-8 xl:w-8 text-gray-600"/>
                                </div>
                                <div className="">
                                    <h2 className="text-md xl:text-md xl:text-lg font-montserrat-bold">Hobby</h2>
                                    <p className="text-sm xl:text-sm xl:text-md font-montserrat-regular">Playing Computer Games</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-start text-justify break-all gap-4">
                                <div className="p-4 bg-gray-200 rounded-lg shadow-md">
                                    <GiGraduateCap className="h-5 w-5 xl:h-8 xl:w-8 text-gray-600"/>
                                </div>
                                <div className="">
                                    <h2 className="text-md xl:text-md xl:text-lg font-montserrat-bold">Education</h2>
                                    <p className="text-sm xl:text-sm xl:text-md font-montserrat-regular">Quezon City University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center order-1 lg:order-2">
                    <img src={IMAGES.profileImg} className="h-80 rounded-full shadow-md" loading="lazy"/>
                </div>
            </div>
            <h2 className="text-3xl font-montserrat-extrabold text-gray-600 mt-8 mb-4">Timeline</h2>
            <div className="bg-white w-full shadow-md rounded-xl py-5 px-6">
                <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                    {
                        timelineData.map((item, index) => (
                            <li className="md:flex-1" key={index}>
                                <a href={`#${item.title}`} className={`group flex flex-col border-l-4 ${item.border} py-2 pl-4 ${item.hoverborder} md:border-l-0 md:border-t-4 md:pb-2 md:pl-2 md:pt-3 hover:bg-slate-100 group:shadow-md`}>
                                    <span className={`text-lg font-montserrat-black ${item.text} ${item.groupText}`}>{item.dateTime}</span>
                                    <span className="text-md font-montserrat-bold">{item.title}</span>
                                    <span className="text-sm font-montserrat-medium">{item.content}</span>
                                </a>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default About;