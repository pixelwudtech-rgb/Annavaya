import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "919789418978"; // no "+"
  const message = "Hello! I’d like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-7 top-[80%] flex items-center gap-2 z-[9999] transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-lg transition-all duration-300 origin-left ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-90 pointer-events-none"
        }`}
      >
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </div>
  );
}
