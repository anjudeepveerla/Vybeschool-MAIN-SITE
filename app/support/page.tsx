"use client"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Section */}
      <section className="bg-yellow-400 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-black text-white px-8 py-4 text-2xl font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block">
              AI SUPPORT TEAM
            </div>
          </div>
          <div className="bg-gray-800 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] aspect-video flex items-center justify-center rounded-lg">
            <button className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Content Cards Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Our Team Philosophy */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">OUR TEAM PHILOSOPHY</h3>
                <p className="text-gray-700">
                  We hire people who joined VybeSchool and build products or projects. Our AI Support team consists of
                  graduates from our own programs who have proven their expertise by creating real-world applications
                  and solutions using AI technologies.
                </p>
              </div>
            </div>
          </div>

          {/* For IT Companies & Startups */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">FOR IT COMPANIES & STARTUPS</h3>
                <p className="text-gray-700">
                  If you are running an IT company or you're a startup founder, we can help your team with AI
                  integration in every possible way. From strategy consultation to hands-on implementation, our experts
                  provide comprehensive support tailored to your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* What is AI Support */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0012 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">WHAT IS AI SUPPORT?</h3>
                <p className="text-gray-700">
                  We integrate AI into your development team, product development team, or any department where it adds
                  value. Our support includes workflow automation, AI-powered feature development, team training, and
                  ongoing consultation to ensure successful AI adoption across your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">JOIN OUR TEAM</h3>
                <p className="text-gray-700 mb-4">
                  Join VybeSchool to become an AI Support specialist. Complete our comprehensive AI training program,
                  build impressive projects, and potentially join our elite support team to help businesses transform
                  with AI.
                </p>
                <button
                  onClick={() => (window.location.href = "/applied-ai")}
                  className="bg-blue-500 text-white px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 rounded-lg cursor-pointer"
                >
                  START YOUR JOURNEY
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">READY TO TRANSFORM YOUR BUSINESS WITH AI?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Contact our AI Support team today and discover how we can help integrate cutting-edge AI solutions into your
            workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdekmjPvVxgYpDs_zGapNqZr0qrJvX5AFjwzpFSFn9fi4dDBg/viewform",
                  "_blank",
                )
              }
              className="bg-yellow-400 text-black px-8 py-3 font-bold text-lg border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg cursor-pointer"
            >
              GET AI SUPPORT
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeRDvMCFeUHaaxNm1L0iOMlwkwPkdfIILSb-MiWp738X7m0gQ/viewform",
                  "_blank",
                )
              }
              className="bg-blue-500 text-white px-8 py-3 font-bold text-lg border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg cursor-pointer"
            >
              JOIN AI SUPPORT
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
