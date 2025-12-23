import { useEffect, useState } from "react";
import axios from "axios";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const PackagesCards = () => {
  const [packages, setPackages] = useState([]);
  const [selected, setSelected] = useState("silver");

  useEffect(() => {
    axios.get("http://localhost:5001/api/packages").then((res) => {
      setPackages(res.data);
    });
  }, []);

  /* ================= FILTER LOGIC ================= */
  let filtered =
    selected === "popular"
      ? packages.filter((p) => p.isPopular)
      : packages.filter((p) => p.category === selected);

  const popularPkg = filtered.find((p) => p.isPopular);
  const otherPkgs = filtered.filter((p) => !p.isPopular);

  let finalPackages = filtered;
  if (popularPkg && otherPkgs.length >= 2) {
    finalPackages = [otherPkgs[0], popularPkg, otherPkgs[1]];
  }

  finalPackages = finalPackages.slice(0, 3);

  /* ================= CATEGORY COLORS ================= */
  const badgeColor = (cat) => {
    if (cat === "silver") return "bg-blue-100 text-blue-800";
    if (cat === "golden") return "bg-yellow-100 text-yellow-800";
    return "bg-[#8b5a2b] text-white"; // platinum
  };

  return (
    <section className="py-20 bg-[#fbf8f3]">
      {/* ================= SMALL INLINE ANIMATION CSS ================= */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.6s ease-out both;
        }
      `}</style>

      {/* ================= CATEGORY BAR ================= */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {[
          { key: "silver", label: "Silver" },
          { key: "golden", label: "Golden " },
          { key: "platinum", label: "Platinum" },
          { key: "popular", label: "⭐ Most Popular" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSelected(item.key)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition
              ${
                selected === item.key
                  ? "bg-[#d29922] text-black"
                  : "bg-white border"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ================= CARDS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {finalPackages.map((pkg, idx) => {
          const isPopular = pkg.isPopular;

          return (
            <div
              key={pkg._id}
              className={`relative p-8 rounded-2xl shadow-lg flex flex-col min-h-[620px]
                fade-up transition-all duration-300
                ${
                  isPopular
                    ? "bg-[#6e1b1b] text-white hover:shadow-2xl"
                    : "bg-white border hover:-translate-y-1 hover:shadow-xl"
                }`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* MOST POPULAR BADGE — CENTER */}
              {isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d29922] text-black px-5 py-1 text-xs rounded-full font-semibold shadow-md">
                  ⭐ Most Popular
                </span>
              )}

              {/* CATEGORY BADGE */}
              <span
                className={`mb-4 self-start px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                  pkg.category
                )}`}
              >
                {pkg.category.toUpperCase()}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {pkg.name}
              </h3>

              <p
                className={`text-sm mt-1 ${
                  isPopular ? "text-[#f1e6d8]" : "text-gray-600"
                }`}
              >
                {pkg.description}
              </p>

              <p className="text-3xl font-semibold mt-6">
                ₹{pkg.price}
                <span className="text-sm font-normal ml-1">
                  starting
                </span>
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm">
                {pkg.features?.map((feature, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <FiCheck className="text-[#d29922]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact"
                className="mt-auto w-full py-3 rounded-lg font-semibold mt-10
                  bg-[#d29922] text-black hover:bg-[#c08a16]
                  transition-all duration-300 flex items-center justify-center"
              >
                Book Now
           </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PackagesCards;
