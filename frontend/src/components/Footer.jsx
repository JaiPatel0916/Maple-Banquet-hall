import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/maple-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#f6f2ee] text-black pt-20 pb-8 px-6 md:px-12 lg:px-20">

            {/* CTA */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Plan Your Event?
                </h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Let us help you create an unforgettable experience.
                </p>
                <button className="bg-[#D29922] hover:bg-[#b88619] px-6 py-3 rounded-lg font-semibold shadow">
                    Get in Touch
                </button>
            </div>

            {/* Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

                {/* Logo + Description */}
                <div className="flex flex-col items-start">

                    {/* LOGO FIX */}
                    <div className="w-72 h-[90px] overflow-hidden mb-3">
                        <img
                            src={Logo}
                            alt="Maple Banquet Logo"
                            className="w-full h-full object-contain object-top"
                        />
                    </div>

                    <p className="leading-relaxed mb-4">
                        Creating unforgettable moments in our elegant venue.
                        Your perfect celebration starts here with our exceptional
                        service and stunning ambiance.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a
                            href="#"
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

                        <a
                            href="#"
                            aria-label="YouTube"
                            className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#D29922] text-[#D29922]
                   transition-all duration-300 ease-out
                   hover:bg-[#D29922] hover:text-black
                   hover:-translate-y-1 hover:scale-110"
                        >
                            <FaYoutube size={16} />
                        </a>
                    </div>

                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#D29922] mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/hall">Hall Details</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/outdoor-catering">Outdoor Catering</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
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
            <div className="border-t border-gray-600 mt-14 pt-4 flex flex-col md:flex-row justify-between text-sm">
                <p>© 2025 Maple Banquet. All rights reserved.</p>
                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
