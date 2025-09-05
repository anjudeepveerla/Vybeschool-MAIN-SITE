"use client"

import { useState } from "react"
import Link from "next/link"

export default function AppliedAIPage() {
  const [activeTab, setActiveTab] = useState("courses")

  const courses = [
    {
      id: 1,
      title: "Flux AI: Train Your Face to Create Cinematic Images – Complete Guide",
      subtitle: "Master AI-Powered Portrait Creation",
      description:
        "Learn how to train Flux AI with your own face to generate stunning, cinematic portraits and professional headshots using advanced AI technology.",
      image: "/ai-face-training-portraits.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "AI Superstack (Telugu)",
      subtitle: "The Ultimate Hands-On AI Mastery Program",
      description:
        "Master Artificial Intelligence in your native Telugu through our comprehensive, project-driven AI Superstack course. Learn AI fundamentals, prompt engineering, top AI tools, website creation, voice agents, and AI-powered content marketing—all without writing a single line of code.",
      image: "/ai-superstack-telugu-programming.png",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "AI Engineer Bootcamp",
      subtitle: "Get the job-ready skills to land high-impact AI roles.",
      description:
        "Become job‑ready in Python, NLP, LLMs, vector databases, and app development. Master OpenAI, LangChain, Pinecone, Streamlit, and build a standout portfolio.",
      image: "/aiengineer.jpeg",
      color: "from-blue-600 to-indigo-600",
      moreHref: "/ai-engineer",
      startHref: "https://chat.whatsapp.com/GW50XlYydFGDleL2dxcNSQ?mode=ems_copy_t",
    },
  ]

  const dynamites = [
    {
      id: 1,
      title: "ChatGPT Mastery: Complete Beginners to Advanced",
      description: "Unlock the full potential of ChatGPT for personal and professional use.",
      tags: ["ChatGPT", "Productivity", "AI", "AI Tools"],
      duration: "55 min",
      category: "AI Tools",
      image: "/chatgpt-tutorial-interface.png",
    },
    {
      id: 2,
      title: "Base44: Complete Web Development Mastery",
      description: "Build and deploy full-stack web applications using the Base44 platform.",
      tags: ["Web Dev", "Base44", "No-Code", "Development"],
      duration: "60 min",
      category: "Development",
      image: "/web-development-coding-screen.png",
    },
    {
      id: 3,
      title: "Presentations with AI Mastery",
      description: "Create stunning, professional presentations in minutes with AI-powered tools.",
      tags: ["Presentations", "AI", "Design", "Creative"],
      duration: "40 min",
      category: "Creative",
      image: "/ai-presentation-tools.png",
    },
    {
      id: 4,
      title: "Vercel V0 Quick Start",
      description: "Build and deploy React components instantly with AI-powered Vercel V0.",
      tags: ["React", "Deployment", "AI", "Development"],
      duration: "30 min",
      category: "Development",
      image: "/vercel-v0-react-development.png",
    },
    {
      id: 5,
      title: "Lovable App Builder",
      description: "Create full-stack applications using natural language with Lovable.",
      tags: ["No-Code", "Full-Stack", "AI", "Development"],
      duration: "45 min",
      category: "Development",
      image: "/no-code-app-builder.png",
    },
    {
      id: 6,
      title: "Claude Prompt Mastery",
      description: "Advanced prompting techniques for better Claude AI responses.",
      tags: ["Prompting", "Claude", "Productivity", "AI Tools"],
      duration: "25 min",
      category: "AI Tools",
      image: "/claude-ai-prompting-interface.png",
    },
    {
      id: 7,
      title: "Cursor AI Coding",
      description: "Boost coding productivity with AI-powered code completion.",
      tags: ["Coding", "AI", "IDE", "Development"],
      duration: "40 min",
      category: "Development",
      image: "/ai-coding-ide.png",
    },
    {
      id: 8,
      title: "Midjourney Art Generation",
      description: "Create stunning artwork and images with Midjourney AI.",
      tags: ["Art", "Images", "Creative"],
      duration: "35 min",
      category: "Creative",
      image: "/midjourney-ai-art.png",
    },
    {
      id: 9,
      title: "GitHub Copilot Setup",
      description: "Configure and optimize GitHub Copilot for maximum efficiency.",
      tags: ["GitHub", "AI", "Coding", "Development"],
      duration: "20 min",
      category: "Development",
      image: "/github-copilot-setup.png",
    },
    {
      id: 10,
      title: "ChatGPT API Integration",
      description: "Integrate ChatGPT into your applications with API calls.",
      tags: ["API", "ChatGPT", "Integration", "AI Tools"],
      duration: "50 min",
      category: "AI Tools",
      image: "/chatgpt-api-integration-code.png",
    },
    {
      id: 11,
      title: "Notion AI Workflows",
      description: "Automate your productivity with Notion AI features.",
      tags: ["Notion", "Automation", "Workflow", "Productivity"],
      duration: "30 min",
      category: "Productivity",
      image: "/notion-ai-workflow.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-8">
            APPLIED AI COURSES
          </div>
          <p className="text-xl font-semibold text-black mb-12">
            MASTER AI WITH HANDS-ON PROJECTS AND REAL-WORLD APPLICATIONS
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-8 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all ${
                activeTab === "courses" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              COURSES
            </button>
            <button
              onClick={() => setActiveTab("dynamites")}
              className={`px-8 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all ${
                activeTab === "dynamites" ? "bg-yellow-400 text-black" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              DYNAMITES
            </button>
          </div>

          {activeTab === "dynamites" && (
            <div className="bg-yellow-400 text-black px-8 py-6 text-2xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg mb-16">
              <div className="text-3xl mb-2">ALL OF WORLD'S AI IS HERE IN DYNAMITES</div>
              <div className="text-lg">Quick AI tools and courses under 1 hour [RELEASING SOON]</div>
            </div>
          )}
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col"
              >
                <div className={`h-72 md:h-64 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.src = "/ai-tools-hero.png"
                    }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-black mb-2">{course.title}</h3>
                  <h4 className="text-base font-bold text-black mb-3">{course.subtitle}</h4>

                  <div className="flex flex-col gap-2 mt-auto">
                    <button
                      onClick={() => window.open((course as any).startHref ? (course as any).startHref : "https://vybeschool.akamai.net.in/", "_blank")}
                      className="bg-blue-500 text-white px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      START LEARNING
                    </button>
                    <Link href={(course as any).moreHref ? (course as any).moreHref : `/applied-ai/course/${course.id}`}>
                      <button className="bg-green-500 text-white px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-green-600 transition-colors w-full">
                        VIEW MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "dynamites" && (
          <div>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search dynamites..."
                  className="w-full px-4 py-3 border-4 border-black rounded-lg font-semibold text-black placeholder-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border-4 border-black rounded-lg font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <option>All Categories</option>
                  <option>AI Tools</option>
                  <option>Development</option>
                  <option>Creative</option>
                  <option>Productivity</option>
                </select>
                <select className="px-4 py-3 border-4 border-black rounded-lg font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <option>Popularity</option>
                  <option>Duration</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Dynamites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dynamites.map((dynamite) => (
                <div
                  key={dynamite.id}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="h-48 relative">
                    <img
                      src={dynamite.image || "/placeholder.svg"}
                      alt={dynamite.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{dynamite.title}</h3>
                    <p className="text-black font-semibold mb-4 text-sm line-clamp-2 flex-grow">
                      {dynamite.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dynamite.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 text-black text-xs font-bold rounded border-2 border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Duration and Category */}
                    <div className="flex justify-between items-center mb-4 text-sm font-bold text-black">
                      <span>{dynamite.category}</span>
                      <span>{dynamite.duration}</span>
                    </div>

                    {/* Access Button - aligned at bottom */}
                    <button className="bg-yellow-400 text-black px-4 py-2 font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-colors mt-auto">
                      ACCESS NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Request Course Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open("https://forms.gle/UvrkziuNYx4sQHE97", "_blank")}
            className="bg-yellow-400 text-black px-8 py-4 font-bold text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
          >
            REQUEST A COURSE
          </button>
        </div>
      </div>
    </div>
  )
}
