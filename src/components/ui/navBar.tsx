export default function NavBar() {
    return (
        <nav className="flex justify-center items-center py-2 absolute top-20 z-20">
            <ul className="flex items-center border border-slate-100 rounded-full bg-transparent">
                <li className="py-2 lg:py-3">
                    <a href="#about" className="mx-3 lg:mx-5 my-2 text-white text-sm lg:text-base font-medium hover:text-gray-400 relative group">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-slate-100"></li>

                <li className="py-2 lg:py-3">
                    <a href="#services" className="mx-3 lg:mx-5 my-2 text-white text-sm lg:text-base font-medium hover:text-gray-400 relative group">
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-slate-100"></li>

                <li className="py-2 lg:py-3">
                    <a href="#contacts" className="mx-3 lg:mx-5 my-2 text-white text-sm lg:text-base font-medium hover:text-gray-400 relative group">
                        Products
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};