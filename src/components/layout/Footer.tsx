import Link from "next/link";
import { Container } from "../ui/Container";

/**
 * COMPONENT: Footer
 * Section: Layout
 * Purpose: Final navigational block with branding, quick links, and contact summary.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-divider pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-display font-bold text-primary tracking-tight">
              UNIQUE<span className="text-cta">CLASSES</span>
            </Link>
            <p className="text-cta font-bold text-xs uppercase tracking-[0.2em]">
              Where Scholars Are Made
            </p>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Providing quality education and personal guidance for students from 8th to 12th along with JEE and NEET preparation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-text-heading mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Courses", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                    className="text-text-body text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="font-display font-bold text-text-heading mb-6">Our Courses</h4>
            <ul className="space-y-4 text-text-body text-sm">
              <li>8th–10th Foundation</li>
              <li>11th Science</li>
              <li>12th Science</li>
              <li>JEE / NEET</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-bold text-text-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-text-muted uppercase">Call Us</span>
                <a href="tel:9552282090" className="text-text-heading font-medium hover:text-cta transition-colors">
                  9552282090
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-text-muted uppercase">Email</span>
                <a href="mailto:uniqueclasses24@gmail.com" className="text-text-heading font-medium hover:text-primary transition-colors">
                  uniqueclasses24@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-bold text-text-muted uppercase">Head Office</span>
                <span className="text-text-body text-sm">Old Sangvi, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-divider">
          <p className="text-center text-text-muted text-xs">
            © {currentYear} Unique Classes. All Rights Reserved. Designed for Excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
};