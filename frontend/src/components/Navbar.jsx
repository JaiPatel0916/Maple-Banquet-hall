import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

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
    { title: "Contact", link: "/contact" },
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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-[72px] bg-[#F7F2EE] z-[10000] shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-xl md:text-2xl font-bold text-[#7A1F1F]">
            Maple Banquet
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  `relative group transition ${
                    isActive
                      ? "text-[#BE8C1A] font-semibold"
                      : "text-gray-800 hover:text-[#BE8C1A]"
                  }`
                }
              >
                {item.title}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#BE8C1A] transition-all duration-300 ${
                    location.pathname === item.link
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </NavLink>
            ))}

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-gray-700">
                <FiPhone /> 9579187450
              </span>
              <button className="bg-[#D29922] px-4 py-2 rounded-lg font-medium hover:bg-[#b88619]">
                Book Now
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          ref={menuRef}
          className="fixed top-[72px] left-0 w-full bg-[#F7F2EE] z-[9999] shadow-md lg:hidden"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg border-b pb-2 transition ${
                    isActive
                      ? "text-[#BE8C1A] font-semibold"
                      : "text-gray-800"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <div className="flex items-center gap-2 pt-2 text-gray-700">
              <FiPhone /> 9579187450
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR SPACER */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
