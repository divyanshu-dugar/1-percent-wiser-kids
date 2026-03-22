'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Brain, BookOpen, Target, ArrowRight, Star, Users, Clock, Award, Sparkles, Zap, Heart, Calculator, Mic, Puzzle, Code, Globe, Calendar, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: "The Academic Anchor",
      subtitle: "Structured Curriculum Support",
      description: "Personalized Mastery Binder system for guaranteed academic improvement from Nursery to Grade 5.",
      fullDescription: "Our Academic Anchor program provides comprehensive curriculum support with a unique 'Mastery Binder' system. Each child receives a personalized learning plan based on diagnostic assessment, focusing on their specific strengths and needs. We combine concept mastery with real-world applications to ensure deep understanding and academic excellence.",
      image: "/programs/academic-anchor.jpg",
      age: "Nursery - Grade 5",
      duration: "Customized Schedule",
      level: "Personalized Learning Path",
      students: "500+ Active Students",
      benefits: ["Personalized Mastery Binders", "Weekly Growth Tracking", "Real-World Applications", "Guaranteed Improvement", "Individual Learning Plans", "Concept Mastery"],
      category: "academic",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/20",
      stats: [
        { value: "98%", label: "Academic Improvement" },
        { value: "1:6", label: "Student Ratio" },
        { value: "100%", label: "Parent Satisfaction" }
      ],
      modules: ["Mathematics Mastery", "English Excellence", "Science Exploration", "Weekly Assessments"]
    },
    {
      id: 2,
      title: "The Holistic Horizon",
      subtitle: "Life Skills & Overall Development",
      description: "Comprehensive 15+ module program building essential 21st-century skills and character development.",
      fullDescription: "The Holistic Horizon is our flagship life skills program featuring 15+ specialized modules designed to develop the whole child. From public speaking and logical reasoning to financial literacy and emotional intelligence, we build future-ready individuals who excel both academically and in life. Our project-based approach ensures practical application of all learned skills.",
      image: "/programs/holistic-horizon.jpg",
      age: "5-15 years",
      duration: "Modular Programs",
      level: "Beginner to Advanced",
      students: "600+ Developing Minds",
      benefits: ["15+ Skill Modules", "Project-Based Learning", "Confidence Building", "Future-Ready Skills", "Emotional Intelligence", "Leadership Development"],
      category: "holistic",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-amber-600/5",
      borderColor: "border-orange-500/20",
      stats: [
        { value: "15+", label: "Skill Modules" },
        { value: "3x", label: "Confidence Growth" },
        { value: "95%", label: "Skill Application" }
      ],
      modules: ["Public Speaking & Debate", "Mental Math & Logic", "Robotics & Coding", "Financial Literacy", "Time Management", "Leadership Skills"]
    }
  ];

  const skillModules = [
    { icon: Mic, title: "Language & Expression Lab", description: "Public speaking, debate, and confident communication" },
    { icon: Calculator, title: "Logic & Math Gym", description: "Mental math, logical reasoning, and critical thinking" },
    { icon: Code, title: "Future Skills Studio", description: "Coding, tech literacy, and digital creativity" },
    { icon: Users, title: "People Skills Academy", description: "Leadership, teamwork, and social intelligence" },
    { icon: Calendar, title: "Organization Masters", description: "Time management, planning, and discipline" },
    { icon: Globe, title: "Young Explorer's Club", description: "GK, philosophy, and global awareness" }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  // Animation variants from homepage
  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 text-white min-h-screen overflow-x-hidden pt-20 pb-20 relative">
      {/* Decorative background layers - matching homepage */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-linear-to-r from-[#3f42a5] to-[#5d60d6] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-linear-to-r from-[#F58634] to-[#ff9d55] opacity-12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-black/10 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Enhanced Header */}
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
              <span className="text-sm text-slate-300">Kolkata's Premier Whole-Child Development</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white/95 mb-6">
            Our{" "}
            <span className="bg-linear-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              Two-Pillar Framework
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} custom={2} className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover our unique integrated approach that guarantees academic success while building essential 
            21st-century skills through personalized learning and comprehensive development programs.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-2 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'Both Pillars', icon: <Target size={16} /> },
              { id: 'academic', label: 'Academic Anchor', icon: <BookOpen size={16} /> },
              { id: 'holistic', label: 'Holistic Horizon', icon: <Brain size={16} /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-linear-to-r from-[#F58634] to-[#FBBF24] text-slate-900 shadow-lg' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Programs Grid */}
        <motion.div 
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>

        {/* Skill Modules Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="text-[#F58634]">Skill Development</span> Modules
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our Holistic Horizon program includes 15+ specialized modules designed to build essential life skills for the 21st century.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillModules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#F58634]/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-linear-to-r from-[#F58634] to-[#FBBF24] rounded-xl group-hover:scale-110 transition-transform">
                    <module.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{module.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-3xl p-10 bg-linear-to-r from-[#13112a] to-[#1f2140] border border-white/6 shadow-2xl text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#3f42a5]/20 to-[#F58634]/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-[#F58634]/10 to-[#3f42a5]/20 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience the <span className="text-[#FBBF24]">1% Wiser</span> Difference?
              </motion.h2>
              <motion.p variants={fadeInUp} custom={1} className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Join Kolkata's most comprehensive educational program where academic success 
                and life skills development go hand in hand. Book your free diagnostic session today.
              </motion.p>
              
              <motion.div variants={fadeInUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-linear-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  <Sparkles size={20} />
                  Book Free Diagnostic Session
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 border border-white/10 px-8 py-4 rounded-xl text-slate-100 hover:bg-white/6 transition"
                >
                  <Zap size={20} />
                  Download Program Guide (Coming Soon)
                </motion.button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span>4.9/5 Parent Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users size={16} />
                  <span>500+ Active Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Award size={16} />
                  <span>2-Pillar Integrated Approach</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProgramCard({ program }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{ y: -8 }}
      className={`group relative ${program.bgColor} rounded-2xl border ${program.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-white/10 to-transparent rounded-bl-3xl" />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        
        {/* Icon Badge */}
        <div className={`absolute top-4 right-4 bg-linear-to-r ${program.color} text-white p-3 rounded-xl shadow-lg`}>
          {program.icon}
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {program.category === 'academic' ? 'Academic Excellence' : 'Life Skills Development'}
        </div>

        {/* Subtitle */}
        <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
          {program.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-white mb-2">
          {program.title}
        </h3>
        <p className="text-slate-300 mb-4 leading-relaxed">
          {isExpanded ? program.fullDescription : program.description}
        </p>

        {/* Program Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-white/5 rounded-xl border border-white/10">
          {program.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-bold text-lg bg-linear-to-r ${program.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Program Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Users size={16} className="text-blue-400" />
            <span><strong>Ages:</strong> {program.age}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Clock size={16} className="text-orange-400" />
            <span><strong>Duration:</strong> {program.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Award size={16} className="text-yellow-400" />
            <span><strong>Level:</strong> {program.level}</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Sparkles size={16} className="text-[#F58634]" />
            Key Features:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {program.benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                <Check size={14} className={`text-transparent bg-linear-to-r ${program.color} bg-clip-text`} />
                <span className="text-xs">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modules (for Holistic Horizon) */}
        {program.modules && program.modules.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2 text-sm">Includes Modules:</h4>
            <div className="flex flex-wrap gap-2">
              {program.modules.slice(0, 3).map((module, index) => (
                <span key={index} className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full border border-white/10">
                  {module}
                </span>
              ))}
              {program.modules.length > 3 && (
                <span className="px-2 py-1 bg-white/10 text-slate-400 text-xs rounded-full">
                  +{program.modules.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#F58634] hover:text-[#FBBF24] font-medium text-sm flex items-center gap-2 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <ArrowRight size={14} className={isExpanded ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 bg-linear-to-r ${program.color} text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
          >
            <Heart size={14} />
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}