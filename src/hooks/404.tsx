import React from "react";
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] overflow-hidden">
            <h2 className="uppercase xl:text-5xl text-3xl font-montserrat-black font-bold text-gray-400">Page not found</h2>
            <Link to="/" className="flex flex-row items-center gap-3 mt-4 text-gray-600">
                <FaArrowLeft className="text-gray-600"/>
                <span className="font-montserrat-bold text-gray-500">
                    Return to home
                </span>
            </Link>
        </div>
    );
};

export default NotFound;
