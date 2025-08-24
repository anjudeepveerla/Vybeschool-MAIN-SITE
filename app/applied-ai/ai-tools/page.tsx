export default function AIToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-400 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block mb-12">
            30+ AI TOOLS YOU NEED TO KNOW
          </div>

          {/* Video Player */}
          <div className="bg-gray-800 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg aspect-video flex items-center justify-center mb-16">
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-4">YOUR ULTIMATE AI TOOLKIT</h2>
              <p className="text-black font-semibold leading-relaxed">
                Get a rapid, comprehensive overview of the most essential AI tools that are transforming industries
                today. This course is a fast-paced tour of over 30 different AI applications, covering everything from
                text generation and image creation to coding assistants and marketing automation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-4">STAY AHEAD OF THE CURVE</h2>
              <div className="text-black font-semibold leading-relaxed space-y-4">
                <p>
                  In the rapidly evolving world of AI, staying updated is key. This course is designed to give you a
                  foundational understanding of what each tool does, its primary use cases, and how you can start using
                  it. You'll finish the course with a broad knowledge of the AI landscape, empowering you to choose the
                  right tools for any task.
                </p>
                <p className="font-bold">By the end, you'll have:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A foundational understanding of 30+ trending AI tools</li>
                  <li>Real-world use cases explained in simple terms</li>
                  <li>Practical steps to start using each tool</li>
                  <li>Insights to pick the right AI tool for any task</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
