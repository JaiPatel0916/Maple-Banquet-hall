import React, { useState } from "react";

// Import images from assets
import hall from "../../assets/images/hall.jpg";
import hall1 from "../../assets/images/hall-1.jpg";
import hall2 from "../../assets/images/hall-2.jpg";
import wedding from "../../assets/images/wedding.jpeg";
import birthday from "../../assets/images/birthday.jpg";
import catering from "../../assets/images/catering.jpg";
import family from "../../assets/images/family.jpg";
import engagement from "../../assets/images/engagement.jpg";
import hall3 from "../../assets/images/hall3.jpg";
import birthday2 from "../../assets/images/birthday2.jpg";
import catering2 from "../../assets/images/catering2.jpg";
import wedding2 from "../../assets/images/wedding2.jpg"

const galleryItems = [
  { img: hall, category: "hall" },
  { img: hall1, category: "Weddings" },
  { img: hall3, category: "Venue" },
  { img: catering2, category: "Catering" },

  { img: birthday, category: "Events" },
  { img: wedding, category: "Weddings" },
  { img: engagement, category: "Events" },
  { img: family, category: "Venue" },

  { img: hall2, category: "Venue" },
  { img: catering, category: "Catering" },
  { img: birthday2, category: "Events" },
  { img: wedding2, category: "Weddings" },
];

const filters = ["All", "Venue", "Weddings", "Events", "Catering"];

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6">

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-[#d4a43c] text-white"
                    : "bg-[#f3f0ec] text-[#1c1c1c] hover:bg-[#e7e1d7]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[18px]"
            >
              <img
                src={item.img}
                alt={item.category}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;
