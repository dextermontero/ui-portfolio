import React from "react";
// https://reactjsexample.com/a-filterable-gallery-built-with-reactjs-and-tailwind-css/
function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="container mx-auto px-4 sticky top-[100vh] mt-9 mb-5">
                <div className="flex justify-center items-center place-items-center">
                    <p className="text-light text-gray-600 text-md">Copyright &copy; 2022 - {year} | All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;