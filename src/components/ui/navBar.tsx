export default function NavBar()  {
    return (
        <nav className="flex justify-center items-center py-2">
            <ul className="flex items-center border border-gray-700 rounded-full bg-transparent">
                <li className="py-2">
                    <a href="#about" className="px-6 py-2 text-white text-sm font-medium hover:text-gray-400">About us</a>
                </li>

                <li className="w-px h-6 bg-gray-600"></li>

                <li className="py-2">
                    <a href="#services" className="px-6 py-2 text-white text-sm font-medium hover:text-gray-400">Services</a>
                </li>

                <li className="w-px h-6 bg-gray-600"></li>

                <li className="py-2">
                    <a href="#contacts" className="px-6 py-2 text-white text-sm font-medium hover:text-gray-400">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};
  
  