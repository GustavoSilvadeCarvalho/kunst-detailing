export default function NavBar() {
    return (
        <nav className="flex justify-center items-center py-2 absolute top-20 z-20">
            <ul className="flex items-center border border-gray-700 rounded-full bg-transparent">
                <li className="py-2 lg:py-3">
                    <a href="#about" className="px-3 lg:px-5 py-2 text-white text-sm lg:text-base font-medium hover:text-gray-400">About us</a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-gray-600"></li>

                <li className="py-2 lg:py-3">
                    <a href="#services" className="px-3 lg:px-5 py-2 text-white text-sm lg:text-base font-medium hover:text-gray-400">Services</a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-gray-600"></li>

                <li className="py-2 lg:py-3">
                    <a href="#contacts" className="px-3 lg:px-5 py-2 text-white text-sm lg:text-base font-medium hover:text-gray-400">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

