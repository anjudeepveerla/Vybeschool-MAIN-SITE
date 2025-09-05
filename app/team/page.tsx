"use client"
import { Linkedin, Instagram } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-8">
            VYBESCHOOL TEAM
          </div>

          {/* Video Player */}
          <div className="bg-slate-700 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg aspect-video flex items-center justify-center">
            <button className="bg-red-500 hover:bg-red-600 rounded-full w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img
                  src="/veerla-anjudeep-professional.jpg"
                  alt="Veerla Anjudeep"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">VEERLA ANJUDEEP</h3>
              <p className="text-blue-600 font-semibold mb-2">No-code/Low-code AI Expert</p>
              <p className="text-sm text-gray-600 mb-4">
                4+ years of experience in building AI chatbots, voice agents, and websites. AI Superstack Mentor.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/anjudeepveerla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/vikas-chary-headshot.png" alt="Bommakanti Maneesh" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">BOMMAKANTI MANEESH</h3>
              <p className="text-blue-600 font-semibold mb-2">Applied AI Expert</p>
              <p className="text-sm text-gray-600 mb-4">No-code/Low-code Developer, R&D AI Specialist, and AI Superstack Mentor.</p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/bommakanti-maneesh-0494972b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/maneesh-headshot.png" alt="Vikas Chary Alwala" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">VIKAS CHARY ALWALA</h3>
              <p className="text-blue-600 font-semibold mb-2">Technology Specialist</p>
              <p className="text-sm text-gray-600 mb-4">Experienced technology professional with expertise in software development and innovation.</p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.linkedin.com/in/vikaschary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>

            {/* Uday */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-black">
                <img src="/uday.jpg" alt="Uday" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder-user.jpg" }} />
              </div>
              <h3 className="font-bold text-lg mb-1">UDAY</h3>
              <p className="text-blue-600 font-semibold mb-2">Senior Software Engineer / AI Engineer</p>
              <p className="text-sm text-gray-600 mb-4">
                11+ years of experience in AI, cloud, and enterprise systems. Expert in AI agents, LLMOps, multimodal applications, and GPU-optimized AI workflows. Passionate about teaching job-ready AI skills that bridge theory and real-world deployment.
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <button className="bg-pink-500 text-white p-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Instagram size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
