import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Formspree ID from your endpoint: https://formspree.io/f/mdapeepr
      const formId = import.meta.env.VITE_FORMSPREE_ID || "mdapeepr"; 
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4 block">GET IN TOUCH</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">
              Let's Build Something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                Exceptional Together
              </span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
              Available for freelance opportunities and full-time engineering roles. I'm always open to discussing new projects or creative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label text-outline uppercase tracking-widest">Email</p>
                  <p className="text-on-surface font-medium">charles.g.caballero@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label text-outline uppercase tracking-widest">Phone</p>
                  <p className="text-on-surface font-medium">+63 997 186 5108</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-label text-outline uppercase tracking-widest">Location</p>
                  <p className="text-on-surface font-medium">Philippines</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label text-outline uppercase tracking-widest ml-1">Name</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-outline/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label text-outline uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-outline/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-outline uppercase tracking-widest ml-1">Subject</label>
                <input 
                  required
                  name="subject"
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-outline/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-outline uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-outline/50 resize-none"
                />
              </div>
              
              <motion.button
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all ${
                  status === "loading" ? "bg-slate-700 cursor-not-allowed" : "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-primary/10"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"} 
                <Send className="w-4 h-4" />
              </motion.button>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm justify-center mt-4"
                >
                  <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm justify-center mt-4"
                >
                  <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
