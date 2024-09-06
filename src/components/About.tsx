import React, { useEffect } from "react";
import { Timeline } from "flowbite-react";
import { timelineData } from "../data/timelineData";
import { HiCalendar } from "react-icons/hi";

import OnProgress from "./OnProgress";


// Icons
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { CgGames } from "react-icons/cg";

import IMAGES from "../data/imagesData"

import { timelineConfig } from '../Configs/timelineConfig';

import DragScrollContainer from "./DragScrollContainer"


function About() {
    const debug = false;
    useEffect(() => {
        document.title = 'About Me';
    }, []);
    return (
        <>
            {debug ? (
                <OnProgress />
            ) : (
                <section id="aboutme" className="container mb-20 group rounded-lg">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 place-content-between items-center justify-center text-start mb-5">
                        <div className="order-2 xl:order-1">
                            <h2 className="text-3xl xl:text-4xl font-montserrat-extrabold mb-4 text-gray-700"><span className="text-yellow-500">About</span> Me</h2>
                            <p className="text-start mb-4 font-montserrat-regular text-md">
                                An aspiring software and web developer. This Portfolio, contains my accomplished and ongoing personal and academic projects.
                            </p>
                            
                            <div className="bg-gray-50 w-full shadow-sm rounded-xl text-start py-5 px-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex items-center justify-start text-justify break-all">
                                        <div className="p-4 bg-slate-200 rounded-lg shadow-md mr-4">
                                            <FaBriefcase className="h-5 w-5 xl:h-8 xl:w-8 text-gray-700"/>
                                        </div>
                                        <div className="">
                                            <h2 className="text-md xl:text-md xl:text-lg font-montserrat-bold">Experience</h2>
                                            <p className="text-sm xl:text-sm xl:text-md font-montserrat-regular">Jr. Back-End Developer</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start text-justify break-all">
                                        <div className="p-4 bg-slate-200 rounded-lg shadow-md mr-4">
                                            <GiSkills className="h-5 w-5 xl:h-8 xl:w-8 text-gray-700" />
                                        </div>
                                        <div className="">
                                            <h2 className="text-md xl:text-lg font-montserrat-bold">Skills</h2>
                                            <p className="text-sm xl:text-md font-montserrat-regular">Team-work, Critical Thinking</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start text-justify break-all">
                                        <div className="p-4 bg-slate-200 rounded-lg shadow-md mr-4">
                                            <CgGames className="h-5 w-5 xl:h-8 xl:w-8 text-gray-700"/>
                                        </div>
                                        <div className="">
                                            <h2 className="text-md xl:text-lg font-montserrat-bold">Hobby</h2>
                                            <p className="text-sm xl:text-md font-montserrat-regular">Playing Computer Games</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start text-justify break-all">
                                        <div className="p-4 bg-slate-200 rounded-lg shadow-md mr-4">
                                            <GiGraduateCap className="h-5 w-5 xl:h-8 xl:w-8 text-gray-700"/>
                                        </div>
                                        <div className="">
                                            <h2 className="text-md xl:text-lg font-montserrat-bold">Education</h2>
                                            <p className="text-sm xl:text-md font-montserrat-regular">Quezon City University</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 xl:order-2 place-content-center">
                            <div className="flex justify-center items-center">
                                <img src={IMAGES.profileImg} className="h-80 xl:h-96 rounded-full shadow-sm" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl xl:text-4xl font-montserrat-extrabold mb-4 text-gray-700">Timeline</h2>
                    <div className="px-6 py-5 bg-gray-50 shadow-sm rounded-lg">
                        <nav aria-label="Progress">
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
                        </nav>
                    </div>
                </section>
            )}
        </>
    )
}

export default About