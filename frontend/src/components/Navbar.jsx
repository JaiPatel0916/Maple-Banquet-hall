import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Logo from "../assets/images/maple-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Hall Details", link: "/hall" },
    { title: "Services", link: "/services" },
    { title: "Gallery", link: "/gallery" },
    { title: "Packages", link: "/packages" },
    { title: "Outdoor Catering", link: "/outdoor-catering" },
  ];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[64px] sm:h-[72px] bg-[#F7F2EE] z-[10000] shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={Logo}
              alt="Maple Banquet Logo"
              className="
                h-9 w-auto     
                sm:h-11
                md:h-14
                object-contain
              "
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `relative transition ${isActive
                    ? "text-[#BE8C1A] font-semibold"
                    : "text-gray-800 hover:text-[#BE8C1A]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+919579187450"
              className="hidden lg:flex items-center gap-1 text-gray-700 hover:text-[#BE8C1A]"
            >
              <FiPhone />
              9579187450
            </a>

            <Link
              to="/contact"
              className="
                bg-[#D29922]
                px-3 py-1.5 text-sm      
                sm:px-4 sm:py-2 sm:text-base
                rounded-md
                font-medium
                hover:bg-[#b88619]
                transition
                whitespace-nowrap
              "
            >
              Book Now
            </Link>

  
            <button
              className="lg:hidden text-2xl sm:text-3xl ml-1"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          ref={menuRef}
          className="fixed top-[64px] sm:top-[72px] left-0 w-full bg-[#F7F2EE] z-[9999] shadow-md lg:hidden"
        >
          <div className="flex flex-col px-5 py-4 space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                onClick={() => setOpen(false)}
                className="text-base border-b pb-2"
              >
                {item.title}
              </NavLink>
            ))}

            <a
              href="tel:+919579187450"
              className="flex items-center gap-2 pt-2 text-gray-700"
            >
              <FiPhone />
              9579187450
            </a>
          </div>
        </div>
      )}

      <div className="h-[64px] sm:h-[72px]" />
    </>
  );
};

export default Navbar;
