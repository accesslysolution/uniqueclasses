"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, ExternalLink, Map } from "lucide-react";

const branchDetails = {
  area: "Sangvi",
  address: "Abhinav Nagar, Near Jaimala Nagar, Old Sangvi, Pune 411027",
  // Standard Google Maps Embed URL for a clean interactive frame
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3746736465453!2d73.8118029!3d18.5571617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf689e41989f%3A0x6333cf48fc6b0b55!2sAbhinav%20Nagar%2C%20Old%20Sangvi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  directionUrl: "https://www.google.com/maps/search/?api=1&query=Abhinav+Nagar+Sangvi+Pune",
};

export const LocationsSection = () => {
  return (
    <Section id="location" className="bg-white overflow-hidden py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            >
              <MapPin size={14} /> Center Location
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900"
            >
              Visit Our <span className="text-primary">Learning Center</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 md:max-w-xs leading-snug"
          >
            Quality education within your reach. Find our primary campus coordinates below.
          </motion.p>
        </div>

        {/* Two-Column Split Layout to fully utilize container space */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Information Card (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex"
          >
            <Card className="group relative flex flex-col w-full border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-8 rounded-3xl bg-white justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                  Head Office
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                  {branchDetails.area}
                </h3>
                
                <div className="flex gap-3 mb-8">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-slate-600 text-base leading-relaxed">
                    {branchDetails.address}
                  </p>
                </div>
              </div>

              {/* Contact Framework & CTA links */}
              <div className="space-y-6">
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Hub</span>
                    
                    <div className="flex items-start gap-3 text-slate-900 font-bold text-xl">
                      <Phone size={20} className="text-primary/40 group-hover:text-primary transition-colors duration-300 mt-1 shrink-0" />
                      <div className="flex flex-col gap-1.5">
                        <a href="tel:9822547465" className="hover:text-primary transition-colors duration-300 tracking-tight">
                          9822547465
                        </a>
                        <a href="tel:9371007811" className="hover:text-primary transition-colors duration-300 text-slate-600 font-semibold text-lg tracking-tight">
                          9371007811
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-slate-50 border-none rounded-xl py-6 transition-all duration-300 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white text-base"
                  onClick={() => window.open(branchDetails.directionUrl, "_blank")}
                  icon={<ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />}
                >
                  Get Directions
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right Side: High-End Live Map Container (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 min-h-[400px] lg:min-h-full flex"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-100 shadow-sm group bg-slate-50">
              {/* Fallback decorative absolute backdrop element */}
              <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-all duration-500 z-10" />
              
              <iframe
                title="Unique Classes Location Map"
                src={branchDetails.embedMapUrl}
                className="w-full h-full min-h-[400px] lg:h-full border-0 grayscale-[15%] contrast-[110%] focus:outline-none"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};