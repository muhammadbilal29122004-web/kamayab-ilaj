"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[94%] max-w-6xl">
      {/* Main Navbar Container */}
      <div className={`
        relative w-full rounded-[2rem] md:rounded-full border border-green-200/60 bg-white/95 backdrop-blur-3xl px-4 md:px-8 py-2 md:py-3.5 flex items-center justify-between shadow-[0_15px_45px_rgba(22,163,74,0.15)] transition-all duration-500
      `}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0" onClick={() => setIsOpen(false)}>
          <div className="w-3.5 h-3.5 md:w-5 md:h-5 bg-gradient-to-r from-green-500 to-green-700 rotate-45 shadow-[0_0_15px_rgba(22,163,74,0.4)] rounded-sm group-hover:scale-110 transition-transform" />
          <span className="text-green-950 font-serif font-black text-lg md:text-xl tracking-widest uppercase">KAMAYABI</span>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-[11px] uppercase tracking-[0.2em] font-black text-slate-600">
          {[
            { name: "Home", path: "/" },
            { name: "Surah", path: "/surah" },
            { name: "Naqsh", path: "/naqsh" },
            { name: "Taveez", path: "/taveez" },
            { name: "Istikhara", path: "/istikhara" },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="hover:text-green-700 hover:scale-105 transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <button className="px-5 py-2 md:px-8 md:py-3 rounded-full bg-slate-900 border border-slate-800 text-white text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-green-800 hover:shadow-[0_5px_20px_rgba(22,163,74,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Raabta
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-green-900 hover:bg-green-50 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col gap-1.5 items-center">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          md:hidden absolute top-full left-0 right-0 mt-4 overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
        `}
      >
        <div className="mx-2 bg-white/98 backdrop-blur-3xl border border-green-200/60 rounded-[2.5rem] p-6 shadow-2xl flex flex-col gap-3 text-center">
          {[
            { name: "Home", path: "/" },
            { name: "Surah Collection", path: "/surah" },
            { name: "Rohani Naqsh", path: "/naqsh" },
            { name: "Sacred Taveez", path: "/taveez" },
            { name: "Online Istikhara", path: "/istikhara" },
            { name: "Contact Raabta", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-slate-800 hover:text-green-700 py-3.5 border-b border-slate-50 last:border-0 hover:bg-green-50/50 rounded-2xl transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
