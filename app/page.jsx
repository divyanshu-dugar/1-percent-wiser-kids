// app/page.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Zap,
  Award,
  BookOpen,
  Heart,
  Check,
  Brain,
  Mic,
  Calculator,
  Puzzle,
  Code,
  Globe,
  Calendar,
} from "lucide-react";

/**
 * Ultra-Premium Home Page - Updated for 1% Wiser Kids Business Plan
 */

export default function Home() {
  // Slider / hero
  const heroSlides = ["/hero/image.jpg", "/hero/image2.jpg", "/hero/image3.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  // Testimonials carousel
  const testimonials = [
    {
      quote:
        "The two-pillar approach is genius! My daughter's grades improved while she gained confidence in public speaking.",
      name: "Aisha R.",
      role: "Parent of Grade 3 Student",
      avatar: "/avatars/avatar1.jpg",
    },
    {
      quote:
        "The Mastery Binder system made learning personal. My son actually looks forward to his weekly challenges!",
      name: "Michael T.",
      role: "Parent of Grade 2 Student",
      avatar: "/avatars/avatar2.jpg",
    },
    {
      quote:
        "Finally, a center that understands holistic development. The life skills modules are transforming my child.",
      name: "Priya S.",
      role: "Parent of Grade 4 Student",
      avatar: "/avatars/avatar3.jpg",
    },
  ];
  const [testIndex, setTestIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white min-h-screen overflow-x-hidden">
      {/* Decorative background layers */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#3f42a5] to-[#5d60d6] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#F58634] to-[#ff9d55] opacity-12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/10 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-8 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl">
              <motion.div variants={fadeInUp} custom={0}>
                <div className="inline-flex items-center gap-3 bg-white/6 rounded-full px-4 py-2 mb-6 backdrop-blur">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star size={14} />
                    <Star size={14} />
                    <Star size={14} />
                  </div>
                  <span className="text-sm text-slate-300">Kolkata&apos;s Premier Whole-Child Development Center</span>
                </div>
              </motion.div>

              <motion.h1 variants={fadeInUp} custom={1} className="text-4xl sm:text-5xl font-extrabold leading-tight text-white/95">
                Where Academic Excellence Meets{" "}
                <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">Life Skills Mastery</span>
              </motion.h1>

              <motion.p variants={fadeInUp} custom={2} className="mt-6 text-slate-300 leading-relaxed text-lg">
                The complete solution for your child&apos;s report card and character development. 
                Our unique two-pillar approach guarantees academic success while building 21st-century life skills.
              </motion.p>

              <motion.div variants={fadeInUp} custom={3} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform">
                  Book Free Diagnostic Session
                  <ArrowRight size={16} />
                </Link>
                <Link href="/programs" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-xl text-slate-100 hover:bg-white/6 transition">
                  <Play size={16} className="text-[#F58634]" />
                  View Our Framework
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} custom={4} className="mt-10 grid grid-cols-3 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">2-Pillar</div>
                  <div className="text-sm text-slate-300 mt-1">Integrated Approach</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">1:6</div>
                  <div className="text-sm text-slate-300 mt-1">Student Ratio</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-slate-300 mt-1">Skill Modules</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right visual hero */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-gradient-to-br from-white/3 to-white/6">
              {/* Floating badges */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-3 py-2 rounded-full bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 font-semibold shadow-xl">Child-First Approach</div>
              </div>

              {/* Slider */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image src={heroSlides[heroIndex]} alt={`Hero ${heroIndex + 1}`} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Slider controls */}
              <button aria-label="previous" onClick={() => setHeroIndex((i) => (i === 0 ? heroSlides.length - 1 : i - 1))}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full border border-white/6 hover:scale-105 transition z-20">
                <ChevronLeft size={18} />
              </button>
              <button aria-label="next" onClick={() => setHeroIndex((i) => (i + 1) % heroSlides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full border border-white/6 hover:scale-105 transition z-20">
                <ChevronRight size={18} />
              </button>

              {/* indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setHeroIndex(i)} className={`w-3 h-3 rounded-full ${i === heroIndex ? "bg-white scale-125 shadow" : "bg-white/40 hover:bg-white/60"}`} />
                ))}
              </div>
            </div>

            {/* subtle caption */}
            <div className="mt-4 text-sm text-slate-300">Personalized Mastery Binders • Project-Based Learning • 15+ Life Skills Modules</div>
          </div>
        </section>

        {/* TWO PILLAR FRAMEWORK */}
        <section className="mt-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
              The <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">1% Wiser</span> Difference
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1} className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Our unique two-pillar framework ensures your child excels academically while developing essential life skills for the 21st century.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1: Academic Anchor */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <BookOpen className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Academic Anchor</h3>
                  <p className="text-blue-300 text-sm">Structured Curriculum Support</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">
                Personalized Mastery Binder system for Nursery to Grade 5 with guaranteed academic improvement.
              </p>

              <div className="space-y-3">
                {[
                  "Personalized Diagnostic Assessment & ILP",
                  "Individualized Mastery Binders",
                  "Real-World Application Learning",
                  "Weekly Growth Tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-blue-400" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Mathematics", "English", "Science", "Guaranteed Results"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pillar 2: Holistic Horizon */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-orange-500/10 to-amber-600/5 rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Brain className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Holistic Horizon</h3>
                  <p className="text-orange-300 text-sm">Life Skills Development</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6">
                15+ specialized modules for comprehensive character building and 21st-century skills.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Mic, label: "Public Speaking" },
                  { icon: Calculator, label: "Mental Math" },
                  { icon: Puzzle, label: "Logical Reasoning" },
                  { icon: Code, label: "Tech Literacy" },
                  { icon: Users, label: "People Skills" },
                  { icon: Calendar, label: "Time Management" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <Icon size={14} className="text-orange-400" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["UCMAS Math", "Debate & MUN", "Financial Literacy", "Future Ready"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DEVELOPMENT FOCUS AREAS */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Comprehensive Child Development Focus</h3>
            <p className="text-slate-300 mt-2">Building future-ready individuals through targeted skill development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Logic & Creativity", icon: Puzzle },
              { title: "Communication", icon: Mic },
              { title: "Leadership", icon: Users },
              { title: "Time Management", icon: Calendar },
              { title: "Tech Literacy", icon: Code },
              { title: "Financial Skills", icon: Calculator },
              { title: "IQ/EQ Balance", icon: Brain },
              { title: "Decision Making", icon: Target },
            ].map(({ title, icon: Icon }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#F58634]/30 transition-colors"
              >
                <Icon className="mx-auto text-[#F58634] mb-2" size={24} />
                <div className="text-slate-300 text-sm font-medium">{title}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us — Feature grid */}
        <section className="mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Why Kolkata Chooses 1% Wiser</h3>
              <p className="text-slate-300 mt-3">The only center offering seamless integration of academic excellence and life skills mastery.</p>

              <ul className="mt-6 space-y-3">
                {[
                  "Child-First Approach with Personalized Learning Binders",
                  "Project-Based & Experimental Learning",
                  "Structured Growth Tracking for Both Academics & Life Skills",
                  "Focus on 21st-Century Skills: Logic, Creativity, Communication",
                  "Small Batches (1:6 Ratio) for Individual Attention",
                  "Proven Track Record of Transformation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check size={18} className="text-[#FBBF24]" />
                    </div>
                    <div className="text-slate-300">{item}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="px-5 py-3 rounded-xl bg-white/6 text-white hover:bg-white/8 transition">Ask a Question</Link>
                <Link href="/book" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 font-semibold">Book Diagnostic Session</Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-white/4 to-white/6 p-6">
              <div className="w-full h-80 relative rounded-xl overflow-hidden">
                <Image src="/video/preview.jpg" alt="Our Learning Environment" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-4 rounded-full bg-white/10 border border-white/8 hover:bg-white/12 transition">
                    <Play size={28} className="text-white" />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-slate-300">Experience our unique learning environment - personalized attention, project-based learning, and joyful classrooms.</div>
            </div>
          </div>
        </section>

        {/* Testimonials carousel */}
        <section className="mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold">Parent Stories from Kolkata</h3>
            <p className="text-slate-300 mt-2">Real families. Real transformations.</p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto relative">
            <div className="rounded-2xl p-8 bg-white/4 border border-white/6 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.blockquote key={testIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.6 }}>
                  <p className="text-lg text-slate-100 italic">"{testimonials[testIndex].quote}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/6">
                      <Image src={testimonials[testIndex].avatar} alt={testimonials[testIndex].name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonials[testIndex].name}</div>
                      <div className="text-slate-300 text-sm">{testimonials[testIndex].role}</div>
                    </div>
                  </div>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setTestIndex(i)} className={`w-2 h-2 rounded-full ${i === testIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"}`} />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button onClick={() => setTestIndex((i) => Math.max(0, i - 1))} className="p-2 rounded bg-white/6 hover:bg-white/8"><ChevronLeft size={16} /></button>
                  <button onClick={() => setTestIndex((i) => Math.min(testimonials.length - 1, i + 1))} className="p-2 rounded bg-white/6 hover:bg-white/8"><ChevronRight size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16">
          <div className="rounded-3xl p-10 bg-gradient-to-r from-[#13112a] to-[#1f2140] border border-white/6 shadow-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Child&apos;s Learning Journey?</h3>
            <p className="text-slate-300 mt-3">
              Join Kolkata&apos;s most comprehensive educational program where academic success 
              and life skills development go hand in hand.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 font-semibold">
                Book Free Diagnostic Session
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl border border-white/6 text-slate-200 hover:bg-white/5 transition">
                Download Program Brochure (Coming Soon)
              </Link>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              • Free Mental Math Workshop • Personalized Learning Plan • 15+ Skill Modules •
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}