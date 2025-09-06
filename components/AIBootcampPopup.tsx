"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function AIBootcampPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date to September 21, 2025 at 00:00:00
      const targetDate = new Date("2025-09-21T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Countdown has reached zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately when component mounts
    calculateTimeLeft()
    
    // Set up interval to update every second
    const interval = setInterval(calculateTimeLeft, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white font-black border-2 border-black rounded-full hover:bg-red-600 transition-colors flex items-center justify-center text-lg"
        >
          ×
        </button>

        <div className="p-6 pt-12">
          {/* Headline with Countdown */}
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-black text-black mb-4">
              AI Engineering Bootcamp starts on September 21
            </h2>
            <div className={`border-2 border-black rounded-lg p-4 mb-4 ${
              timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 
                ? 'bg-red-100' 
                : 'bg-red-500'
            }`}>
              {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                <div className="text-center">
                  <div className="text-2xl font-black text-red-600 mb-2">BOOTCAMP STARTED!</div>
                  <div className="text-sm font-bold text-black">Join now to catch up!</div>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white border-2 border-black rounded p-2 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-black text-black animate-pulse">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs font-bold text-gray-600">DAYS</div>
                  </div>
                  <div className="bg-white border-2 border-black rounded p-2 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-black text-black animate-pulse">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs font-bold text-gray-600">HOURS</div>
                  </div>
                  <div className="bg-white border-2 border-black rounded p-2 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-black text-black animate-pulse">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs font-bold text-gray-600">MIN</div>
                  </div>
                  <div className="bg-white border-2 border-black rounded p-2 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-black text-black animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs font-bold text-gray-600">SEC</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mentor Details */}
          <div className="bg-yellow-100 border-2 border-black rounded-lg p-4 mb-6">
            <div className="flex items-center gap-4">
              <img
                src="/uday.JPG"
                alt="Uday - AI Engineer Mentor"
                className="w-16 h-16 rounded-full border-2 border-black object-cover"
              />
              <div>
                <h3 className="text-black font-black text-lg">Meet Your Mentor</h3>
                <p className="text-black font-bold text-sm">Uday - AI Engineer</p>
                <p className="text-black font-bold text-xs">Expert in Python, LLMs & AI Development</p>
              </div>
            </div>
          </div>

          {/* 4-line intro text */}
          <div className="space-y-2 mb-6">
            <p className="text-black font-bold text-sm">Become an AI Engineer with real, job-ready skills.</p>
            <p className="text-black font-bold text-sm">Master Python, NLP, LLMs, and Vector Databases.</p>
            <p className="text-black font-bold text-sm">Build real-world projects with OpenAI, LangChain, Pinecone, and Streamlit.</p>
            <p className="text-black font-bold text-sm">Get live mentorship and step into high-demand AI roles.</p>
          </div>

          {/* Pricing section */}
          <div className="bg-blue-100 border-2 border-black rounded-lg p-4 mb-6">
            <p className="text-black font-black text-center text-lg">
              Course Price: ₹12,000
            </p>
            <p className="text-black font-bold text-center text-sm">
              (One-time, 45 days, Live Mentorship, 4+ Projects)
            </p>
          </div>

          {/* Highlight box with 5 bullet points */}
          <div className="bg-green-100 border-2 border-black rounded-lg p-4 mb-6">
            <ul className="space-y-2 text-sm font-bold text-black">
              <li>• Become an AI Engineer in just 45 days</li>
              <li>• Hands-on projects & real workflows</li>
              <li>• Live mentorship & expert guidance</li>
              <li>• 95% less pricing than market rates</li>
              <li>• Limited seats – Don't miss out!</li>
            </ul>
          </div>

          {/* Bold text line */}
          <div className="text-center mb-6">
            <p className="text-black font-black text-lg">
              Register now and get a discount!
            </p>
          </div>

          {/* Register Now Button */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScDsiYKC22ekSQL-FmsGZV1-EK3Kc7ApcTgiJSzFaM_jjk8gQ/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-green-500 text-white px-6 py-4 font-black text-lg border-4 border-black shadow-[6px_6px_0_0_#000] rounded-xl hover:shadow-[3px_3px_0_0_#000] transition-all hover:bg-green-600">
              REGISTER NOW →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
