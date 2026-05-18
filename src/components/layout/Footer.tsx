import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";

/**
 * COMPONENT: Footer
 * Section: Layout
 * Updated: Included all Nav Links, updated contact numbers, and added WhatsApp with pre-typed message.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Unified links to match Navbar
  const footerLinks = [
    { name: "Home", href: "#Hero" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "#results" },
    { name: "Locations", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ];

  // Professional pre-typed WhatsApp message template
  const whatsappMessage = encodeURIComponent(
    "Hello Unique Classes, I am interested in enrolling/inquiring about your courses. Please share more details."
  );

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-xl inline-flex items-center justify-center">
                <Image 
                  src="/logo.avif" 
                  alt="Unique Classes Logo" 
                  width={150} 
                  height={50} 
                  className="object-contain"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <p className="text-cta font-bold text-xs uppercase tracking-[0.2em]">
                Where Scholars Are Made
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Providing quality education and personal guidance for students from 8th to 12th along with JEE and NEET preparation.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 text-sm hover:text-cta transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="hover:text-white transition-colors cursor-default">8th–10th Foundation</li>
              <li className="hover:text-white transition-colors cursor-default">11th Science</li>
              <li className="hover:text-white transition-colors cursor-default">12th Science</li>
              <li className="hover:text-white transition-colors cursor-default">JEE / NEET</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">Call Us</span>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:9822547465" className="text-white font-medium hover:text-cta transition-colors text-sm">
                    9822547465
                  </a>
                  <a href="tel:9371007811" className="text-white font-medium hover:text-cta transition-colors text-sm">
                    9371007811
                  </a>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">WhatsApp</span>
                <a 
                  href={`https://wa.me/919011051088?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-cta transition-colors text-sm flex items-center gap-1"
                >
                  9011051088
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">Email</span>
                <a href="mailto:uniqueclasses24@gmail.com" className="text-white font-medium hover:text-cta transition-colors text-sm">
                  uniqueclasses24@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">Head Office</span>
                <span className="text-white/70 text-sm">Old Sangvi, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-center text-white/40 text-xs">
            © {currentYear} Unique Classes. All Rights Reserved.
          </p>
          
          <p className="text-white/30 text-[10px] uppercase tracking-widest">
            Website by{" "}
            <a 
              href="https://lupaentertainment.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-cta transition-all font-bold"
            >
              Lupa Entertainment
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};