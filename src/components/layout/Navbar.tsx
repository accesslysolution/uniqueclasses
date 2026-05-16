"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

/**
 * SECTION: Navbar
 * Features: Unified Branding Badge (Logo + Name Image sharing a white background)
 * Positioning: Fixed to top, overlaying content. Fixes mobile background overlap issue.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent background scrolling when mobile navigation panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#Hero" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "Locations", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        scrolled
          ? "bg-[#2e358d]/95 backdrop-blur-lg border-b border-white/10 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Combined Brand Logo + Name Badge */}
        <Link href="/" className="flex z-[110] group">
          <div className="flex items-center gap-3.5 bg-white p-1.5 px-3 md:px-4 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
            
            {/* Logo Wrapper (1:1 Aspect Ratio) */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
              <Image
                src="/logo.avif"
                alt="Unique Classes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Subtle Vertical Separator Line */}
            <div className="h-5 md:h-6 w-[1px] bg-slate-200 shrink-0" />

            {/* Name Image Wrapper (1080x450 Aspect Ratio) */}
            <div className="relative h-5 md:h-6 aspect-[1080/450] shrink-0">
              <Image
                src="/names.avif"
                alt="Unique Classes"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 text-sm font-semibold uppercase tracking-widest hover:text-cta transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <a href="#contact">
            <Button
              variant="primary"
              className="py-2.5 px-8 bg-cta border-none hover:bg-[#c93536] text-white shadow-md font-bold"
            >
              Enquire Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 z-[110]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <div className="w-8 h-6 flex flex-col justify-between">
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300", isOpen && "rotate-45 translate-y-2.5")} />
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300", isOpen && "opacity-0")} />
            <span className={cn("w-full h-0.5 bg-white transition-all duration-300", isOpen && "-rotate-45 -translate-y-2.5")} />
          </div>
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 h-screen w-screen bg-[#2e358d] z-[105] md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        )}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "text-3xl font-display font-bold text-white hover:text-cta transition-colors",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${idx * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className={cn(
            "pt-4 transition-all duration-500",
            isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
          )}
        >
          <Button className="bg-cta border-none px-12 py-5 text-xl font-bold">
            Enquire Now
          </Button>
        </a>
      </div>
    </nav>
  );
};