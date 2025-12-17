import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#f6f2ee] py-[80px]">
      <div className="mx-auto max-w-[1320px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT – FORM */}
        <div className="bg-[#fffaf6] rounded-2xl p-10 shadow-sm">
          <h3 className="text-[22px] font-serif font-semibold mb-6">
            Send an Inquiry
          </h3>

          <form className="space-y-4 text-[13px]">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Phone Number *</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-medium">Event Date *</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Event Type</label>
                <select className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2">
                  <option>Select event type</option>
                  <option>Anniversary</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Babyshower</option>
                  <option>Engagement</option>
                  <option>Family reunion</option>
                  <option>Kitty Party</option>
                </select>
              </div>

              <div>
                <label className="font-medium">Expected Guests</label>
                <input
                  type="number"
                  placeholder="100"
                  className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Additional Details</label>
              <textarea
                rows="4"
                placeholder="Tell us more about your event requirements..."
                className="mt-1 w-full rounded-md border border-[#e4ddd5] px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 w-full rounded-md bg-[#d4a43c] py-3 text-[13px] font-semibold text-black hover:bg-[#c3922e]"
            >
              <Send size={16} />
              Send Inquiry
            </button>

          </form>
        </div>

        {/* RIGHT – GET IN TOUCH */}
        <div>
          <h3 className="text-[22px] font-serif font-semibold mb-4">
            Get in Touch
          </h3>
          <p className="text-[13px] text-[#6b6b6b] mb-6 leading-relaxed">
            Have questions about our venue or services? Our team is here to help you
            plan the perfect event. Reach out to us through any of the channels below.
          </p>

          <div className="space-y-4">

            {/* Phone */}
            <div className="flex gap-4 bg-[#f1ede8] rounded-xl p-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f7e8c6]">
                <Phone size={18} className="text-[#d4a43c]" />
              </div>
              <div>
                <h4 className="font-semibold text-[14px]">Phone</h4>
                <p className="text-[13px] text-[#d4a43c]">9579187450</p>
                <p className="text-[12px] text-[#6b6b6b]">
                  For reservations and inquiries
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 bg-[#f1ede8] rounded-xl p-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f7e8c6]">
                <Mail size={18} className="text-[#d4a43c]" />
              </div>
              <div>
                <h4 className="font-semibold text-[14px]">Email</h4>
                <p className="text-[13px] text-[#d4a43c]">
                  info@maplebanquet.com
                </p>
                <p className="text-[12px] text-[#6b6b6b]">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 bg-[#f1ede8] rounded-xl p-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f7e8c6]">
                <MapPin size={18} className="text-[#d4a43c]" />
              </div>
              <div>
                <h4 className="font-semibold text-[14px]">Address</h4>
                <p className="text-[13px]">
                  Rajapeth Bus Stop, Hudkeshwar Road, Nagpur - 440034
                </p>
                <span className="text-[12px] text-[#d4a43c] cursor-pointer">
                  Get Directions →
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="flex gap-4 bg-[#f1ede8] rounded-xl p-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#f7e8c6]">
                <Clock size={18} className="text-[#d4a43c]" />
              </div>
              <div>
                <h4 className="font-semibold text-[14px]">Timings</h4>
                <p className="text-[13px]">12:00 PM - 11:30 PM</p>
                <p className="text-[12px] text-[#6b6b6b]">
                  Open all days
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
