import React from "react";

function Header() {
    return (
        <>
            <header className="bg-gray-900 text-gray-50 p-4 top-0 sticky mb-5">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center">
                        <a href="#asasdasdas">
                            DM
                        </a>
                        <ul className="flex flex-row font-medium text-lg">
                            <li className="mr-4"><a href="https://google.com">Home</a></li>
                            <li><a href="https://google.com">Projects</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header