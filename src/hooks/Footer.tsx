import React from "react";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex justify-center items-center place-items-center m-2">
            <p className="text-gray-500 text-md font-montserrat-medium">
                Copyright &copy; 2022 - {year} | All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
