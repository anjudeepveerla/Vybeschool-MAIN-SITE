"use client"

export default function AISupport() {
  const handleGetSupport = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdekmjPvVxgYpDs_zGapNqZr0qrJvX5AFjwzpFSFn9fi4dDBg/viewform",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const handleJoinSupport = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeRDvMCFeUHaaxNm1L0iOMlwkwPkdfIILSb-MiWp738X7m0gQ/viewform",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFD700" }}>
      {/* Header */}
      <div className="px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-black px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] inline-block mb-6"
            style={{ backgroundColor: "#4285F4", color: "white" }}
          >
            AI SUPPORT
          </h1>
          <p className="text-xl md:text-2xl font-black text-black">
            GET PERSONALIZED AI ASSISTANCE FOR YOUR LEARNING JOURNEY
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="px-4 md:px-6 py-12" style={{ backgroundColor: "white" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8">NEED HELP WITH YOUR AI PROJECTS?</h2>
          <p className="text-lg md:text-xl font-bold text-black mb-12">
            Our AI support team is here to help you succeed in your learning journey
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-4 border-black shadow-[8px_8px_0_0_#000]" style={{ backgroundColor: "#F8F9FA" }}>
              <h3 className="text-2xl font-black text-black mb-4">GET AI SUPPORT</h3>
              <p className="text-base font-bold text-black mb-6">
                Submit your questions and get expert help with your AI projects
              </p>
              <button
                onClick={handleGetSupport}
                className="inline-block px-6 py-3 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
                style={{ backgroundColor: "#4285F4", color: "white" }}
              >
                REQUEST SUPPORT
              </button>
            </div>

            <div className="p-8 border-4 border-black shadow-[8px_8px_0_0_#000]" style={{ backgroundColor: "#F8F9FA" }}>
              <h3 className="text-2xl font-black text-black mb-4">JOIN AI SUPPORT TEAM</h3>
              <p className="text-base font-bold text-black mb-6">
                Help other students and become part of our AI support community
              </p>
              <button
                onClick={handleJoinSupport}
                className="inline-block px-6 py-3 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
                style={{ backgroundColor: "#2ECC71", color: "white" }}
              >
                JOIN SUPPORT TEAM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-6 py-12" style={{ backgroundColor: "#000" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
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
          <p className="text-lg font-bold mb-8" style={{ color: "#FFD700" }}>
            Learn AI in Your Language
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleGetSupport}
              className="px-6 py-3 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
              style={{ backgroundColor: "#4285F4", color: "white" }}
            >
              AI SUPPORT
            </button>
            <button
              onClick={handleJoinSupport}
              className="px-6 py-3 text-lg font-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all cursor-pointer"
              style={{ backgroundColor: "#2ECC71", color: "white" }}
            >
              JOIN AI SUPPORT
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
