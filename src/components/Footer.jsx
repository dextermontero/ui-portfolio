function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="container mx-auto px-4 sticky top-[100vh] mt-9 mb-5">
                <div className="flex justify-center items-center place-items-center">
                    <p className="text-light text-gray-500 text-md font-montserrat-medium">Copyright &copy; 2022 - {year} | All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
