import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const articleData: Record<string, any> = {
  "advanced-prompt-engineering": {
    id: "advanced-prompt-engineering",
    title: "New AI Course Launch: Advanced Prompt Engineering",
    date: "1/15/2024",
    author: "VybeSchool Team",
    image: "/futuristic-ai-blue-patterns.png",
    category: "whats-new",
    content: `
      <p>We're thrilled to announce the launch of our most comprehensive AI course yet: Advanced Prompt Engineering for Real-World Applications.</p>
      
      <p>This course represents months of research and development, bringing together the latest techniques in prompt engineering that are being used by leading AI companies worldwide. Our curriculum covers everything from basic prompt structure to advanced chain-of-thought reasoning.</p>
      
      <p>What makes this course special is our focus on practical applications. Instead of just teaching theory, we guide students through building real projects that solve actual business problems. You'll learn how to:</p>
      
      <ul>
        <li>Design prompts that consistently produce high-quality outputs</li>
        <li>Implement advanced techniques like few-shot learning and chain-of-thought prompting</li>
        <li>Build AI-powered applications that can be deployed in production</li>
        <li>Optimize prompts for different AI models and use cases</li>
      </ul>
      
      <p>The course is structured in 7 comprehensive modules, each building upon the previous one. Students will work on hands-on projects throughout, culminating in a capstone project that demonstrates mastery of advanced prompt engineering techniques.</p>
      
      <p>We're particularly excited about the community aspect of this course. Students will have access to our exclusive Discord server where they can collaborate, share projects, and get feedback from both peers and instructors.</p>
      
      <p>Enrollment opens next week, and we're offering early bird pricing for the first 100 students. This course is perfect for developers, content creators, entrepreneurs, and anyone looking to leverage AI in their work or business.</p>
    `,
  },
  "student-milestone": {
    id: "student-milestone",
    title: "VybeSchool Reaches 10,000+ Students Milestone",
    date: "1/10/2024",
    author: "VybeSchool Team",
    image: "/ai-education-meeting.png",
    category: "whats-new",
    content: `
      <p>A celebration of our growing community and the amazing projects our students have built over the past year.</p>
      
      <p>When we started VybeSchool, our mission was simple: make AI education accessible to everyone, regardless of their technical background or native language. Today, we're proud to announce that we've reached a major milestone - over 10,000 students have joined our community!</p>
      
      <p>This achievement represents more than just numbers. It represents thousands of individuals who have taken the leap to learn AI, build projects, and transform their careers. From complete beginners to experienced developers, our students come from all walks of life and all corners of the world.</p>
      
      <p>Some highlights from our community:</p>
      
      <ul>
        <li>Students have built over 2,500 AI projects using our curriculum</li>
        <li>95% of our graduates report increased confidence in AI technologies</li>
        <li>Our community spans 45+ countries and 12 different languages</li>
        <li>Students have launched 150+ AI-powered startups and freelance businesses</li>
      </ul>
      
      <p>What makes us most proud is the diversity of our community. We have teachers using AI to create better educational content, small business owners automating their workflows, artists exploring AI-generated content, and developers building the next generation of AI applications.</p>
      
      <p>As we look toward the future, we're committed to continuing our mission of democratizing AI education. We're working on new courses, expanding our language offerings, and building even better tools to support our students' learning journey.</p>
      
      <p>Thank you to every student, instructor, and community member who has been part of this incredible journey. Here's to the next 10,000 students and beyond!</p>
    `,
  },
  "ai-chatbot-project": {
    id: "ai-chatbot-project",
    title: "Building Your First AI Chatbot: A Complete Guide",
    date: "1/12/2024",
    author: "VybeSchool Team",
    image: "/tech-workers.png",
    category: "projects",
    content: `
      <p>Learn how to create an intelligent chatbot using modern AI techniques and deploy it to production in this comprehensive project guide.</p>
      
      <p>Chatbots have become an essential tool for businesses looking to provide 24/7 customer support, automate routine tasks, and improve user engagement. In this project, we'll walk you through building a sophisticated AI chatbot from scratch.</p>
      
      <p>This project is perfect for intermediate students who want to apply their AI knowledge to a real-world application. By the end of this guide, you'll have a fully functional chatbot that you can customize for any use case.</p>
      
      <h3>What You'll Build</h3>
      
      <p>Our chatbot will include the following features:</p>
      
      <ul>
        <li>Natural language understanding using advanced AI models</li>
        <li>Context-aware conversations that remember previous interactions</li>
        <li>Integration with external APIs for dynamic responses</li>
        <li>A web interface for easy interaction</li>
        <li>Deployment to a cloud platform for public access</li>
      </ul>
      
      <h3>Technical Stack</h3>
      
      <p>We'll be using modern technologies including Python, OpenAI's GPT models, FastAPI for the backend, React for the frontend, and Docker for deployment. Don't worry if you're not familiar with all of these - we'll explain everything step by step.</p>
      
      <p>The project is divided into several phases: setting up the development environment, building the core chatbot logic, creating the user interface, implementing advanced features like memory and context, and finally deploying to production.</p>
      
      <p>This is more than just a tutorial - it's a complete project that you can add to your portfolio and use as a foundation for more complex AI applications.</p>
    `,
  },
  "image-generator-project": {
    id: "image-generator-project",
    title: "Creating Cinematic AI Image Generators",
    date: "1/8/2024",
    author: "VybeSchool Team",
    image: "/futuristic-ai-blue-patterns.png",
    category: "projects",
    content: `
      <p>Master the art of generating stunning, cinematic images using AI tools and custom prompts in this advanced project tutorial.</p>
      
      <p>AI image generation has revolutionized the creative industry, enabling artists, designers, and content creators to produce professional-quality visuals in minutes rather than hours. This project will teach you how to harness this power to create cinematic-quality images.</p>
      
      <p>We'll explore advanced prompting techniques, model fine-tuning, and post-processing workflows that professional studios use to create stunning visual content for films, games, and marketing campaigns.</p>
      
      <h3>Project Overview</h3>
      
      <p>In this comprehensive project, you'll learn to:</p>
      
      <ul>
        <li>Craft detailed prompts that produce cinematic compositions</li>
        <li>Use advanced parameters to control lighting, mood, and style</li>
        <li>Implement batch processing for consistent visual styles</li>
        <li>Apply post-processing techniques for professional results</li>
        <li>Build a custom interface for non-technical users</li>
      </ul>
      
      <h3>Tools and Techniques</h3>
      
      <p>We'll work with state-of-the-art AI models including Stable Diffusion, DALL-E, and Midjourney, comparing their strengths and use cases. You'll learn prompt engineering techniques specific to each platform and how to achieve consistent results across different models.</p>
      
      <p>The project includes hands-on exercises where you'll create images for different scenarios: movie posters, product photography, architectural visualization, and concept art. Each exercise builds upon the previous one, gradually introducing more advanced concepts.</p>
      
      <p>By the end of this project, you'll have a complete toolkit for AI image generation and a portfolio of stunning visuals that demonstrate your skills to potential clients or employers.</p>
    `,
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = articleData[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            ← BACK TO ARTICLES
          </Link>
        </div>

        {/* Article Content */}
        <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          {/* Article Header */}
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-black">{article.title}</h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded"></div>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                <span>{article.author}</span>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.7",
                fontSize: "18px",
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(articleData).map((slug) => ({
    slug,
  }))
}
