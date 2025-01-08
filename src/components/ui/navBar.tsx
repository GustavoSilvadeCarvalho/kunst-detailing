export default function NavBar() {
    return (
        <nav className="flex justify-center items-center py-2 absolute top-20 z-20">
            <ul className="flex items-center border border-[#2E2E2E] rounded-full bg-transparent">
                <li className="py-2 lg:py-3">
                    <a href="#about" className="mx-3 lg:mx-5 my-2 text-[#F1F1F1] text-sm lg:text-base font-medium relative group">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F1F1F1] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-[#2E2E2E]"></li>

                <li className="py-2 lg:py-3">
                    <a href="#services" className="mx-3 lg:mx-5 my-2 text-[#F1F1F1] text-sm lg:text-base font-medium relative group">
                        Serviços
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F1F1F1] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>

                <li className="w-px h-5 lg:h-7 bg-[#2E2E2E]"></li>

                <li className="py-2 lg:py-3">
                    <a href="#contacts" className="mx-3 lg:mx-5 my-2 text-[#F1F1F1] text-sm lg:text-base font-medium relative group">
                        Contato
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F1F1F1] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};