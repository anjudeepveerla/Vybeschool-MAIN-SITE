"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const articles = {
  "whats-new": [
    {
      id: "advanced-prompt-engineering",
      title: "New AI Course Launch: Advanced Prompt Engineering",
      date: "1/15/2024",
      author: "VybeSchool Team",
      preview: "We're excited to announce our latest course focusing on advanced prompt engineering techniques...",
      image: "/futuristic-ai-blue-patterns.png",
      category: "whats-new",
    },
    {
      id: "student-milestone",
      title: "VybeSchool Reaches 10,000+ Students Milestone",
      date: "1/10/2024",
      author: "VybeSchool Team",
      preview: "A celebration of our growing community and the amazing projects our students have built...",
      image: "/ai-education-meeting.png",
      category: "whats-new",
    },
  ],
  projects: [
    {
      id: "ai-chatbot-project",
      title: "Building Your First AI Chatbot: A Complete Guide",
      date: "1/12/2024",
      author: "VybeSchool Team",
      preview: "Learn how to create an intelligent chatbot using modern AI techniques and deploy it to production...",
      image: "/tech-workers.png",
      category: "projects",
    },
    {
      id: "image-generator-project",
      title: "Creating Cinematic AI Image Generators",
      date: "1/8/2024",
      author: "VybeSchool Team",
      preview: "Master the art of generating stunning, cinematic images using AI tools and custom prompts...",
      image: "/futuristic-ai-blue-patterns.png",
      category: "projects",
    },
  ],
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<"whats-new" | "projects">("whats-new")

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-500 text-white px-8 py-4 text-2xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              BLOG & PROJECTS
            </div>
          </div>
          <p className="text-center text-lg font-semibold max-w-4xl mx-auto">
            STAY UPDATED WITH THE LATEST FROM VYBESCHOOL This is a demo page exciting updates and content will be
            uploaded here very soon.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation - Mobile optimized */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-4">NAVIGATION</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("whats-new")}
                  className={`w-full px-4 py-3 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    activeTab === "whats-new" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  WHAT'S NEW
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`w-full px-4 py-3 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    activeTab === "projects" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  PROJECTS
                </button>
              </div>
            </div>
          </div>

          {/* Articles Grid - Mobile optimized */}
          <div className="flex-1">
            <div className="space-y-6">
              {articles[activeTab].map((article) => (
                <div
                  key={article.id}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Article Image - Mobile optimized */}
                    <div className="w-full md:w-80 h-48 md:h-64 relative flex-shrink-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Article Content - Mobile optimized */}
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                      <div>
                        {/* Meta Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border border-gray-400 rounded"></div>
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                            <span>{article.author}</span>
                          </div>
                        </div>

                        {/* Title - Mobile optimized */}
                        <h2 className="text-xl md:text-2xl font-bold mb-3 text-black leading-tight">{article.title}</h2>

                        {/* Preview - Mobile optimized */}
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{article.preview}</p>
                      </div>

                      {/* Read More Button - Mobile optimized */}
                      <div>
                        <Link
                          href={`/blog/${article.id}`}
                          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 font-bold text-sm md:text-base border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                          READ MORE
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
