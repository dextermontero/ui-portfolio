// Header.js
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="bg-gray-900 text-gray-50 p-4 top-0 sticky mb-5 z-50">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center">
                        <Link to="/">
                            <h2 className="text-2xl font-semibold font-montserrat-regular">DM</h2>
                        </Link>
                        <ul className="flex flex-row font-medium text-lg font-montserrat-regular">
                            <Link to="/">
                                <li className="mr-4">Home</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
