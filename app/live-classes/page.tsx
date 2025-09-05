"use client"

import Link from "next/link"
import { useState } from "react"

export default function LiveClassesPage() {
  const [showAIEngineerModal, setShowAIEngineerModal] = useState(false)
  const [showAISuperstackModal, setShowAISuperstackModal] = useState(false)
  return (
    <main className="min-h-screen px-4 md:px-6 py-10 md:py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
            style={{ backgroundColor: "#FFD700", color: "#000" }}
          >
            Teaching AI with Online Classes
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Engineering Card */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-2">AI Engineering</h2>
            <div className="space-y-2 text-black font-bold mb-4">
              <p>Duration: 40 days</p>
              <p>Price: ₹12,000</p>
              <p>Timeline: Batch starts in 14 days</p>
            </div>
            
            {/* What is AI Engineer Button */}
            <button
              onClick={() => setShowAIEngineerModal(true)}
              className="w-full mb-3 px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
              style={{ backgroundColor: "#4285F4", color: "white" }}
            >
              WHAT IS AI ENGINEER? →
            </button>
            
            {/* Know More Button */}
            <Link href="/ai-engineer">
              <button
                className="w-full mb-3 px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#000", color: "#FFD700" }}
              >
                KNOW MORE →
              </button>
            </Link>
            
            {/* I'm Interested Button */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScDsiYKC22ekSQL-FmsGZV1-EK3Kc7ApcTgiJSzFaM_jjk8gQ/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                I'M INTERESTED →
              </button>
            </Link>
          </div>

          {/* AI Superstack Card */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-2">AI Superstack</h2>
            <div className="space-y-2 text-black font-bold mb-4">
              <p>Duration: 14 days</p>
              <p>Price: ₹5,000</p>
              <p>Languages Available: Telugu | Hindi | English</p>
            </div>
            
            {/* What is AI Superstack Button */}
            <button
              onClick={() => setShowAISuperstackModal(true)}
              className="w-full mb-3 px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
              style={{ backgroundColor: "#9B59B6", color: "white" }}
            >
              WHAT IS AI SUPERSTACK? →
            </button>
            
            {/* Know More Button */}
            <Link href="/applied-ai">
              <button
                className="w-full mb-3 px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#000", color: "#FFD700" }}
              >
                KNOW MORE →
              </button>
            </Link>
            
            {/* I'm Interested Button */}
            <Link
              href="https://chat.whatsapp.com/Lor0KwCmZQf1q6MkJQDVZg?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                I'M INTERESTED →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* AI Engineer Modal */}
      {showAIEngineerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-black text-black">What is an AI Engineer?</h2>
                <button
                  onClick={() => setShowAIEngineerModal(false)}
                  className="text-2xl font-black text-black hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 text-black">
                <p className="font-bold leading-relaxed">
                  An AI Engineer is not just someone who uses AI tools or creates websites or voice bots—that's a common misconception.
                </p>
                
                <p className="font-bold leading-relaxed">
                  An AI Engineer is a professional who can develop, deploy, and scale intelligent systems using:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>Programming & Software Development</li>
                  <li>Machine Learning & Deep Learning</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>AI Pipelines with LLMs (Large Language Models)</li>
                  <li>Data Science & Vector Databases</li>
                </ul>
                
                <p className="font-bold leading-relaxed">
                  They don't just experiment—they build real-world AI systems that can think, learn, and solve complex problems automatically. They create AI pipelines, multimodal systems, and scalable applications that companies pay lakhs for.
                </p>
                
                <h3 className="text-xl font-black text-black mt-6 mb-3">What You Become After Joining VybeSchool AI Engineering Bootcamp</h3>
                
                <p className="font-bold leading-relaxed">
                  In just 45 days, you go from zero knowledge to being a job-ready AI Engineer. After this bootcamp, you can become:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>AI Engineer / AI Developer – Build and deploy AI systems from scratch</li>
                  <li>LLM Engineer – Work with large language models to create intelligent applications</li>
                  <li>Generative AI Engineer – Develop AI that can create content, summaries, and even business materials</li>
                  <li>NLP Engineer – Solve real-world language understanding problems</li>
                  <li>AI Product Developer – Build AI-powered products and solutions</li>
                  <li>Data Engineer (AI-focused) – Handle and optimize data workflows for AI systems</li>
                </ul>
                
                <p className="font-bold leading-relaxed">
                  You'll master Python, NLP, LLMs, vector databases, prompt engineering, AI workflows, and real deployment tools. You'll leave with projects, a portfolio, and skills that top companies are desperately looking for.
                </p>
                
                <h3 className="text-xl font-black text-black mt-6 mb-3">Why You Must Join – The Fear of Missing Out</h3>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>AI Engineers earn lakhs in India; the demand is skyrocketing, but the talent is scarce.</li>
                  <li>This 45-day program gives you access to expert guidance at a fraction of market cost—95% cheaper than industry programs.</li>
                  <li>Seats are limited – if you delay, someone else will take the opportunity to enter this high-paying field before you.</li>
                  <li>Skip this, and you'll keep wasting time on tutorials or tools without truly becoming an AI Engineer. You'll still be watching AI trends while others build and deploy real systems.</li>
                  <li>Real-world projects, AI pipelines, and mentorship are included, so you leave ready to work on high-impact roles immediately.</li>
                </ul>
                
                <p className="font-bold leading-relaxed mt-4">
                  In short: If you don't join now, you won't become a real AI Engineer, and the chance to enter the AI career boom at the right moment will pass.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Superstack Modal */}
      {showAISuperstackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-black text-black">What is AI Superstack?</h2>
                <button
                  onClick={() => setShowAISuperstackModal(false)}
                  className="text-2xl font-black text-black hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 text-black">
                <p className="font-bold leading-relaxed">
                  AI Superstack is a comprehensive, all-in-one AI learning program that teaches you how to use AI tools, build websites, create voice agents, and run AI-powered marketing—all without coding.
                </p>
                
                <p className="font-bold leading-relaxed">
                  It's not just about learning one tool or one AI model—it's a complete stack of AI skills, covering:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>Prompt Engineering – Make AI do exactly what you want</li>
                  <li>AI Tools Mastery – Learn 50+ practical AI tools</li>
                  <li>Website Creation – Build AI-driven websites easily</li>
                  <li>Voice Agents – Build assistants for businesses</li>
                  <li>AI Marketing – Automate social media, ads, and campaigns</li>
                </ul>
                
                <p className="font-bold leading-relaxed">
                  Think of it as a "stack" of AI superpowers that let you create, automate, and innovate in the AI world.
                </p>
                
                <h3 className="text-xl font-black text-black mt-6 mb-3">Why You Need to Join</h3>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>AI is exploding—companies and businesses want AI experts now</li>
                  <li>Most people only learn bits and pieces, but this course gives you the full stack</li>
                  <li>Telugu medium – learn in your language, no confusion</li>
                  <li>Hands-on projects – not just theory; you'll actually build websites, voice agents, and AI campaigns</li>
                  <li>Gain skills that are rare and high-paying – only a few know how to use AI like this</li>
                  <li>If you don't join, you'll keep watching AI opportunities pass by while others are already creating AI-powered solutions</li>
                </ul>
                
                <h3 className="text-xl font-black text-black mt-6 mb-3">What You Become After This Course</h3>
                
                <p className="font-bold leading-relaxed">
                  After completing AI Superstack, you can become:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 font-bold">
                  <li>AI Tool Expert – Use AI efficiently across different tools and platforms</li>
                  <li>Prompt Engineer – Craft prompts that get accurate, creative results from AI</li>
                  <li>Website & Voice Agent Creator – Build functional AI-driven websites and voice assistants</li>
                  <li>AI Marketer – Run AI-powered marketing campaigns for businesses</li>
                  <li>AI Innovator – Apply AI in real-world problems to save time, automate tasks, and scale ideas</li>
                </ul>
                
                <p className="font-bold leading-relaxed mt-4">
                  In short: You go from zero to someone who can actually use AI to create real products and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}


