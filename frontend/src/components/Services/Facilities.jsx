import React from "react";
import {
  Utensils,
  Music,
  Flower2,
  Camera,
  Car,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const facilities = [
  { title: "In-House Catering", desc: "Delicious multi-cuisine menu options", icon: Utensils },
  { title: "Sound System", desc: "Professional audio equipment", icon: Music },
  { title: "Décor Services", desc: "Customizable event decorations", icon: Flower2 },
  { title: "Photo Zones", desc: "Beautiful backdrops for memories", icon: Camera },
  { title: "Parking", desc: "Ample parking for guests", icon: Car },
  { title: "Lighting", desc: "Ambient and accent lighting", icon: Lightbulb },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-[#f6f2ee] py-[80px]">
      <div className="mx-auto max-w-[1200px] px-6">

      
        <div className="mb-[48px] text-center">
         

          <p className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4a43c]">
            Facilities
          </p>
          <h2 className="mt-3 text-[40px] md:text-[48px] font-serif font-semibold text-[#1c1c1c]">
            Everything you Need
          </h2>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {facilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-[16px] px-6 pt-8 pb-7 text-center transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,164,60,0.18)]"
              >
                <div className="mx-auto mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#fbf3e3]">
                  <Icon size={22} className="text-[#d4a43c]" />
                </div>

                <h3 className="font-serif text-[14.5px] font-semibold text-[#1c1c1c]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b6b6b]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;
