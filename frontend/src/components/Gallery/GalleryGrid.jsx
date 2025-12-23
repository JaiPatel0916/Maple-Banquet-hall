import { useEffect, useState } from "react";
import api from "../../api/axios";

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeFilter, setActiveFilter] = useState("All");

  /* FETCH GALLERY IMAGES */
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await api.get("/gallery");

        setImages(data);

        // unique categories from DB
        const uniqueCategories = [
          "All",
          ...new Set(data.map((img) => img.category)),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Gallery fetch failed", err);
      }
    };

    fetchGallery();
  }, []);

  /* FILTER LOGIC */
  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6">

        {/* FILTER BUTTONS */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition
                ${activeFilter === filter
                  ? "bg-[#d4a43c] text-white"
                  : "bg-[#f3f0ec] text-[#1c1c1c] hover:bg-[#e7e1d7]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {filteredImages.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-[18px]"
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full rounded-[18px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;
