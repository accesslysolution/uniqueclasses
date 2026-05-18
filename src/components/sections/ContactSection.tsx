"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Loader2, CheckCircle2, Send } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      current_standard: formData.get("class") as string,
      message: formData.get("message") as string,
      type: "Enquiry",
    };

    const { error: dbError } = await supabase.from("leads").insert([payload]);

    if (!dbError) {
      try {
        await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (emailError) {
        console.error("Email notification failed to send:", emailError);
      }
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Submission failed. Please check your connection.");
    }
    setIsSubmitting(false);
  };

  // Professional pre-typed WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hello Unique Classes, I am interested in enrolling/inquiring about your courses. Please share more details."
  );

  return (
    <Section id="contact" className="bg-section py-20 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-5xl text-text-heading mb-4 tracking-tight leading-tight font-display font-bold">
                Get In <span className="text-cta">Touch</span>
              </h2>
              <p className="text-base text-text-body max-w-sm font-light leading-relaxed">
                Have questions or want to enroll? Contact us today and our team will guide you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Call Us row configured to handle multiple numbers cleanly */}
              <div className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-xl bg-background shadow-soft flex items-center justify-center text-primary shrink-0 border border-divider">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted mb-0.5">Call Us</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <a href="tel:9822547465" className="text-lg font-semibold text-text-heading hover:text-cta transition-colors">
                      9822547465
                    </a>
                    <span className="hidden sm:inline text-text-muted/40">|</span>
                    <a href="tel:9371007811" className="text-lg font-semibold text-text-heading hover:text-cta transition-colors">
                      9371007811
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-xl bg-background shadow-soft flex items-center justify-center text-primary shrink-0 border border-divider">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted mb-0.5">Email Us</p>
                  <a href="mailto:uniqueclasses24@gmail.com" className="text-lg font-semibold text-text-heading hover:text-cta transition-colors">
                    uniqueclasses24@gmail.com
                  </a>
                </div>
              </div>

              {/* Head Office Row */}
              <div className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-xl bg-background shadow-soft flex items-center justify-center text-primary shrink-0 border border-divider">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted mb-0.5">Head Office</p>
                  <a href="https://maps.app.goo.gl/uX6zM6vM4u8W8M8z8" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-text-heading hover:text-cta transition-colors">
                    Old Sangvi, Pune
                  </a>
                </div>
              </div>
            </div>

            {/* Updated WhatsApp CTA Button */}
            <div className="pt-2">
              <a 
                href={`https://wa.me/919011051088?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl px-6 py-5 text-sm font-bold shadow-lg shadow-green-100 transition-all hover:-translate-y-0.5">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-10 border-divider shadow-soft rounded-[2.5rem] bg-background border">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={40} className="text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-text-heading">Enquiry Received</h3>
                  <p className="text-text-muted text-sm">Our counselor will contact you shortly.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSuccess(false)} 
                    className="rounded-lg h-10 text-xs px-4 mt-4 border-divider hover:bg-section"
                  >
                    New Enquiry
                  </Button>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                    <input
                      name="name" required type="text" placeholder="Student Name"
                      className="w-full px-5 py-3.5 rounded-xl bg-section border-none focus:ring-2 focus:ring-primary/10 transition-all text-sm text-text-heading placeholder:text-text-muted"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Phone</label>
                      <input
                        name="phone" required type="tel" placeholder="Contact No."
                        className="w-full px-5 py-3.5 rounded-xl bg-section border-none focus:ring-2 focus:ring-primary/10 transition-all text-sm text-text-heading placeholder:text-text-muted"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Course</label>
                      <select
                        name="class" required
                        className="w-full px-5 py-3.5 rounded-xl bg-section border-none focus:ring-2 focus:ring-primary/10 transition-all text-sm text-text-heading appearance-none cursor-pointer"
                      >
                        <option value="">Select Course</option>
                        <option value="8-10th">8th - 10th</option>
                        <option value="11-12th">11th - 12th</option>
                        <option value="JEE/NEET">JEE / NEET</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Message</label>
                    <textarea
                      name="message" rows={2} placeholder="How can we help?"
                      className="w-full px-5 py-3.5 rounded-xl bg-section border-none focus:ring-2 focus:ring-primary/10 transition-all text-sm text-text-heading placeholder:text-text-muted resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-base shadow-lg shadow-primary/20 transition-all flex gap-2 active:scale-95"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <><Send size={16} /> Submit Now</>}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-[2rem] overflow-hidden border-4 border-background shadow-soft h-[400px] group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3553258529244!2d73.8118023!3d18.558021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0629636a0d%3A0x633e9d85949d0344!2sOld%20Sangvi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Unique Classes Map"
          />
          <div className="absolute bottom-6 right-6 transition-all duration-300 group-hover:translate-y-[-5px]">
            <a 
              href="https://maps.app.goo.gl/uX6zM6vM4u8W8M8z8" 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-soft border border-divider text-text-heading font-bold text-xs hover:text-cta transition-colors"
            >
              <MapPin size={14} className="text-primary" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};