

import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../../src/assets/images/maple-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#f6f2ee]  text-black pt-20 pb-8 px-6 md:px-12 lg:px-20">

            {/* Top Heading Section
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Plan Your Event?
                </h2>
                <p className="max-w-2xl mx-auto text-black-200 mb-6">
                    Let us help you create an unforgettable experience. Contact us today to discuss your requirements.
                </p>
                <button className="bg-[#D29922] hover:bg-[#b88619] text-black font-semibold px-6 py-3 rounded-lg shadow">
                    Get in Touch
                </button>
            </div> */}

            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-black-200">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={Logo}
                            alt="Maple Banquet Logo"
                            className="w-[660px] h-[160px] object-contain"
                        />
                        {/* <div>
                            <h3 className="text-xl font-bold text-white">Maple Banquet</h3>
                            <p className="text-sm text-gray-300">A unit of Chefin Hospitalities</p>
                        </div> */}
                    </div>

                    <p className="text-black-300 leading-relaxed mb-4">
                        Creating unforgettable moments in our elegant venue. Your perfect celebration starts here with our exceptional service and stunning ambiance.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#D29922]">Home</a></li>
                        <li><a href="#about" className="hover:text-[#D29922]">About Us</a></li>
                        <li><a href="#hall" className="hover:text-[#D29922]">Hall Details</a></li>
                        <li><a href="#services" className="hover:text-[#D29922]">Services</a></li>
                        <li><a href="#gallery" className="hover:text-[#D29922]">Gallery</a></li>
                        <li><a href="#packages" className="hover:text-[#D29922]">Packages</a></li>
                        <li><a href="#contact" className="hover:text-[#D29922]">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li>Wedding Celebrations</li>
                        <li>Engagement Ceremonies</li>
                        <li>Birthday Parties</li>
                        <li>Corporate Events</li>
                        <li>Family Reunions</li>
                        <li>Kitty Parties</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Contact Us</h3>

                    <div className="flex items-start gap-3 mb-4">
                        <FiMapPin className="text-[#D29922] text-xl" />
                        <p>Rajapeth Bus Stop, Hudkeshwar Road,<br />Nagpur - 440034</p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <FiPhone className="text-[#D29922] text-xl" />
                        <p>9579187450</p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <FiMail className="text-[#D29922] text-xl" />
                        <p>info@maplebanquet.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <FiClock className="text-[#D29922] text-xl" />
                        <p>12:00 PM – 11:30 PM</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 mt-14 pt-4 flex flex-col md:flex-row justify-between text-black-300 text-sm">
                <p>© 2025 Maple Banquet. All rights reserved.</p>

                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:text-[#D29922] text-black">Privacy Policy</a>
                    <a href="#" className="hover:text-[#D29922] text-black">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
