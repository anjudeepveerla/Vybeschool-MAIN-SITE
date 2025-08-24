"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Mail,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react"

export default function Page() {
  const [activeLanguage, setActiveLanguage] = useState("telugu")
  const [activeSection, setActiveSection] = useState(1)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [showEmail, setShowEmail] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const discoverRef = useRef<HTMLDivElement>(null)
  const curriculumRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          entry.target.classList.remove("animate-out")
        } else {
          entry.target.classList.add("animate-out")
          entry.target.classList.remove("animate-in")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = [heroRef, discoverRef, curriculumRef, projectsRef, testimonialsRef, faqRef, footerRef]
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const languages = [
    { code: "telugu", name: "TELUGU", status: "LIVE", color: "#4285F4" },
    { code: "hindi", name: "HINDI", status: "SOON", color: "#FF9500" },
    { code: "tamil", name: "TAMIL", status: "SOON", color: "#34C759" },
    { code: "bengali", name: "BENGALI", status: "SOON", color: "#FF69B4" },
    { code: "marathi", name: "MARATHI", status: "SOON", color: "#FF6B35" },
    { code: "gujarati", name: "GUJARATI", status: "SOON", color: "#FFD60A" },
    { code: "kannada", name: "KANNADA", status: "SOON", color: "#FF8C69" },
    { code: "malayalam", name: "MALAYALAM", status: "SOON", color: "#40E0D0" },
  ]

  const discoverVideos = [
    { duration: "3:45", title: "WHAT IS VYBESCHOOL", image: "/tech-workers.png" },
    { duration: "5:12", title: "WHY WE STARTED VYBESCHOOL", image: "/ai-education-meeting.png" },
    { duration: "4:28", title: "WHY DO YOU JOIN VYBESCHOOL", image: "/diverse-students-learning.png" },
    { duration: "6:15", title: "WHAT YOU WILL GET VYBESCHOOL", image: "/ai-presentation-play.png" },
    { duration: "7:33", title: "WHAT IS AI - SUPPORT", image: "/futuristic-ai-blue-patterns.png" },
  ]

  const curriculumSections = [
    {
      id: 1,
      title: "INTRODUCTION TO AI",
      subtitle: "From Past to Present",
      color: "#FFD700",
      videos: [{ title: "Introduction to Artificial Intelligence – From Past to Present", videoNumber: 1 }],
    },
    {
      id: 2,
      title: "PROMPTING MASTERY",
      subtitle: "Making AI Work for You",
      color: "#4285F4",
      videos: [
        { title: "The Science of Prompts – Making AI Work for You", videoNumber: 1 },
        { title: "Foundations of Prompt Engineering – Talking to AI the Right Way", videoNumber: 2 },
        { title: "Prompting with ChatGPT – Techniques for Effective Conversations", videoNumber: 3 },
        { title: "Multi-AI Prompting – How to Work with ChatGPT, Bing, and Claude", videoNumber: 4 },
        { title: "Google Gemini Prompting – Techniques to Get Better Results", videoNumber: 5 },
        { title: "Prompt Engineering with Manus AI Agent – Guiding Autonomous Workflows", videoNumber: 6 },
        { title: "Prompting with Grok (xAI) – Exploring Elon Musk's AI Model", videoNumber: 7 },
      ],
    },
    {
      id: 3,
      title: "AI MADE EASY",
      subtitle: "How Anyone Can Use AI",
      color: "#FF4757",
      videos: [
        { title: "AI Made Easy – How Anyone Can Use Artificial Intelligence", videoNumber: 1 },
        { title: "Git & GitHub Basic to Intermediate", videoNumber: 2 },
        { title: "How to Clone a Repo | Introduction to GitHub Copilot | GitHub GPT's Tutorial", videoNumber: 3 },
      ],
    },
    {
      id: 4,
      title: "AI DEVELOPMENT",
      subtitle: "Frontend, Backend & Deployment",
      color: "#2ECC71",
      videos: [
        { title: "AI in UI/UX and Frontend – Tools, Trends, and Techniques", videoNumber: 1 },
        { title: "Updates on Vercel V0, Lovable, Bolt, Base44", videoNumber: 2 },
        { title: "AI Infrastructure – Backend Systems and Deployment Best Practices", videoNumber: 3 },
        { title: "Connecting Your Custom Domain to Your Project", videoNumber: 4 },
        { title: "Adding a Payment Gateway to Your Website", videoNumber: 5 },
        {
          title: "Edit Any Website Visually with Google Inspect — Easy Tricks That Work on Any Tech Stack",
          videoNumber: 6,
        },
      ],
    },
    {
      id: 5,
      title: "VOICE AI AGENTS",
      subtitle: "Technology, Tools, and Applications",
      color: "#9B59B6",
      videos: [{ title: "Voice AI Agents – Technology, Tools, and Applications", videoNumber: 1 }],
    },
    {
      id: 6,
      title: "AI SOCIAL MEDIA",
      subtitle: "From Content Ideas to Analytics",
      color: "#FF8C00",
      videos: [{ title: "AI-Powered Social Media – From Content Ideas to Analytics", videoNumber: 1 }],
    },
    {
      id: 7,
      title: "AI ADVERTISING",
      subtitle: "A Hands-On Approach",
      color: "#FF69B4",
      videos: [{ title: "Creating Effective AI Ads – A Hands-On Approach", videoNumber: 1 }],
    },
  ]

  const testimonials = [
    {
      text: "VybeSchool's AI Superstack course completely changed how I learn. The Telugu explanations made it so simple and relatable!",
      author: "Ananya",
      role: "Class 10",
      avatar: "/diverse-student-girl.png",
      platform: "twitter",
    },
    {
      text: "I built my first AI-powered website using this course. The step-by-step projects gave me real confidence.",
      author: "Rohit",
      role: "B.Tech CSE",
      avatar: "/engineering-student.png",
      platform: "threads",
    },
    {
      text: "Prompt engineering was a mystery before, but now I can talk to AI tools like a pro!",
      author: "Sindhu",
      role: "MBA Student",
      avatar: "/business-student.png",
      platform: "twitter",
    },
    {
      text: "The Voice AI Agents module helped me create a customer support bot for my family business. Amazing!",
      author: "Mahesh",
      role: "Entrepreneur",
      avatar: "/entrepreneur-man.png",
      platform: "threads",
    },
    {
      text: "Learning in my native Telugu made AI less scary and more exciting. I now help my juniors with AI projects.",
      author: "Kiran",
      role: "Intermediate Student",
      avatar: "/intermediate-student.png",
      platform: "twitter",
    },
    {
      text: "The practical projects, like integrating payment gateways and GitHub, made me feel industry-ready.",
      author: "Sravani",
      role: "MCA Student",
      avatar: "/computer-student-girl.png",
      platform: "threads",
    },
    {
      text: "I loved the AI Social Media section. It gave me ideas to automate my Instagram content.",
      author: "Pooja",
      role: "Content Creator",
      avatar: "/content-creator-girl.png",
      platform: "twitter",
    },
    {
      text: "Thanks to VybeSchool, I am now confident enough to apply AI in my college hackathons!",
      author: "Arjun",
      role: "Engineering Student",
      avatar: "/placeholder-l8j7q.png",
      platform: "threads",
    },
  ]

  const faqs = [
    {
      question: "I'M NOT FROM A TECH BACKGROUND... CAN I REALLY LEARN AI?",
      answer:
        "You don't need to know coding or have a tech degree. We start from zero and guide you step by step — so you'll feel confident even if you've never touched AI tools before.",
    },
    {
      question: "WILL I BE ABLE TO LEARN IN MY OWN LANGUAGE?",
      answer:
        "Yes! Our courses are in Telugu and Hindi, with more languages coming soon. We believe language should never be a barrier to learning future skills.",
    },
    {
      question: "HOW SOON WILL I START SEEING RESULTS?",
      answer:
        "You'll start creating real projects within your first week. Most learners finish the AI Superstack in 4–6 weeks — but you can go faster or slower, depending on your pace.",
    },
    {
      question: "WILL THIS ACTUALLY HELP ME GET CLIENTS OR A JOB?",
      answer:
        "Definitely. Every course is designed with real-world projects you can showcase in your portfolio. Many of our learners start freelancing or building side hustles while still learning.",
    },
    {
      question: "DO I GET PROOF THAT I'VE LEARNED SOMETHING VALUABLE?",
      answer:
        "Yes — you'll get a VybeSchool Certificate that you can add to your LinkedIn, resume, or freelance profile to stand out from the crowd.",
    },
    {
      question: "WHAT KIND OF PROJECTS WILL I ACTUALLY BUILD?",
      answer:
        "From AI chatbots to cinematic image generators, from automation workflows to content creation tools — you'll create projects you can actually use or sell.",
    },
    {
      question: "WHAT HAPPENS AFTER I FINISH THE COURSE? WILL I BE ON MY OWN?",
      answer:
        "Not at all. You'll still have access to our learner community, mentors, and updates. Think of VybeSchool as your long-term growth partner.",
    },
  ]

  const currentSection = curriculumSections.find((section) => section.id === activeSection)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      visible.push(testimonials[(currentTestimonial + i) % testimonials.length])
    }
    return visible
  }

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  return (
    <>
      <style jsx global>{`
        .scroll-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-section.animate-out {
          opacity: 0.3;
          transform: translateY(-20px);
        }
        
        .scroll-section:nth-child(even) {
          transform: translateX(-50px);
        }
        
        .scroll-section:nth-child(even).animate-in {
          transform: translateX(0);
        }
        
        .scroll-section:nth-child(even).animate-out {
          transform: translateX(20px);
        }
      `}</style>

      <main className="min-h-screen" style={{ backgroundColor: "#FFD700" }}>
        {/* Hero Section */}
        <div ref={heroRef} className="scroll-section px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Video Player - Mobile First */}
              <div className="mb-6">
                <div
                  className="aspect-video border-4 border-black shadow-[8px_8px_0_0_#000] relative overflow-hidden"
                  style={{ backgroundColor: "#2C3E50" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-20 h-20 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center hover:shadow-[2px_2px_0_0_#000] transition-all"
                      style={{ backgroundColor: "#FF4757" }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </button>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-black text-center text-black">WHAT'S NEW AT VYBESCHOOL TODAY</h3>
              </div>

              {/* Main Content */}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-black leading-none text-black mb-2">VYBE</h1>
                <h1
                  className="text-4xl font-black leading-none border-4 border-black shadow-[6px_6px_0_0_#000] px-4 py-2 inline-block mb-4"
                  style={{ backgroundColor: "#4285F4", color: "white" }}
                >
                  SCHOOL
                </h1>
                <p className="text-xl font-black mb-6 text-black">LEARN AI IN YOUR LANGUAGE</p>
              </div>

              {/* Language Availability Banner */}
              <div
                className="mb-6 p-4 border-4 border-black shadow-[4px_4px_0_0_#000] text-center"
                style={{ backgroundColor: "#000", color: "#FFD700" }}
              >
                <p className="text-lg font-black">CURRENTLY AVAILABLE IN TELUGU | SOON IN YOUR LANGUAGE</p>
              </div>

              {/* Mobile Language Buttons - All Languages */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="p-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all relative min-h-[60px]"
                    style={{ backgroundColor: lang.color }}
                    onClick={() => setActiveLanguage(lang.code)}
                  >
                    <div className="text-sm font-black text-white mb-1">{lang.name}</div>
                    <div
                      className="absolute bottom-2 right-2 px-2 py-1 text-xs font-black border-2 border-black rounded-full"
                      style={{
                        backgroundColor: lang.status === "LIVE" ? "#34C759" : "#666",
                        color: "white",
                      }}
                    >
                      {lang.status}
                    </div>
                  </button>
                ))}
              </div>

              {/* Start Learning Button - Mobile */}
              <div className="md:hidden">
                <Link href="/applied-ai">
                  <button
                    className="w-full px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    START LEARNING →
                  </button>
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Video Player */}
              <div className="order-2 md:order-1">
                <div
                  className="aspect-video border-4 border-black shadow-[8px_8px_0_0_#000] relative overflow-hidden"
                  style={{ backgroundColor: "#2C3E50" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center hover:shadow-[2px_2px_0_0_#000] transition-all"
                      style={{ backgroundColor: "#FF4757" }}
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                    </button>
                  </div>
                </div>
                <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-black text-center text-black">
                  WHAT'S NEW AT VYBESCHOOL TODAY
                </h3>
              </div>

              {/* Main Content */}
              <div className="order-1 md:order-2">
                <div className="mb-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none text-black mb-2">VYBE</h1>
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-none border-4 border-black shadow-[6px_6px_0_0_#000] px-4 py-2 inline-block"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    SCHOOL
                  </h1>
                  <p className="text-xl md:text-2xl font-black mt-4 text-black">LEARN AI IN YOUR LANGUAGE</p>
                </div>

                {/* Language Availability Banner */}
                <div
                  className="mb-6 p-4 border-4 border-black shadow-[4px_4px_0_0_#000] text-center"
                  style={{ backgroundColor: "#000", color: "#FFD700" }}
                >
                  <p className="text-lg md:text-xl font-black">CURRENTLY AVAILABLE IN TELUGU | SOON IN YOUR LANGUAGE</p>
                </div>

                {/* Language Grid - Desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="p-3 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all relative"
                      style={{ backgroundColor: lang.color }}
                      onClick={() => setActiveLanguage(lang.code)}
                    >
                      <div className="text-sm md:text-base font-black text-black">{lang.name}</div>
                      <div
                        className="absolute top-1 right-1 px-1 py-0.5 text-xs font-black border border-black rounded-sm"
                        style={{
                          backgroundColor: lang.status === "LIVE" ? "#34C759" : "#FF9500",
                          color: "white",
                          fontSize: "10px",
                        }}
                      >
                        {lang.status}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Start Learning Button */}
                <Link href="/applied-ai">
                  <button
                    className="w-full md:w-auto px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    START LEARNING →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Section */}
        <section
          ref={discoverRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "white" }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-6"
              style={{ backgroundColor: "#9B59B6", color: "white" }}
            >
              DISCOVER VYBESCHOOL
            </h2>
            <p className="text-xl md:text-2xl font-black text-black">
              UNDERSTAND WHY THOUSANDS CHOOSE US FOR AI LEARNING
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {discoverVideos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative border-4 border-black shadow-[6px_6px_0_0_#000] group-hover:shadow-[3px_3px_0_0_#000] transition-all overflow-hidden">
                  <img
                    src={video.image || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  {/* Duration Badge */}
                  <div
                    className="absolute bottom-2 right-2 px-2 py-1 text-sm font-black border-2 border-black"
                    style={{ backgroundColor: "#000", color: "white" }}
                  >
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full border-3 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center"
                      style={{ backgroundColor: "#FF4757" }}
                    >
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-sm md:text-base font-black text-black text-center">{video.title}</h3>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div
            className="text-center p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000]"
            style={{ backgroundColor: "#FFD700" }}
          >
            <h3 className="text-2xl md:text-4xl font-black text-black mb-4">READY TO TRANSFORM YOUR FUTURE?</h3>
            <p className="text-lg md:text-xl font-bold text-black mb-8">
              Join thousands who are already mastering AI in their native language
            </p>
            <Link href="/applied-ai">
              <button
                className="px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
                style={{ backgroundColor: "#4285F4", color: "white" }}
              >
                START YOUR AI JOURNEY
              </button>
            </Link>
          </div>
        </section>

        {/* Curriculum Section */}
        <section
          ref={curriculumRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          {/* Course Overview Header */}
          <div className="max-w-7xl mx-auto">
            {/* Course Overview Header */}
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-6"
                style={{ backgroundColor: "#000", color: "white" }}
              >
                AI SUPERSTACK (TELUGU)
              </h2>
              <p className="text-lg md:text-xl font-bold text-black max-w-4xl mx-auto">
                Master Artificial Intelligence in your native Telugu with a comprehensive, hands-on, project-driven
                course designed for learners of all backgrounds.
              </p>
            </div>

            {/* Section Buttons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {curriculumSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all text-left rounded-lg ${
                    activeSection === section.id ? "transform scale-105" : ""
                  }`}
                  style={{
                    backgroundColor: activeSection === section.id ? section.color : "#E5E5E5",
                    color: activeSection === section.id ? (section.id === 1 ? "#000" : "#fff") : "#000",
                  }}
                >
                  <div className="text-xs md:text-sm font-black mb-1">SECTION {section.id}</div>
                  <div className="text-sm md:text-base font-black">{section.title}</div>
                </button>
              ))}
            </div>

            {/* Active Section Content */}
            {currentSection && (
              <div
                className="p-6 md:p-8 border-4 border-black shadow-[8px_8px_0_0_#000] mb-12 rounded-xl"
                style={{ backgroundColor: currentSection.color }}
              >
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl md:text-4xl font-black mb-2"
                    style={{ color: currentSection.id === 1 ? "#000" : "#fff" }}
                  >
                    SECTION {currentSection.id}: {currentSection.title}
                  </h3>
                  <p
                    className="text-lg md:text-xl font-bold"
                    style={{ color: currentSection.id === 1 ? "#000" : "#fff" }}
                  >
                    {currentSection.subtitle}
                  </p>
                </div>

                {/* Videos List */}
                <div className="space-y-4">
                  {currentSection.videos.map((video, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer rounded-lg"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full border-3 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#FF4757" }}
                      >
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-black text-black">{video.title}</h4>
                      </div>
                      <div
                        className="px-3 py-1 text-sm font-black border-2 border-black"
                        style={{ backgroundColor: "#000", color: "white" }}
                      >
                        VIDEO {video.videoNumber}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <Link href="/applied-ai">
                <button
                  className="px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all flex items-center justify-center gap-2 mx-auto"
                  style={{ backgroundColor: "#9B59B6", color: "white" }}
                >
                  VIEW MORE COURSES →
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section
          ref={projectsRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-6"
              style={{ backgroundColor: "#2ECC71", color: "white" }}
            >
              PROJECTS BY VYBESCHOOL MATES
            </h2>
            <p className="text-xl md:text-2xl font-black text-black mb-12">
              SEE WHAT OUR STUDENTS HAVE BUILT USING THE AI SUPERSTACK
            </p>

            <a
              href="https://github.com/vybeschool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
              style={{ backgroundColor: "#000", color: "white" }}
            >
              VIEW ALL PROJECTS ON GITHUB →
            </a>
          </div>
        </section>

        <section
          ref={testimonialsRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "white" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-6"
                style={{ backgroundColor: "#2ECC71", color: "white" }}
              >
                STUDENT SUCCESS STORIES
              </h2>
              <p className="text-xl md:text-2xl font-black text-black">
                HEAR FROM OUR SATISFIED STUDENTS WHO TRANSFORMED THEIR CAREERS WITH AI
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative">
              <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 hidden md:block">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={index} className="p-6 border-4 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-lg">
                    {/* Platform Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className="w-8 h-8 border-2 border-black flex items-center justify-center text-white font-black text-sm"
                        style={{ backgroundColor: "#000" }}
                      >
                        {testimonial.platform === "twitter" ? "𝕏" : "T"}
                      </div>
                      {testimonial.platform === "threads" && (
                        <div
                          className="px-2 py-1 text-xs font-black border-2 border-black"
                          style={{ backgroundColor: "#9B59B6", color: "white" }}
                        >
                          THREADS
                        </div>
                      )}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm font-bold text-black mb-4 leading-relaxed">{testimonial.text}</p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full border-2 border-black"
                      />
                      <div>
                        <div className="text-sm font-black text-black">{testimonial.author}</div>
                        <div className="text-xs font-bold text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full max-w-sm p-6 border-4 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-lg snap-center"
                    >
                      {/* Platform Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className="w-8 h-8 border-2 border-black flex items-center justify-center text-white font-black text-sm"
                          style={{ backgroundColor: "#000" }}
                        >
                          {testimonial.platform === "twitter" ? "𝕏" : "T"}
                        </div>
                        {testimonial.platform === "threads" && (
                          <div
                            className="px-2 py-1 text-xs font-black border-2 border-black"
                            style={{ backgroundColor: "#9B59B6", color: "white" }}
                          >
                            THREADS
                          </div>
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-sm font-bold text-black mb-4 leading-relaxed">{testimonial.text}</p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full border-2 border-black"
                        />
                        <div>
                          <div className="text-sm font-black text-black">{testimonial.author}</div>
                          <div className="text-xs font-bold text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-4 gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full border border-black"
                      style={{ backgroundColor: index === currentTestimonial ? "#000" : "#E5E5E5" }}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Desktop Only */}
              <button
                onClick={prevTestimonial}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all flex items-center justify-center"
                style={{ backgroundColor: "#FFD700" }}
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all flex items-center justify-center"
                style={{ backgroundColor: "#FFD700" }}
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
                style={{ backgroundColor: "#4285F4", color: "white" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-4 border-black shadow-[6px_6px_0_0_#000] bg-white rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <h3 className="text-lg md:text-xl font-black text-black pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-6 h-6 text-black transition-transform ${activeFAQ === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-6 border-t-4 border-black">
                      <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer
          ref={footerRef}
          className="scroll-section px-4 md:px-6 py-12 md:py-16"
          style={{ backgroundColor: "#000" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
              {/* Mission & Vision Video */}
              <div>
                <div
                  className="aspect-video border-4 shadow-[8px_8px_0_0_#FFD700] relative overflow-hidden mb-4"
                  style={{ backgroundColor: "#2C3E50", borderColor: "#FFD700" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 shadow-[4px_4px_0_0_#FFD700] flex items-center justify-center hover:shadow-[2px_2px_0_0_#FFD700] transition-all"
                      style={{ backgroundColor: "#FF4757", borderColor: "#FFD700" }}
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-center" style={{ color: "#FFD700" }}>
                  VYBESCHOOL MISSION & VISION
                </h3>
              </div>

              {/* Get in Touch */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-6" style={{ color: "#FFD700" }}>
                  GET IN TOUCH
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/916301962520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-4 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all flex items-center justify-center gap-3 cursor-pointer"
                    style={{ backgroundColor: "#25D366", color: "white" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WHATSAPP: +91 63019 62520
                  </a>
                  <button
                    onClick={() => setShowEmail(!showEmail)}
                    className="w-full p-4 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all flex items-center justify-center gap-3 cursor-pointer hover:scale-105 transform"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    <Mail className="w-5 h-5" />
                    {showEmail ? "vybeschool.com@gmail.com" : "CONTACT US VIA EMAIL"}
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-4 mb-8" style={{ borderColor: "#FFD700" }}></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo and Tagline */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl md:text-3xl font-black" style={{ color: "#FFD700" }}>
                    VYBE
                  </span>
                  <span
                    className="ml-1 px-3 py-1 text-2xl md:text-3xl font-black border-4 border-black shadow-[4px_4px_0_0_#000]"
                    style={{ backgroundColor: "#4285F4", color: "white" }}
                  >
                    SCHOOL
                  </span>
                </div>
                <p className="text-lg font-bold" style={{ color: "#FFD700" }}>
                  Learn AI in Your Language
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@Vybeschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#FF0000" }}
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/vybeschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#E4405F" }}
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/vybeschool/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#0077B5" }}
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-8 border-t-4" style={{ borderColor: "#FFD700" }}>
              <p className="text-sm md:text-base font-bold text-gray-400">
                © 2024 VybeSchool. All rights reserved. Empowering India with AI Education.
              </p>
            </div>
          </div>
        </footer>

        {/* Mobile Navigation */}
        <div className="hidden md:hidden fixed bottom-0 left-0 right-0 p-4" style={{ backgroundColor: "#FFD700" }}>
          <div className="flex justify-center gap-2 text-sm font-bold">
            <a href="/blog" className="px-3 py-2 border-2 border-black bg-white rounded-lg">
              BLOG
            </a>
            <a href="/team" className="px-3 py-2 border-2 border-black bg-white rounded-lg">
              TEAM
            </a>
            <a href="/support" className="px-3 py-2 border-2 border-black bg-white rounded-lg">
              SUPPORT
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
