"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const branches = [
  {
    area: "Sangvi",
    address: "Abhinav Nagar, Near Jaimala Nagar, Old Sangvi, Pune 411027",
    phone: "+91 9822547465",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Abhinav+Nagar+Sangvi+Pune",
  },
  {
    area: "Chinchwad",
    address: "Office No. 23 Heritage Plaza, Link Road, Chinchwad, Pune 411033",
    phone: "+91 9011008852",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Heritage+Plaza+Chinchwad+Pune",
  },
  {
    area: "Balewadi",
    address: "Surya Society, Opposite Moze Engineering College, Balewadi, Pune 411045",
    phone: "+91 7507007811",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Surya+Society+Balewadi+Pune",
  },
  {
    area: "Pimple Saudagar",
    address: "Office No. 313/314, 3rd Floor, Vision 9 Mall, Pimple Saudagar, Pune 411027",
    phone: "+91 7517007811",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vision+9+Mall+Pimple+Saudagar+Pune",
  },
  {
    area: "Nigdi (Yamuna Nagar)",
    address: "Plot 412, Near Nana-Nani Park, Opposite Bajaj Material Gate, Yamuna Nagar, Nigdi, Pune 411044",
    phone: "+91 9552282090",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Plot+412+Yamuna+Nagar+Nigdi+Pune",
  },
];

export const LocationsSection = () => {
  return (
    <Section id="locations" className="bg-white overflow-hidden">
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
              <MapPin size={14} /> Local Presence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900"
            >
              Our Branches <span className="text-primary">Across Pune</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 md:max-w-xs leading-snug"
          >
            Quality education within your reach. Find your nearest learning center.
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {/* Added group class to Card for parent-hover states */}
              <Card className="group relative flex flex-col h-full border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-0 rounded-3xl overflow-hidden bg-white">
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {branch.area}
                  </h3>
                  
                  <div className="flex gap-3 mb-6">
                    <MapPin className="text-primary shrink-0 mt-1" size={18} />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Branch</span>
                      <a 
                        href={`tel:${branch.phone.replace(/\s+/g, '')}`} 
                        className="flex items-center gap-2 text-slate-900 font-bold text-xl hover:text-primary transition-colors duration-300"
                      >
                        <Phone size={18} className="text-primary/40 group-hover:text-primary transition-colors duration-300" />
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    {/* 
                        FIXED HOVER: 
                        - Added explicit hover:bg-primary and hover:text-white 
                        - Added group-hover:bg-primary so the button highlights when the whole card is hovered
                    */}
                    <Button 
                      variant="outline" 
                      className="w-full justify-between bg-slate-50 border-none rounded-xl py-6 transition-all duration-300 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white"
                      onClick={() => window.open(branch.mapUrl, "_blank")}
                      icon={<ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};