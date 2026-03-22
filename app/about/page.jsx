"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Target,
  Zap,
  TrendingUp,
  Heart,
  Award,
  BookOpen,
  Brain,
  Mic,
  Calculator,
  Puzzle,
  Code,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
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

      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ---------------- HERO ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} custom={0}>
            <div className="inline-flex items-center gap-3 bg-white/6 rounded-full px-4 py-2 mb-6 backdrop-blur border border-white/10">
              <div className="flex items-center gap-2 text-yellow-400">
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
              </div>
              <span className="text-sm text-slate-300">Kolkata&apos;s Premier Whole-Child Development Center</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} custom={1} className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white/95 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              1% Wiser
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} custom={2} className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Where academic excellence meets life skills mastery.  
            The complete solution for your child&apos;s{" "}
            <span className="font-semibold text-white">report card and character</span>{" "}
            development.
          </motion.p>
        </motion.div>

        {/* ---------------- STATS BAR ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: "2-Pillar", label: "Integrated Approach" },
            { value: "1:6 Ratio", label: "Personal Attention" },
            { value: "15+", label: "Skill Modules" },
            { value: "98%", label: "Parent Satisfaction" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#F58634]/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">{item.value}</div>
              <div className="text-slate-300 text-sm mt-2">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- VISION & MISSION ---------------- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Target className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
                <p className="text-blue-300 text-sm">Future-Ready Generation</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              To be Kolkata&apos;s premier educational center known for developing the whole child - 
              where academic success and life skills go hand in hand.
            </p>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <TrendingUp size={16} className="text-blue-400" />
              <span>One complete solution for report card and character development</span>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-orange-500/10 to-amber-600/5 rounded-2xl p-8 border border-orange-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Zap className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <p className="text-orange-300 text-sm">Building Future Leaders</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              To build future-ready individuals through our unique two-pillar approach: 
              guaranteed academic mastery and comprehensive life skills development.
            </p>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Heart size={16} className="text-orange-400" />
              <span>Every child grows 1% wiser each day in both competence and confidence</span>
            </div>
          </motion.div>
        </div>

        {/* ---------------- VALUE PROPOSITION ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 bg-gradient-to-r from-[#13112a] to-[#1f2140] border border-white/6 shadow-2xl mb-20"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-6">
                The <span className="text-[#FBBF24]">1% Wiser</span> Difference
              </motion.h3>

              <motion.p variants={fadeInUp} custom={1} className="text-slate-300 text-lg leading-relaxed mb-6">
                We&apos;re building the future of after-school education in Kolkata. While others focus on rote learning, 
                we create fundamentally more competent and confident individuals for life.
              </motion.p>

              <motion.ul variants={fadeInUp} custom={2} className="space-y-3">
                {[
                  "Child-First Approach with Personalized Learning Binders",
                  "Project-Based & Experimental Learning",
                  "Structured Growth Tracking for Both Academics & Life Skills",
                  "Focus on 21st-Century Skills: Logic, Creativity, Communication"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-[#FBBF24] rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right Side Icons Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { Icon: Brain, title: "IQ+EQ", subtitle: "Balanced Development" },
                { Icon: Users, title: "1:6 Ratio", subtitle: "Personal Attention" },
                { Icon: Award, title: "15+ Modules", subtitle: "Comprehensive Skills" },
                { Icon: Star, title: "2-Pillar", subtitle: "Integrated Approach" },
              ].map(({ Icon, title, subtitle }, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#F58634]/30 transition-colors"
                >
                  <Icon className="mx-auto text-[#FBBF24] mb-3" size={32} />
                  <div className="text-xl font-bold text-white">{title}</div>
                  <div className="text-slate-300 text-sm">{subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- TWO PILLARS ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              Two-Pillar Framework
            </span>
          </motion.h3>
          <motion.p variants={fadeInUp} custom={1} className="text-slate-300 text-lg max-w-2xl mx-auto">
            The only center in Kolkata offering seamless integration of academic excellence and life skills mastery.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* Pillar 1: Academic Anchor */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <BookOpen className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-white">The Academic Anchor</h4>
                <p className="text-blue-300 text-sm">Structured Curriculum Support</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Structured curriculum support for Nursery to Grade 5 with our unique &quot;Mastery Binder&quot; system.
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Personalized Diagnostic Assessment & ILP",
                "Individualized Mastery Binders",
                "Real-World Application Learning",
                "Weekly Growth Tracking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["Mathematics", "English", "Environmental Science", "Guaranteed Improvement"].map((f, fi) => (
                <span
                  key={fi}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pillar 2: Holistic Horizon */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-orange-500/10 to-amber-600/5 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Globe className="text-orange-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-white">The Holistic Horizon</h4>
                <p className="text-orange-300 text-sm">Life Skills Development</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Comprehensive life skills development through 15+ specialized modules for overall character building.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Mic, label: "Public Speaking" },
                { icon: Calculator, label: "Mental Math" },
                { icon: Puzzle, label: "Logical Reasoning" },
                { icon: Code, label: "Tech Literacy" },
                { icon: Users, label: "People Skills" },
                { icon: Calendar, label: "Time Management" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon size={16} className="text-orange-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["UCMAS Math", "Debate & MUN", "Financial Literacy", "21st Century Skills"].map((f, fi) => (
                <span
                  key={fi}
                  className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------------- KEY DEVELOPMENT AREAS ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
            Comprehensive <span className="text-[#F58634]">Child Development</span> Focus
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logic Building & Creative Thinking", desc: "Puzzle solving, pattern recognition, innovation exercises" },
              { title: "Communication & Public Speaking", desc: "Debate, MUN, interview preparation, confident expression" },
              { title: "People & Management Skills", desc: "Teamwork, leadership, organizational abilities" },
              { title: "Time Management & Discipline", desc: "Planning, prioritization, responsibility building" },
              { title: "Tech & Financial Literacy", desc: "Coding basics, digital safety, money management" },
              { title: "IQ/EQ & Decision Making", desc: "Cognitive development, emotional intelligence, critical thinking" },
            ].map((area, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F58634]/30 transition-colors"
              >
                <h4 className="font-semibold text-white mb-3">{area.title}</h4>
                <p className="text-slate-300 text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- CTA ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl p-10 bg-gradient-to-r from-[#13112a] to-[#1f2140] border border-white/6 shadow-2xl text-center"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Child&apos;s Learning Journey?
          </motion.h3>

          <motion.p variants={fadeInUp} custom={1} className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join Kolkata&apos;s most comprehensive educational program where academic success 
            and life skills development go hand in hand.
          </motion.p>

          <motion.div variants={fadeInUp} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform">
              Book Free Diagnostic Session
              <ArrowRight size={16} />
            </button>

            <button className="inline-flex items-center gap-3 border border-white/10 px-8 py-4 rounded-xl text-slate-100 hover:bg-white/6 transition">
              Download Program Brochure (Coming Soon)
            </button>
          </motion.div>

          <motion.p variants={fadeInUp} custom={3} className="text-slate-400 text-sm mt-6">
            • Free Mental Math Workshop • Personalized Learning Plan • 15+ Skill Modules •
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}