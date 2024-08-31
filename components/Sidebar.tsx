import { useState } from "react";

export function Sidebar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
        <div className="flex">
            <div
            className={`${
            isSidebarOpen ? 'w-64' : 'w-16'
            } bg-green-900 text-white flex flex-col transition-all duration-300 sm:relative z-10 sm:z-auto h-full sm:h-auto`}
            >

            <div className="p-4 flex justify-between items-center">
            <span className="font-bold text-lg">
                {isSidebarOpen ? 'Dashboard' : 'DB'}
            </span>

            <button onClick={toggleSidebar} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={`${
                    isSidebarOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }`}
                />
                </svg>
            </button>
            </div>
            <ul className="flex-grow">
            <li
                className={`p-4 hover:bg-green-700 cursor-pointer ${
                !isSidebarOpen && 'text-center'
                }`}
            >
                {isSidebarOpen ? 'Home' : 'H'}
            </li>
            <li
                className={`p-4 hover:bg-green-700 cursor-pointer ${
                !isSidebarOpen && 'text-center'
                }`}
            >
                {isSidebarOpen ? 'Professores' : 'P'}
            </li>
            <li
                className={`p-4 hover:bg-green-700 cursor-pointer ${
                !isSidebarOpen && 'text-center'
                }`}
            >
                {isSidebarOpen ? 'Turmas' : 'T'}
            </li>
            <li
                className={`p-4 hover:bg-green-700 cursor-pointer ${
                !isSidebarOpen && 'text-center'
                }`}
            >
                {isSidebarOpen ? 'ERP' : 'E'}
            </li>
            </ul>
            {isSidebarOpen && (
            <div className="p-4 bg-green-800">© 2024</div>
            )}
            </div>
        </div>
    )
}

export default Sidebar