// FILE: src/components/Navbar.jsx

import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Logo from "../assets/images/maple-logo.png"; // <-- Put your logo here

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { title: "Home", link: "#" },
        { title: "About", link: "#about" },
        { title: "Hall Details", link: "#hall" },
        { title: "Services", link: "#services" },
        { title: "Gallery", link: "#gallery" },
        { title: "Packages", link: "#packages" },
        { title: "Contact", link: "#contact" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50 shadow-sm bg-[#F7F2EE]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo + Text */}
                <div className="flex items-center gap-3">
                    <img
                        src={Logo}
                        alt="Maple Banquet Logo"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-[#7A1F1F]">
                            Maple Banquet
                        </h1>
                        <p className="text-sm text-gray-600 -mt-1">
                            A unit of Chefin Hospitalities
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            className="text-gray-800 hover:text-[#BE8C1A] transition relative group"
                        >
                            {item.title}
                            {/* underline effect */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#BE8C1A] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Phone + Book Button */}
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-gray-700">
                            <FiPhone className="text-lg" />
                            9579187450
                        </span>
                        <button className="bg-[#D29922] hover:bg-[#b88619] text-black px-4 py-2 rounded-lg shadow">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="bg-[#F7F2EE] md:hidden px-5 pb-4 space-y-4 shadow-md">
                    {menuItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            className="block text-gray-800 text-lg border-b py-2"
                        >
                            {item.title}
                        </a>
                    ))}

                    <div className="flex items-center justify-between pt-4">
                        <span className="flex items-center gap-2 text-gray-700">
                            <FiPhone className="text-lg" />
                            9579187450
                        </span>

                        <button className="bg-[#D29922] hover:bg-[#b88619] text-black px-4 py-2 rounded-lg shadow">
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
