"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export const FloatingContactActions = () => {
  const CALL_NUMBER = "9822547465";
  const WHATSAPP_NUMBER = "919011051088"; // Includes country code prefix

  return (
    <>
      {/* LEFT BOTTOM CORNER: Click-to-Call Trigger */}
      <div className="fixed bottom-6 left-6 z-[100] pointer-events-auto">
        <a
          href={`tel:${CALL_NUMBER}`}
          aria-label="Call Support"
          className="flex items-center justify-center w-14 h-14 bg-primary text-background rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 active:scale-95 group border border-divider"
        >
          <FaPhone className="w-5 h-5 animate-[pulse_2s_infinite]" />
          
          {/* Subtle SaaS Context Tooltip on Hover */}
          <span className="absolute left-16 bg-text-heading text-background text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-soft">
            Call Us
          </span>
        </a>
      </div>

      {/* RIGHT BOTTOM CORNER: WhatsApp Chat Trigger */}
      <div className="fixed bottom-6 right-6 z-[100] pointer-events-auto">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to inquire about your programs.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <FaWhatsapp className="w-7 h-7" />
          
          {/* Subtle SaaS Context Tooltip on Hover */}
          <span className="absolute right-16 bg-text-heading text-background text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-soft">
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};