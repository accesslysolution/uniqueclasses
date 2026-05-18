"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Calendar, Percent, ArrowRight, Sparkles, Phone, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const CTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleQuickRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");

    try {
      // 1. Insert Lead into Supabase
      const { error: dbError } = await supabase.from("leads").insert([{
        name,
        phone,
        type: "AST",
        current_standard: "10th"
      }]);

      if (dbError) throw new Error("Database error: " + dbError.message);

      // 2. Trigger Email API (app/api/send/route.ts)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          current_standard: "10th",
          type: "AST",
          message: "Automatic registration for Admission Cum Scholarship Test (AST)."
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Email API failed:", errorData);
      }

      // 3. UI Success Feedback
      setSuccess(true);
      setTimeout(() => { 
        setShowForm(false); 
        setSuccess(false); 
      }, 3000);

    } catch (err) {
      console.error("Workflow failed:", err);
      alert("Registration failed. Please call us directly at 9822547465 or 9371007811.");
    } finally {
      setLoading(false);
    }
  };

  // Professional pre-typed WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hello Unique Classes, I am interested in enrolling/inquiring about your courses. Please share more details."
  );

  return (
    <Section id="cta" className="bg-text-heading relative overflow-hidden py-16 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-primary rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-cta rounded-full blur-[120px]" 
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} className="text-cta" /> Admissions 2026-27
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Success Journey</span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-md mb-8 leading-relaxed font-light">
              Join <span className="text-white font-medium">UNIQUE Classes</span> for elite coaching. 
              To appear in AST, contact us today or register below.
            </p>

            {/* SaaS-Style Action Row */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <button 
                onClick={() => window.open(`https://wa.me/919011051088?text=${whatsappMessage}`, "_blank")}
                className="inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white text-white hover:text-text-heading px-5 py-2.5 text-sm font-semibold rounded-lg border border-white/10 hover:border-white transition-all shadow-sm backdrop-blur-sm active:scale-[0.98] w-full sm:w-auto shrink-0"
              >
                <MessageCircle size={15} /> 
                <span>Chat on WhatsApp</span>
              </button>

              <div className="flex items-center gap-2.5 text-white/80 sm:border-l sm:border-white/10 sm:pl-5 h-5">
                <Phone size={14} className="text-cta shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Call:</span>
                <div className="flex items-center gap-2.5 text-sm font-semibold">
                  <a href="tel:9822547465" className="text-white hover:text-cta transition-colors">9822547465</a>
                  <span className="text-white/20 text-xs">|</span>
                  <a href="tel:9371007811" className="text-white hover:text-cta transition-colors">9371007811</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cta to-primary rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              
              <div className="relative bg-text-heading/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {!showForm ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                    >
                      <div className="inline-flex items-center gap-2 text-cta font-black text-[10px] uppercase tracking-widest mb-4">
                        <Calendar size={14} /> Session 2026-27
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                        Admission Cum Scholarship Test <span className="text-cta">(AST)</span>
                      </h3>
                      
                      <p className="text-white/50 mb-6 text-sm leading-relaxed">
                        Exclusively for students studying in <span className="text-white font-bold">Class 10th</span>. 
                        Unlock up to 100% scholarship for our integrated batches.
                      </p>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 flex items-center justify-center bg-cta/10 rounded-lg text-cta">
                            <Percent size={20} />
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm leading-none">Special 10% Discount</p>
                            <p className="text-white/40 text-xs mt-1">For first 15 admissions in the integrated batch.</p>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => setShowForm(true)}
                        className="group flex items-center justify-between w-full bg-white text-text-heading p-5 rounded-xl font-black text-base transition-all hover:bg-cta hover:text-white"
                      >
                        Register for AST 2026
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                    >
                      {success ? (
                        <div className="text-center py-10">
                          <CheckCircle2 size={54} className="text-green-500 mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-white">Seat Reserved!</h3>
                          <p className="text-white/50 text-sm mt-2">We will WhatsApp the test details shortly.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleQuickRegister} className="space-y-4">
                          <h3 className="text-xl font-bold text-white mb-4">Quick Registration</h3>
                          <input 
                            name="name" required placeholder="Student Name" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-cta outline-none text-sm transition-all"
                          />
                          <input 
                            name="phone" required type="tel" placeholder="WhatsApp Number" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-cta outline-none text-sm transition-all"
                          />
                          <div className="flex gap-2 pt-4">
                            <Button type="submit" disabled={loading} className="flex-1 bg-cta hover:opacity-90 py-6 rounded-lg font-bold text-white border-none">
                              {loading ? <Loader2 className="animate-spin" /> : "Confirm Seat"}
                            </Button>
                            <Button type="button" onClick={() => setShowForm(false)} variant="outline" className="border-white/10 text-white hover:bg-white/10 py-6">
                              Back
                            </Button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};