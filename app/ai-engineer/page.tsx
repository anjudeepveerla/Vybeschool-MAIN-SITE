"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

export default function AIEngineerPage() {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([1]))

  const toggleModule = (moduleId: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev)
      if (next.has(moduleId)) {
        next.delete(moduleId)
      } else {
        next.add(moduleId)
      }
      return next
    })
  }
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFD700" }}>
      {/* Hero Video Section */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1
              className="text-3xl md:text-5xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block"
              style={{ backgroundColor: "#000", color: "#FFD700" }}
            >
              VybeSchool AI Engineering Bootcamp
            </h1>
          </div>

          <div
            className="aspect-video border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden bg-black"
            aria-label="AI Engineering Bootcamp Introduction Video"
          >
          
          </div>

          {/* Quick Navigation */}
          <div className="mt-6 p-4 border-4 border-black bg-white shadow-[6px_6px_0_0_#000] rounded-lg">
            <div className="text-center mb-2">
              <span className="text-lg md:text-xl font-black text-black">Jump to module</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[1,2,3,4,5,6,7,8].map((m) => (
                <a
                  key={m}
                  href={`#module-${m}`}
                  onClick={(e) => handleScroll(e, `module-${m}`)}
                  className="px-3 py-2 text-sm font-black border-2 border-black bg-gray-100 hover:bg-gray-200 transition-colors rounded"
                >
                  Module {m}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Information Section */}
      <section className="px-4 md:px-6 py-8" style={{ backgroundColor: "white" }}>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Instructor / VybeMentor */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg bg-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-black shrink-0">
                <img src="/uday.jpg" alt="Uday" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder-user.jpg" }} />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-black">Uday</div>
                <div className="text-blue-700 font-bold">VybeMentor • Senior Software Engineer / AI Engineer</div>
              </div>
            </div>
            <p className="text-black font-bold leading-relaxed mt-4">
              11+ years of experience in AI, cloud, and enterprise systems. Expert in AI agents, LLMOps, multimodal applications, and GPU-optimized AI workflows. Passionate about teaching job-ready AI skills that bridge theory and real-world deployment.
            </p>
          </div>
          {/* Objective */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4">Course Objective</h2>
            <div className="space-y-4">
              <p className="text-black font-bold leading-relaxed">
                Become an AI Engineer with real, job-ready skills in Python, NLP, LLMs, vector databases, and AI application development. Gain the confidence to build, deploy, and scale AI solutions that employers are looking for.
              </p>
              <p className="text-black font-bold leading-relaxed">
                Master tools like OpenAI, LangChain, Pinecone, and Streamlit while working on projects that showcase your abilities. Create a portfolio that makes you the candidate companies fight to hire.
              </p>
              <p className="text-black font-bold leading-relaxed">
                AI Engineer roles are exploding in demand, and skilled professionals are scarce. Join this bootcamp to get ahead of the crowd and seize opportunities others will miss.
              </p>
              <p className="text-black font-bold leading-relaxed">
                Seats are limited—don’t fall behind. With hands-on projects, real workflows, and live mentorship, you’ll be ready to step into high-impact AI roles faster than anyone else.
              </p>
            </div>
          </div>

        

          {/* Why VybeSchool */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4">Why VybeSchool Bootcamp?</h2>
            <ul className="list-disc pl-6 text-black font-bold space-y-2">
              <li>Structured, end-to-end AI curriculum for practical learning</li>
              <li>Focus on job-ready skills and employable projects</li>
              <li>Real-world use cases integrated with industry tools</li>
              <li>Live mentorship, guidance, and collaborative learning</li>
              <li>Hands-on capstone projects simulating professional AI workflows</li>
            </ul>
          </div>

          {/* Modules */}
          <div className="space-y-8">
            {/* Module 1 */}
            <div id="module-1" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(1)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 1: AI & the Future Tech Landscape – VybeSchool Intro to AI</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(1) ? "−" : "+"}</span>
              </button>
              {openModules.has(1) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2 mb-4">
                <li>Understand AI and its current relevance</li>
                <li>Explore structured vs. unstructured data</li>
                <li>Introduction to Machine Learning (Supervised & Unsupervised)</li>
                <li>Generative AI: concepts and deployment challenges</li>
                <li>Overview of the AI tech stack</li>
                <li>Explore AI career paths: LLM Engineer, GenAI Engineer, AI Developer</li>
                  </ul>
                  <div className="p-4 border-2 border-black bg-yellow-100 rounded">
                    <div className="text-black font-black mb-1">Mini Exercise:</div>
                    <div className="text-black font-bold">Identify AI applications in popular products or companies.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Module 2 */}
            <div id="module-2" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(2)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 2: Python for AI Engineers – Coding Foundations</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(2) ? "−" : "+"}</span>
              </button>
              {openModules.has(2) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2 mb-4">
                <li>Why Python is the go-to language for AI</li>
                <li>Setting up the development environment</li>
                <li>Variables, data types, control flow, and functions</li>
                <li>Lists, dictionaries, modules, and file handling</li>
                <li>Working with JSON and external data</li>
                <li>Hands-on mini-projects to strengthen programming logic</li>
                  </ul>
                  <div className="p-4 border-2 border-black bg-yellow-100 rounded">
                    <div className="text-black font-black mb-1">Mini Exercise:</div>
                    <div className="text-black font-bold">Build a simple Python-based text analyzer.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Module 3 */}
            <div id="module-3" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(3)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 3: NLP Essentials – Language Understanding Made Easy</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(3) ? "−" : "+"}</span>
              </button>
              {openModules.has(3) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2 mb-4">
                <li>NLP overview and practical applications</li>
                <li>Text preprocessing: cleaning and tokenization</li>
                <li>Part-of-speech (POS) tagging and Named Entity Recognition (NER)</li>
                <li>Sentiment analysis for real-world data</li>
                <li>Text vectorization methods: TF-IDF, Word2Vec</li>
                <li>Topic modeling and text classification</li>
                <li>Case Study: Fake news detection</li>
                  </ul>
                  <div className="p-4 border-2 border-black bg-yellow-100 rounded">
                    <div className="text-black font-black mb-1">Mini Project:</div>
                    <div className="text-black font-bold">Create a sentiment analyzer for social media or reviews.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Module 4 */}
            <div id="module-4" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(4)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 4: Prompt Engineering – Mastering AI Interaction</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(4) ? "−" : "+"}</span>
              </button>
              {openModules.has(4) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2">
                <li>Fundamentals of prompts and token limits</li>
                <li>Zero-shot, few-shot, and chain-of-thought prompts</li>
                <li>Designing effective prompts for desired outcomes</li>
                <li>Testing, debugging, and optimizing prompts for applications</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Module 5 */}
            <div id="module-5" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(5)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 5: Large Language Models (LLMs) – Building the AI Brain</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(5) ? "−" : "+"}</span>
              </button>
              {openModules.has(5) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2">
                <li>Introduction to LLMs and foundation models</li>
                <li>Transformer architecture: encoders, decoders, and self-attention</li>
                <li>Popular model families: GPT, BERT, Claude, Gemini, LLaMA</li>
                <li>HuggingFace pipelines and model inference</li>
                <li>Working with OpenAI and Anthropic APIs</li>
                <li>Comparing open-source vs. closed-source models</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Module 6 */}
            <div id="module-6" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(6)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 6: Vector Databases & Embeddings – Smart Data Retrieval</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(6) ? "−" : "+"}</span>
              </button>
              {openModules.has(6) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2">
                <li>Understanding vector embeddings and their applications</li>
                <li>SQL vs. NoSQL vs. vector databases</li>
                <li>Introduction to Pinecone and alternatives: Weaviate, Qdrant, FAISS</li>
                <li>Storing, querying, and retrieving embeddings</li>
                <li>Use cases: semantic search, similarity search, RAG pipelines</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Module 7 */}
            <div id="module-7" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(7)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 7: LLM Engineering & Application Development – Building AI Workflows</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(7) ? "−" : "+"}</span>
              </button>
              {openModules.has(7) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2">
                <li>Chaining AI components using LangChain</li>
                <li>Tools: LangGraph and OpenAI function calling</li>
                <li>Integrating UIs with Streamlit</li>
                <li>Building modular and scalable LLM workflows</li>
                <li>Evaluating, debugging, and optimizing AI pipelines</li>
                <li>Deployment considerations and real-world challenges</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Module 8 */}
            <div id="module-8" className="p-0 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg overflow-hidden">
              <button onClick={() => toggleModule(8)} className="w-full flex items-center justify-between text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors">
                <h3 className="text-xl md:text-2xl font-black text-black">Module 8: Retrieval-Augmented Generation (RAG) – Next-Level AI Applications</h3>
                <span className="text-black text-2xl font-black ml-4">{openModules.has(8) ? "−" : "+"}</span>
              </button>
              {openModules.has(8) && (
                <div className="px-6 pb-6 pt-2 bg-white">
                  <ul className="list-disc pl-6 text-black font-bold space-y-2 mb-4">
                <li>Understanding RAG and its importance</li>
                <li>Building document → embedding → retrieval → generation pipelines</li>
                <li>Using LangGraph to create custom RAG workflows</li>
                <li>Case Study: Enterprise RAG chatbot</li>
                <li>Best practices for evaluation and prompt injection defense</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Capstone Projects */}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4">Capstone Projects</h2>
            <ul className="list-disc pl-6 text-black font-bold space-y-2">
              <li>
                AI-Powered Brochure Generator: Scrape websites + summarize content + generate intelligent business brochures
              </li>
              <li>
                Multimodal Customer Support Agent: Build a bot for text + voice inputs with function-calling and a working UI
              </li>
              <li>
                Meeting Minute Summarizer: Transcribe audio into structured meeting notes using multiple LLMs
              </li>
              <li>
                RAG-Based Knowledge Worker: Create a document-based chatbot to answer complex internal company questions
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="https://chat.whatsapp.com/GW50XlYydFGDleL2dxcNSQ?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-4 text-xl font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer rounded-lg"
                style={{ backgroundColor: "#25D366", color: "white" }}
                aria-label="Join the AI Engineer Bootcamp WhatsApp Group"
                title="Join the AI Engineer Bootcamp WhatsApp Group"
              >
                I'M INTERESTED →
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Back to top button */}
      <button
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all rounded-full"
        style={{ backgroundColor: "#000", color: "#FFD700" }}
        title="Back to top"
      >
        ↑
      </button>
    </main>
  )
}


