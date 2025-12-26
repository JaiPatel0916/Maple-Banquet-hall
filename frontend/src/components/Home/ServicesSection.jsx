import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import weddingImg from "../../assets/images/wedding.jpeg";
import birthdayImg from "../../assets/images/birthday.jpg";
import corporateImg from "../../assets/images/corporate.jpg";
import anniversaryImg from "../../assets/images/anniversary.jpg";
import babyshowerImg from "../../assets/images/babyshower.png";
import engagementImg from "../../assets/images/engagement.jpg";
import familyImg from "../../assets/images/family.jpg";
import partyImg from "../../assets/images/party.png";

const services = [
  { title: "Wedding Celebrations", image: weddingImg, link: "/services" },
  { title: "Birthday Parties", image: birthdayImg, link: "/services" },
  { title: "Corporate Events", image: corporateImg, link: "/services" },
  { title: "Anniversary Celebrations", image: anniversaryImg, link: "/services" },
  { title: "Babyshower Celebrations", image: babyshowerImg, link: "/services" },
  { title: "Engagement Ceremonies", image: engagementImg, link: "/services" },
  { title: "Family Reunions", image: familyImg, link: "/services" },
  { title: "Kitty Parties", image: partyImg, link: "/services" },
];

const extendedServices = [...services, ...services, ...services];

export default function ServicesSection() {
  const [index, setIndex] = useState(services.length);
  const [isMobile, setIsMobile] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);


  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;

 
  const next = () => {
    setEnableTransition(true);
    setIndex((prev) => prev + 1);
  };


  const prev = () => {
    setEnableTransition(true);
    setIndex((prev) => prev - 1);
  };

  
  useEffect(() => {
   
    if (index === services.length * 2) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(services.length);
      }, 500);
    }


    if (index === services.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(services.length * 2 - 1);
      }, 500);
    }
  }, [index]);

  return (
    <section className="bg-white py-14 xl:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

    
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a43c]">
              Our Services
            </p>
            <h2 className="mt-2 max-w-md text-3xl xl:text-4xl font-serif font-semibold">
              Perfect Venue for <br /> Every Occasion
            </h2>
          </div>

          <Link to="/services">
            <button className="rounded-md border px-4 py-2 text-sm hover:bg-[#d4a43c] hover:text-white">
              View All Services →
            </button>
          </Link>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${
                enableTransition
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${(index * 100) / cardsPerView}%)`,
              }}
            >
              {extendedServices.map((service, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/3 px-3 flex-shrink-0"
                >
                  <div className="relative h-[300px] xl:h-[400px] rounded-2xl overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="text-lg xl:text-xl font-serif font-semibold">
                        {service.title}
                      </h3>
                      <Link to={service.link} className="text-sm text-[#d4a43c]">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
