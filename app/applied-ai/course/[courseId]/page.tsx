"use client"

import { notFound } from "next/navigation"
import { Play } from "lucide-react"

const courseData = {
  1: {
    id: 1,
    title: "Flux AI: Train Your Face to Create Cinematic Images – Complete Guide",
    subtitle: "Master AI-Powered Portrait Creation",
    description:
      "Learn how to train Flux AI with your own face to generate stunning, cinematic portraits and professional headshots using advanced AI technology.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4.5 hours",
    students: "2,847",
    rating: "4.9",
    modules: [
      "Introduction to Flux AI and Face Training",
      "Setting Up Your Training Dataset",
      "Advanced Portrait Generation Techniques",
      "Creating Cinematic Lighting Effects",
      "Professional Headshot Creation",
      "Troubleshooting and Optimization",
    ],
    learningOutcomes: [
      "Master Flux AI face training techniques",
      "Create professional cinematic portraits",
      "Generate high-quality headshots for business use",
      "Understand advanced AI image generation concepts",
      "Build a portfolio of AI-generated portraits",
    ],
    prerequisites: "Basic computer skills and interest in AI technology",
    metaDescription:
      "Transform your portrait photography with AI! This comprehensive course teaches you how to train Flux AI with your own face to create stunning, cinematic images and professional headshots. Perfect for photographers, content creators, and AI enthusiasts looking to master cutting-edge portrait generation technology.",
  },
  2: {
    id: 2,
    title: "AI Superstack (Telugu)",
    subtitle: "The Ultimate Hands-On AI Mastery Program",
    description:
      "Master Artificial Intelligence in your native Telugu through our comprehensive, project-driven AI Superstack course. Learn AI fundamentals, prompt engineering, top AI tools, website creation, voice agents, and AI-powered content marketing—all without writing a single line of code.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12 hours",
    students: "5,234",
    rating: "4.8",
    modules: [
      "Module 1: Introduction to Artificial Intelligence – From Past to Present",
      "Module 2: The Science of Prompts – Making AI Work for You",
      "Module 2.1: Foundations of Prompt Engineering – Talking to AI the Right Way",
      "Module 2.2: Prompting with ChatGPT – Techniques for Effective Conversations",
      "Module 2.3: Multi-AI Prompting – How to Work with ChatGPT, Bing, and Claude",
      "Module 2.4: Google Gemini Prompting – Techniques to Get Better Results",
      "Module 2.5: Prompt Engineering with Manus AI Agent – Guiding Autonomous Workflows",
      "Module 2.6: Prompting with Grok (xAI) – Exploring Elon Musk's AI Model",
      "Module 3: AI Made Easy – How Anyone Can Use Artificial Intelligence",
      "GIT & GITHUB Basic to Intermediate",
      "GitHub Clone, Copilot & GPTs Basics",
      "Module 4.1: AI in UI/UX and Frontend – Tools, Trends, and Techniques",
      "Module 4.1.1: Updates on Vercel V0, Lovable, Bolt, Base44",
      "Module 4.2: AI Infrastructure – Backend Systems and Deployment Best Practices",
      "Module 4.3: Connecting your custom Domain to your Project",
      "Module 4.4: Adding a Payment Gateway to Your Website",
      "EDITING WEBSITES UPDATED",
      "Module 5: Voice AI Agents – Technology, Tools, and Applications",
      "Module 6: AI-Powered Social Media – From Content Ideas to Analytics",
      "Module 7: Creating Effective AI Ads – A Hands-On Approach",
      "1200+ MEGA PROMPT BOOK",
      "Prompt Crafting Book",
      "100+ Prompts",
    ],
    learningOutcomes: [
      "Understand AI concepts in your native language",
      "Master prompt engineering techniques",
      "Use 50+ AI tools effectively",
      "Create websites without coding",
      "Build voice agents for businesses",
      "Develop AI marketing strategies",
    ],
    prerequisites: "Telugu language proficiency and basic computer skills",
    metaDescription:
      "తెలుగులో AI నేర్చుకోండి! This comprehensive AI Superstack course in Telugu covers everything from AI fundamentals to advanced applications. Learn prompt engineering, explore 50+ AI tools, create websites, build voice agents, and master AI marketing—all without coding. Perfect for Telugu speakers wanting to excel in the AI revolution.",
  },
  3: {
    id: 3,
    title: "N8N Beginner to Advanced",
    subtitle: "Automate Workflows with N8N",
    description:
      "Go from beginner to expert in workflow automation with N8N. Learn how to connect apps, design advanced logic, and build powerful automations—no coding required.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8 hours",
    students: "3,156",
    rating: "4.7",
    modules: [
      "N8N Fundamentals and Setup",
      "Building Your First Workflow",
      "Advanced Node Configurations",
      "API Integrations and Webhooks",
      "Conditional Logic and Branching",
      "Error Handling and Debugging",
      "Scheduling and Triggers",
      "Real-World Automation Projects",
    ],
    learningOutcomes: [
      "Master N8N workflow automation platform",
      "Connect multiple apps and services",
      "Build complex automation logic",
      "Handle APIs and webhooks effectively",
      "Create production-ready workflows",
      "Troubleshoot and optimize automations",
    ],
    prerequisites: "Basic understanding of web applications and APIs",
    metaDescription:
      "Master workflow automation with N8N! This comprehensive course takes you from beginner to advanced, teaching you to connect apps, design complex logic, and build powerful automations without coding. Perfect for business owners, marketers, and developers looking to streamline processes and boost productivity.",
  },
  4: {
    id: 4,
    title: "30+ AI Tools You Need to Know",
    subtitle: "A Rapid Tour of the AI Landscape",
    description:
      "Get a comprehensive overview of over 30 essential AI tools that are shaping industries. Learn what they do and how you can use them.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6 hours",
    students: "8,923",
    rating: "4.9",
    modules: [
      "AI Tools Landscape Overview",
      "Content Creation AI Tools",
      "Design and Visual AI Tools",
      "Productivity and Automation Tools",
      "Development and Coding AI",
      "Marketing and Sales AI Tools",
      "Data Analysis AI Platforms",
      "Emerging AI Technologies",
    ],
    learningOutcomes: [
      "Discover 30+ cutting-edge AI tools",
      "Understand each tool's capabilities and use cases",
      "Choose the right AI tools for your needs",
      "Stay ahead of AI technology trends",
      "Build an AI-powered workflow",
      "Maximize productivity with AI assistance",
    ],
    prerequisites: "Basic computer skills and curiosity about AI technology",
    metaDescription:
      "Discover the AI tools revolutionizing every industry! This comprehensive course covers 30+ essential AI tools across content creation, design, productivity, development, marketing, and data analysis. Learn what each tool does, how to use them effectively, and build your own AI-powered workflow to stay competitive in the digital age.",
  },
}

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const courseId = Number.parseInt(params.courseId)
  const course = courseData[courseId as keyof typeof courseData]

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Course Header */}
      <div className="bg-yellow-400 py-12 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-black text-white px-8 py-4 text-2xl md:text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-6">
            {course.title}
          </div>
          <p className="text-xl font-bold text-black mb-4">{course.subtitle}</p>

          {/* Course Stats */}
        </div>
      </div>

      {/* Video Hero Section */}
      <div className="bg-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-video bg-gray-900 border-4 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(255,193,7,1)] rounded-lg overflow-hidden">
            <iframe
              src={course.videoUrl}
              title={course.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-yellow-400 text-black p-4 rounded-full border-4 border-white shadow-lg">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Meta Description */}
              <div className="bg-gray-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4 border-b-4 border-black pb-2">Course Overview</h2>
                <p className="text-black font-semibold leading-relaxed text-lg">{course.metaDescription}</p>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-yellow-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-6 border-b-4 border-black pb-2">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-black text-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        ✓
                      </div>
                      <span className="text-black font-semibold">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              {courseId !== 1 && (
                <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b-4 border-black pb-2">Course Modules</h2>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-black rounded-lg"
                      >
                        <div className="bg-black text-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-black font-semibold">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enrollment Card */}
              <div className="bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-4">Enroll Now</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => window.open("https://vybeschool.akamai.net.in/", "_blank")}
                    className="w-full bg-yellow-400 text-black px-6 py-4 font-bold text-lg border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
                  >
                    START LEARNING NOW
                  </button>
                  <div className="text-center text-sm">
                    <p className="mb-2">✓ Lifetime Access</p>
                    <p className="mb-2">✓ Certificate of Completion</p>
                  </div>
                </div>
              </div>

              {/* VybeMentors */}
              <div className="bg-green-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6">
                <h3 className="text-lg font-bold text-black mb-4">VybeMentors</h3>
                <div className="space-y-4">
                  {/* Anjudeep */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black">
                      <img
                        src="/veerla-anjudeep-professional.jpg"
                        alt="Veerla Anjudeep"
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder-user.jpg" }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">VEERLA ANJUDEEP</div>
                      <div className="text-xs text-gray-600 font-semibold">No-code/Low-code AI Expert</div>
                      <div className="text-xs text-gray-600">4+ years experience</div>
                    </div>
                  </div>
                  
                  {/* Maneesh */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black">
                      <img
                        src="/vikas-chary-headshot.png"
                        alt="Bommakanti Maneesh"
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder-user.jpg" }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black text-sm">BOMMAKANTI MANEESH</div>
                      <div className="text-xs text-gray-600 font-semibold">Applied AI Expert</div>
                      <div className="text-xs text-gray-600">R&D AI Specialist</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              <div className="bg-blue-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6">
                <h3 className="text-lg font-bold text-black mb-3">Prerequisites</h3>
                <p className="text-black font-semibold">{course.prerequisites}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">READY TO START LEARNING?</h2>
          <p className="text-xl text-white mb-8 font-semibold">
            Enroll in this course and begin your AI journey with VybeSchool today.
          </p>
          <button
            onClick={() => window.open("https://vybeschool.akamai.net.in/", "_blank")}
            className="bg-yellow-400 text-black px-12 py-4 font-bold text-xl border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
          >
            START LEARNING NOW
          </button>
        </div>
      </div>
    </div>
  )
}
