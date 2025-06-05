import React from "react";
import { Link } from "react-router-dom";

const TopMenuBar: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center gap-2">
                <Link to="/" className="hover:opacity-80 duration-300">
                    <h2 className="text-3xl font-montserrat-black font-black text-gray-600">DM</h2>
                </Link>
                <div className="flex flex-row font-montserrat-regular font-semibold text-xl gap-4">
                    <Link to="/">
                        <span className="hover:opacity-80 duration-300">Home</span>
                    </Link>
                    <Link to="/about">
                        <span className="hover:opacity-80 duration-300">About Me</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopMenuBar;