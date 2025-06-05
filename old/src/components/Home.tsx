import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import personCoding from '../lotties/person-coding.json'
import haveWaving from '../lotties/wave-hand.json'
import lottie from "lottie-web"
// @ts-ignore
import downloadCV from "../assets/resume/Dexter_Montero.pdf";
import { TbBounceLeft } from "react-icons/tb";

function Home() {
    
    useEffect(() => {
        document.title = 'My Personal Portfolio ';
    }, []);

    const waveHand = useRef(null)

    useEffect(() => {
        const waveHands = lottie.loadAnimation({
            // @ts-ignore
            container: waveHand.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: haveWaving
        });

        return () => {
            waveHands.destroy();
          };
    }, []);

    const personCodes = useRef(null)

    useEffect(() => {
        const personCode = lottie.loadAnimation({
            // @ts-ignore
            container: personCodes.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: personCoding
        });

        return () => {
            personCode.destroy();
          };
    }, []);

    return (
        <section id="home" className="container mb-20 group">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 mb-10 mt-10 lg:place-items-center">
                <div className="order-1">
                    <div className="flex justify-start items-center">
                       <h2 className="text-2xl font-montserrat-regular font-bold tracking-wider">Hi,</h2>
                       <div className="w-14" ref={waveHand}></div>
                    </div>
                    <h2 className="text-4xl font-bold font-montserrat-extrabold tracking-wider text-gray-700 mb-8">Dexter Montero</h2>
                    <div className="flex flex-wrap items-center justify-start mb-10">
                        <Link to={{ pathname: "https://www.facebook.com/Unkwonymous" }} target="_blank" className="pr-2" aria-label="Facebook Account">
                            <span className="bg-blue-800 text-white rounded-md text-xl px-4 py-3 hover:text-blue-800 hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                        </Link>
                        <Link to={{ pathname: "https://twitter.com/_UntitledFile" }} target="_blank" className="pr-2" aria-label="Twitter Account">
                            <span className="bg-black text-white rounded-md text-xl px-3 py-3 hover:text-black hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </span>
                        </Link>
                        <Link to={{ pathname: "https://www.instagram.com/deeeeex.y/" }} target="_blank" className="pr-2" aria-label="Instagram Account">
                            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white text-xl rounded-md px-[13px] py-3 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/dextermontero/" }} target="_blank" className="pr-2" aria-label="LinkedIn Account">
                            <span className="bg-blue-700 text-white rounded-md text-xl px-3.5 py-3 hover:text-blue-700 hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </Link>
                        <Link to={{ pathname: "https://github.com/dextermontero" }} target="_blank" className="pr-2" aria-label="Github Account">
                            <span className="bg-black text-white rounded-md text-xl px-3.5 py-3 hover:text-black hover:bg-white transition duration-300 ease-in-out shadow-md">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </Link>
                    </div>
                    <div className="">
                        <a href={downloadCV} download="Dexter_Montero.pdf" className="bg-gray-600 px-3 py-3 rounded-lg text-gray-50 font-medium tracking-wide hover:opacity-80">
                            <span className="pr-2 text-lg">
                                <FontAwesomeIcon icon={faFileArrowDown} className="group-hover:animate-bounce"/>
                            </span>
                            Resume
                        </a>
                    </div>
                </div>
                <div className="order-2 hidden lg:block">
                    <div className="mb-4 h-96" ref={personCodes}></div>
                </div>
            </div>
        </section>
    )
}

export default Home