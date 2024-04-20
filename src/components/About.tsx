import React, { useEffect } from "react";
import { Timeline } from "flowbite-react";
import { timelineData } from "../data/timelineData";
import { HiCalendar } from "react-icons/hi";

import OnProgress from "./OnProgress";

function About() {
    const debug = true;
    useEffect(() => {
        document.title = 'About Me';
    }, []);
    return (
        <>
            {debug ? (
                <OnProgress />
            ) : (
                <section id="aboutme" className="container mb-20 group rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-between items-center justify-center text-center">
                        <div className="order-2 md:order-1">
                            asdasjdkahsjkdhask
                        </div>
                        <div className="order-1 md:order-2">
                            ajkdhasjkdhask
                        </div>
                    </div>
                    
                    <div className="px-10 mt-5 bg-gray-50 overflow-y-auto shadow-sm rounded-lg">
                        <Timeline horizontal>
                            {
                                timelineData.map((item, index) => (
                                    <Timeline.Item  key={index} className="mt-8 md:p-8 md:mt-0">
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content className="p-4 ml-3 md:ml-3 md:p-0">
                                            <Timeline.Time className="text-lg font-montserrat-medium">{item.dateTime}</Timeline.Time>
                                            <Timeline.Title className="font-medium text-md font-montserrat-medium dark:text-gray-500">{item.title}</Timeline.Title>
                                            <Timeline.Body className="dark:text-gray-500 font-montserrat-regular">
                                                <p className="text-justify">{item.content}</p>
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                ))
                            }
                        </Timeline>
                    </div>
                </section>
            )}
        </>
    )
}

export default About