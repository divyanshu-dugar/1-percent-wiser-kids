"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, BookOpen, Send, MessageCircle, ArrowRight, Star, Sparkles, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function BookInfoSession() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Failed to send request");
      }

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });

    } catch (err) {
      console.error("Contact form submit error:", err);
      setSubmitError("Failed to send your request. Please try again or use WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello 1% Wiser - Kids, I would like to book an info session:\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nMessage: ${formData.message || 'No message'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918777574997?text=${encodedText}`, '_blank');
  };

  // Animation variants from homepage
  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white min-h-screen overflow-x-hidden pt-20 pb-20 relative">
      {/* Decorative background layers - matching homepage */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#3f42a5] to-[#5d60d6] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#F58634] to-[#ff9d55] opacity-12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/10 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} custom={0}>
            <div className="inline-flex items-center gap-3 bg-white/6 rounded-full px-4 py-2 mb-6 backdrop-blur border border-white/10">
              <div className="flex items-center gap-2 text-yellow-400">
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
              </div>
              <span className="text-sm text-slate-300">Free Diagnostic Session</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} custom={1} className="text-4xl sm:text-5xl font-extrabold leading-tight text-white/95 mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              Free Diagnostic Session
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} custom={2} className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover how our two-pillar approach can transform your child's learning journey. 
            Get personalized insights and a custom learning plan.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1 space-y-6"
          >
            {/* Benefits Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-[#F58634]">What You'll Get</h3>
              <div className="space-y-4">
                {[
                  { icon: Target, text: "Personalized Learning Assessment" },
                  { icon: Users, text: "1:6 Student-Teacher Ratio Insight" },
                  { icon: BookOpen, text: "Academic Mastery Plan Preview" },
                  { icon: Sparkles, text: "Life Skills Development Roadmap" },
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-[#F58634] to-[#FBBF24] rounded-lg">
                      <Icon size={16} className="text-white" />
                    </div>
                    <span className="text-slate-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-[#F58634]">Visit Our Center</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F58634] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">Prime Location</div>
                    <div className="text-slate-400 text-sm">Kolkata, West Bengal</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">Session Timing</div>
                    <div className="text-slate-400 text-sm">45-60 Minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 Parent Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#13112a] to-[#1f2140] p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#F58634] to-[#FBBF24] rounded-lg">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Schedule Your Session</h2>
                    <p className="text-slate-300 text-sm">We'll contact you within 24 hours to confirm</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                    <p className="text-slate-300 mb-6 max-w-md mx-auto">
                      Your free diagnostic session request has been received. We'll contact you shortly to confirm your booking and discuss next steps.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
                    >
                      Book Another Session
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F58634] focus:border-transparent text-white placeholder-slate-400 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F58634] focus:border-transparent text-white placeholder-slate-400 transition-all"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F58634] focus:border-transparent text-white placeholder-slate-400 transition-all"
                          placeholder="Your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                          Additional Information (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#F58634] focus:border-transparent text-white placeholder-slate-400 transition-all resize-none"
                          placeholder="Tell us about your child's current grade, specific challenges, or any questions you have..."
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <Send size={18} />
                          {isSubmitting ? "Sending..." : "Book Free Session"}
                          <ArrowRight size={18} />
                        </motion.button>
                        
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleWhatsApp}
                          className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform flex-1 border border-[#25D366]/20"
                        >
                          <MessageCircle size={18} />
                          Message on WhatsApp
                        </motion.button>
                      </div>

                      {submitError && (
                        <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                          {submitError}
                        </p>
                      )}
                      
                      <p className="text-sm text-slate-400 text-center pt-4 border-t border-white/10">
                        Better yet, see us in person! We'd love to show you our center and discuss your child's unique needs.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Trust Note */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
              className="mt-6 text-center"
            >
              <p className="text-slate-400 text-sm">
                <strong className="text-[#F58634]">No commitment required.</strong> This session is completely free 
                and helps us understand how we can best support your child's growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}