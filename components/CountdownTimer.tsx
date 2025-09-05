"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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

  return (
    <div className="p-6 border-4 border-black shadow-[8px_8px_0_0_#000] rounded-lg bg-white">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-4 text-center">
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
  )
}
