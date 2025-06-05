import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import lottie from "lottie-web";
// Assets
import haveWaving from "@/assets/lotties/wave-hand.json"
import downloadCV from "../assets/resume/Dexter_Montero.pdf";
import personCodingPerson from '@/assets/lotties/person-coding.json'

// Hooks
import useDocumentTitle from "../hooks/useDocumentTitle";

const Technology = React.lazy(() => import("@/pages/Technology"));
const Projects = React.lazy(() => import("@/pages/Projects"));

const HomePage: React.FC = () => {
    useDocumentTitle("Homepage | Personal Portfolio");

    const waveHand = useRef(null);
    const personCode = useRef(null)

    useEffect(() => {
        const waving = lottie.loadAnimation({
            // @ts-ignore
            container: waveHand.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: haveWaving
        })

        return () => {
            waving.destroy();
        };
    }, []);

    useEffect(() => {
        const personCoding = lottie.loadAnimation({
            // @ts-ignore
            container: personCode.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: personCodingPerson
        });

        return () => {
            personCoding.destroy();
          };
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                <div className="order-2 lg:order-1">
                    <div className="flex justify-start items-center">
                       <h2 className="text-3xl tracking-wider font-montserrat-bold">Hi,</h2>
                       <div className="w-14" ref={waveHand}></div>
                    </div>
                    <h2 className="text-5xl font-montserrat-semibold tracking-wider mb-6">Dexter Montero</h2>
                    <div className="flex flex-wrap items-center justify-start gap-3">
                        <Link to="https://www.facebook.com/Unkwonymous" target="_blank" aria-label="Facebook Account">
                            <span className="bg-blue-600 text-white rounded-md text-xl px-4 py-3 hover:text-blue-800 hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                        </Link>
                        <Link to="https://twitter.com/_UntitledFile" target="_blank" aria-label="Twitter Account">
                            <span className="bg-black text-white rounded-md text-xl  px-3 py-3 hover:text-black hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </span>
                        </Link>
                        <Link to="https://www.instagram.com/deeeeex.y/" target="_blank" aria-label="Instagram Account">
                            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white text-xl rounded-md px-[13px] py-3 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </Link>
                        <Link to="https://www.linkedin.com/in/dextermontero/" target="_blank" aria-label="LinkedIn Account">
                            <span className="bg-blue-700 text-white rounded-md text-xl px-3.5 py-3 hover:text-blue-700 hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </Link>
                        <Link to="https://github.com/dextermontero" target="_blank" aria-label="Github Account">
                            <span className="bg-black text-white rounded-md text-xl px-3.5 py-3 hover:text-black hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </Link>
                    </div>
                    <div className="mt-8 font-montserrat-regular">
                        <a href={downloadCV} download="Dexter_Montero.pdf" className="bg-gray-600 px-3 py-3 rounded-lg text-gray-50 font-medium tracking-wide hover:opacity-80">
                            <span className="pr-2 text-lg">
                                <FontAwesomeIcon icon={faFileArrowDown} className="animate-bounce"/>
                            </span>
                            Resume
                        </a>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="h-80" ref={personCode}></div>
                </div>
            </div>
            <Technology />
            <Projects />
        </div>
        
    )
}

export default HomePage;