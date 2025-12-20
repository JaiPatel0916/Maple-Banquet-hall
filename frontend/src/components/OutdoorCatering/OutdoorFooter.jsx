import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../../src/assets/images/maple-logo.png";
import { Link } from "react-router-dom";

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

                
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://www.facebook.com/share/r/17nTKeUDpv/?mibextid=wwXIfr"
                            aria-label="Facebook"
                            className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#D29922] text-[#D29922]
                   transition-all duration-300 ease-out
                   hover:bg-[#D29922] hover:text-black
                   hover:-translate-y-1 hover:scale-110"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            href="https://www.instagram.com/maple.banquet?igsh=bGV5NzR6bGc4eWV5"
                            aria-label="Instagram"
                            className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#D29922] text-[#D29922]
                   transition-all duration-300 ease-out
                   hover:bg-[#D29922] hover:text-black
                   hover:-translate-y-1 hover:scale-110"
                        >
                            <FaInstagram size={16} />
                        </a>
{/* 
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#D29922] text-[#D29922]
                   transition-all duration-300 ease-out
                   hover:bg-[#D29922] hover:text-black
                   hover:-translate-y-1 hover:scale-110"
                        >
                            <FaYoutube size={16} />
                        </a> */}
                    </div>

                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-[#D29922]">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#D29922]">About Us</Link></li>
                        <li><Link to="/hall" className="hover:text-[#D29922]">Hall Details</Link></li>
                        <li><Link to="/services" className="hover:text-[#D29922]">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-[#D29922]">Gallery</Link></li>
                        <li><Link to="/outdoor-catering" className="hover:text-[#D29922]">Outdoor Catering</Link></li>
                        <li><Link to="/packages" className="hover:text-[#D29922]">Packages</Link></li>
                        <li><Link to="/contact" className="hover:text-[#D29922]">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li>Corporate Events</li>
                        <li>Engagement Ceremonies</li>
                        <li>Baby Shower</li>
                        <li>Birthday Parties</li>
                        <li>Kitty Parties</li>
                        <li>Family Reunions</li>
                        <li>Wedding Celebrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Contact Us</h3>

                    <div className="flex items-start gap-3 mb-4">
                        <FiMapPin className="text-[#D29922] text-xl" />
                        <p>Rajapeth Bus Stop, Hudkeshwar Road,<br />Nagpur - 440034</p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <FiPhone className="text-[#D29922] text-xl" />
                        <p>9579187450 , 8600149177</p>
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
            <div className="border-t border-gray-600 mt-14 pt-4">
                <div className="flex justify-start md:justify-center text-sm">
                    <Link
                        to="https://tarstech.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D29922] transition"
                    >
                        Design and Developed with ❤️ by <span className="font-semibold">TARS TECHNOLOGIES</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
