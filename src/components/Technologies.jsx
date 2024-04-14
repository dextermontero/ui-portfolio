import { FaHtml5, FaCss3Alt, FaPhp, FaJava, FaBootstrap, FaLaravel, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiVisualstudio, SiTailwindcss, SiMongodb, SiRedis } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

function SkillSets() {
    return (
        <>
            <h1 className="mb-3 font-montserrat-bold uppercase tracking-wider text-3xl">Skills and Tools</h1>
            <div className="mb-14">
                <div className="flex flex-wrap justify-start items-center content-center">
                    <span className="pr-3 mb-4">
                        <FaHtml5 className="text-5xl text-orange-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaCss3Alt className="text-5xl text-blue-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaPhp className="text-5xl text-blue-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <IoLogoJavascript  className="text-5xl text-yellow-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaJava className="text-5xl text-red-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <SiMysql className="text-5xl text-blue-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <SiVisualstudio className="text-5xl text-purple-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaBootstrap className="text-5xl text-purple-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <SiTailwindcss className="text-5xl text-teal-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaLaravel className="text-5xl text-red-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaPython className="text-5xl text-yellow-400"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaGit className="text-5xl text-red-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <SiMongodb className="text-5xl text-green-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FaDocker className="text-5xl text-blue-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <SiRedis className="text-5xl text-red-500"/>
                    </span>
                    <span className="pr-3 mb-4">
                        <FcLinux className="text-5xl text-blue-500"/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default SkillSets;