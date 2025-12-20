import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const usedDates = ["2025-01-20", "2025-01-25", "2025-02-05"];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;

    
    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = true;
    }

    
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = true;


    if (!formData.date) {
      newErrors.date = "required";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate <today) newErrors.date = "past";
      if (usedDates.includes(formData.date)) newErrors.date = "booked";
    }

  
    if (!formData.guests) newErrors.guests = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch(
        "http://localhost:5001/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("Inquiry sent successfully!");

   
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        eventType: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  // Create max date = today + 1 year
  const maxDateObj = new Date();
  maxDateObj.setFullYear(maxDateObj.getFullYear() + 1);
  const maxDate = maxDateObj.toISOString().split("T")[0];



  return (
    <section className="relative bg-[#FFFFFF py-[50px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Let’s Create <br />
            <span className="italic text-[#d4a43c]">Unforgettable Moments</span>
          </h2>

          <p className="text-[15px] text-[#6b6b6b] max-w-md mb-10">
            Whether you're planning a wedding, celebration, or corporate event,
            our team is ready to help.
          </p>

          <div className="space-y-6">
            <Info icon={<Phone size={18} />} title="Phone" value="9579187450" />
            <Info icon={<Mail size={18} />} title="Email" value="info@maplebanquet.com" />
            <Info
              icon={<MapPin size={18} />}
              title="Address"
              value="Rajapeth Bus Stop, Hudkeshwar Road, Nagpur – 440034"
            />
            <Info icon={<Clock size={18} />} title="Timings" value="12:00 PM – 11:30 PM" />
          </div>
        </div>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[24px] shadow-xl p-8 md:p-10"
        >
          <h3 className="text-[22px] font-serif font-semibold mb-6">
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 text-[13px]">

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name *"
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="phone"
                placeholder="WhatsApp Number *"
                onChange={handleChange}
                error={errors.phone}
              />
              <input
                name="date"
                type="date"
                min={minDate}      // ❌ blocks past dates
                max={maxDate}      // ❌ blocks dates beyond 1 year
                onChange={handleChange}
                className={`w-full border-b px-2 py-3 focus:outline-none ${errors.date ? "border-red-500" : "border-[#d8cfc4]"
                  }`}
              />


            </div>

            {errors.date === "past" && (
              <p className="text-red-500 text-xs">Past dates are not allowed</p>
            )}
            {errors.date === "booked" && (
              <p className="text-red-500 text-xs">This date is already booked</p>
            )}
            {errors.date === "future-limit" && (
              <p className="text-red-500 text-xs">
                You can only book up to 1 year in advance
              </p>
            )}


            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="eventType"
                onChange={handleChange}
                className="w-full border-b border-[#d8cfc4] px-2 py-3 bg-transparent"
              >
                <option value="">Select Event Type</option>
              
                <option>Corporate Event</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Baby Shower</option>
                <option>Kitty Parties</option>
                <option>Family Reunions</option>
                 <option>Wedding</option>
              </select>

              <select
                name="guests"
                onChange={handleChange}
                className={`w-full border-b px-2 py-3 bg-transparent ${
                  errors.guests ? "border-red-500" : "border-[#d8cfc4]"
                }`}
              >
                <option value="">Expected Guests *</option>
                <option>10 – 15</option>
                <option>16 – 50</option>
                <option>51 – 100</option>
                <option>100+</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us more about your event requirements..."
              onChange={handleChange}
              className="w-full border-b border-[#d8cfc4] px-2 py-3"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full rounded-lg bg-[#d4a43c] py-3 font-semibold flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Input = ({ error, ...props }) => (
  <input
    {...props}
    className={`w-full border-b px-2 py-3 focus:outline-none ${
      error ? "border-red-500" : "border-[#d8cfc4]"
    }`}
  />
);

const Info = ({ icon, title, value }) => (
  <div className="flex gap-4">
    <div className="h-10 w-10 rounded-full bg-[#fbf3e3] flex items-center justify-center text-[#d4a43c]">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-[13px] text-[#6b6b6b]">{value}</p>
    </div>
  </div>
);

export default ContactSection;
