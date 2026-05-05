"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

/**
 * SECTION: Navbar
 * Features: 1:1 AVIF Logo, Brand Name, and Scholarly Tagline.
 * Positioning: Fixed to top, overlaying content.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
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
        {/* Brand Logo & Name Area */}
        <Link 
          href="/" 
          className="flex items-center gap-3 z-[110] group"
        >
          {/* Logo Container with White Background */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-md transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-full h-full">
              <Image
                src="/logo.avif" 
                alt="Unique Classes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-display font-bold text-white leading-none tracking-tight">
              UNIQUE<span className="text-cta">CLASSES</span>
            </span>
            <span className="text-[10px] md:text-xs font-medium text-white/70 uppercase tracking-[0.15em] mt-1.5">
              Where Scholars Are Made
            </span>
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

        {/* Mobile Toggle Button */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
        )}
        style={{ backgroundColor: "#2e358d" }}
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
          <Button variant="primary" className="bg-cta border-none px-12 py-5 text-xl font-bold">
            Enquire Now
          </Button>
        </a>
      </div>
    </nav>
  );
};