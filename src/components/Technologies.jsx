import { FaHtml5, FaCss3Alt, FaPhp, FaJava, FaBootstrap, FaLaravel, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiVisualstudio, SiTailwindcss, SiMongodb, SiRedis } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

function SkillSets() {
    return (
        <>
            <h1 className="mb-3 font-montserrat-bold uppercase tracking-wider text-3xl text-gray-700">Skills and Tools</h1>
            <div className="mb-14">
                <div className="flex flex-wrap justify-start items-center content-center">
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaHtml5 className="text-5xl text-orange-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaCss3Alt className="text-5xl text-blue-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaPhp className="text-5xl text-blue-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <IoLogoJavascript  className="text-5xl text-yellow-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaJava className="text-5xl text-red-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <SiMysql className="text-5xl text-blue-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <SiVisualstudio className="text-5xl text-purple-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaBootstrap className="text-5xl text-purple-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <SiTailwindcss className="text-5xl text-teal-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaLaravel className="text-5xl text-red-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaPython className="text-5xl text-yellow-400"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaGit className="text-5xl text-red-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <SiMongodb className="text-5xl text-green-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FaDocker className="text-5xl text-blue-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <SiRedis className="text-5xl text-red-500"/>
                    </div>
                    <div className="p-2 mb-4 hover:shadow-md rounded-lg border-1 hover:border-1 hover:bg-white transition duration-300 ease-in-out mr-2">
                        <FcLinux className="text-5xl text-blue-500"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillSets;