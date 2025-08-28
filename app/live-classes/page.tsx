import Link from "next/link"

export default function LiveClassesPage() {
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
            <Link
              href="https://chat.whatsapp.com/GW50XlYydFGDleL2dxcNSQ?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                I’M INTERESTED →
              </button>
            </Link>
          </div>

          {/* AI Superstack (*/}
          <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-xl bg-white">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-2">AI Superstack</h2>
            <div className="space-y-2 text-black font-bold mb-4">
              <p>Duration: 14 days</p>
              <p>Price: ₹5,000</p>
              <p>Languages Available: Telugu | Hindi | English</p>
            </div>
            <Link
              href="https://chat.whatsapp.com/Lor0KwCmZQf1q6MkJQDVZg?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full px-6 py-3 text-lg font-black border-4 border-black rounded-xl shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                I’M INTERESTED →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}


