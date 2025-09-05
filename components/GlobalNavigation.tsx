"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function GlobalNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-6" style={{ backgroundColor: "#FFD700" }}>
        <div className="flex items-center gap-6 md:gap-8">
          {/* Logo - Same in both desktop and mobile */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-black text-black">VYBE</span>
            <span
              className="ml-1 px-3 py-1 text-2xl md:text-3xl font-black border-4 border-black shadow-[4px_4px_0_0_#000]"
              style={{ backgroundColor: "#4285F4", color: "white" }}
            >
              SCHOOL
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-lg text-black font-black">
            <Link href="/blog" className="hover:underline cursor-pointer">
              BLOG/PROJECTS
            </Link>
            <Link href="/team" className="hover:underline cursor-pointer">
              OUR TEAM
            </Link>
            <Link href="/support" className="hover:underline cursor-pointer">
              AI SUPPORT
            </Link>
            <Link href="/live-classes" className="hover:underline cursor-pointer">
              LIVE CLASSES
            </Link>
            <Link href="/ai-engineer" className="hover:underline cursor-pointer">
              AI ENGINEER
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Applied AI Button - Desktop */}
          <Link
            href="/applied-ai"
            className="hidden md:block px-4 py-2 text-lg font-black border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer"
            style={{ backgroundColor: "#000", color: "#FFD700" }}
          >
             APPLIED AI
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] transition-all"
            style={{ backgroundColor: "#000" }}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          {/* Close button at top-right */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] transition-all bg-white"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Centered menu content */}
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/blog"
              className="text-2xl font-black text-black hover:underline py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOG/PROJECTS
            </Link>
            <Link
              href="/team"
              className="text-2xl font-black text-black hover:underline py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR TEAM
            </Link>
            <Link
              href="/support"
              className="text-2xl font-black text-black hover:underline py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI SUPPORT
            </Link>
            <Link
              href="/live-classes"
              className="text-2xl font-black text-black hover:underline py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LIVE CLASSES
            </Link>
            <Link
              href="/applied-ai"
              className="mt-4 px-6 py-3 text-xl font-black border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] transition-all text-center"
              style={{ backgroundColor: "#000", color: "#FFD700" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
               APPLIED AI
            </Link>
            <Link
              href="/ai-engineer"
              className="text-2xl font-black text-black hover:underline py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI ENGINEER
            </Link>
          </div>
        </div>
      )}

      {/* Thick Black Divider */}
      <div className="h-1.25 bg-black leading-1"></div>
    </>
  )
}
