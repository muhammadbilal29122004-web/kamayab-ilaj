import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamayab | Roohani Markaz",
  description: "Kamayab Roohani Markaz - Quran-e-Kareem ki barkat aur kamil hifazat ke zariye apni zindagi mein asaniyaan paida karein.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-screen bg-slate-50 text-slate-800 flex flex-col overflow-x-hidden selection:bg-sky-200 selection:text-sky-900">
      
        {/* Top Scrolling Marquee Bar */}
        <div className="fixed top-0 left-0 w-full z-[60] bg-sky-100 text-sky-800 py-2 border-b border-sky-200 overflow-hidden flex items-center whitespace-nowrap shadow-md">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(100vw); }
              100% { transform: translateX(-100%); }
            }
            .animate-scrolling-text {
              display: inline-block;
              animation: marquee 30s linear infinite;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>
          <div className="animate-scrolling-text text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center">
             <span className="mx-6">✦ Istikhara for Business</span>
             <span className="mx-6">✦ Love Marriage Istikhara</span>
             <span className="mx-6">✦ Pasand Ki Shadi Ka Wazifa</span>
             <span className="mx-6">✦ Karobar Ki Bandish Ka Tor</span>
             <span className="mx-6">✦ Kala Jadu Ka Roohani Ilaj</span>
             <span className="mx-6">✦ Gharelu Pareshani Ka Hal</span>
             <span className="mx-6">✦ Online Istikhara Center</span>
             <span className="mx-6">✦ Roohani Naqsh O Taveez</span>
          </div>
        </div>

        {/* Floating Navbar */}
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-6xl rounded-full border border-sky-100/60 bg-white/90 backdrop-blur-2xl px-2 md:px-8 py-2 md:py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(59,130,246,0.1)]">
          
          <Link href="/" className="flex items-center gap-2 group cursor-pointer pl-2 md:pl-0 shrink-0">
            <div className="w-3.5 h-3.5 md:w-5 md:h-5 bg-gradient-to-r from-blue-500 to-blue-700 rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-sm" />
            <span className="text-sky-700 font-serif font-bold text-xl tracking-widest hidden lg:block">KAMAYAB</span>
          </Link>

          {/* Scrollable links on mobile */}
          <div className="flex-1 flex items-center justify-center gap-3 sm:gap-6 md:gap-10 text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold text-slate-600 px-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link href="/surah" className="shrink-0 hover:text-sky-500 hover:scale-105 transition-all">Surah</Link>
            <Link href="/naqsh" className="shrink-0 hover:text-sky-500 hover:scale-105 transition-all">Naqsh</Link>
            <Link href="/taveez" className="shrink-0 hover:text-sky-500 hover:scale-105 transition-all">Taveez</Link>
            <Link href="/istikhara" className="shrink-0 hover:text-sky-500 hover:scale-105 transition-all">Istikhara</Link>
          </div>

          <div className="shrink-0 pr-1 md:pr-0">
            <Link href="/contact">
              <button className="px-4 py-2 md:px-8 md:py-2.5 rounded-full bg-gradient-to-r from-sky-300 to-sky-400 border border-transparent text-white text-[9px] md:text-xs uppercase tracking-widest font-extrabold hover:brightness-110 hover:shadow-[0_5px_20px_rgba(59,130,246,0.4)] transition-all">
                Raabta
              </button>
            </Link>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="flex-1 w-full bg-white z-0 relative">
           {children}
        </main>

        {/* Footer */}
        <footer className="py-16 bg-sky-50 text-center border-t border-sky-200 relative z-10 w-full mt-auto">
           <div className="max-w-4xl mx-auto space-y-6 px-4">
              <h2 className="text-3xl font-serif text-sky-900 font-bold tracking-wider">KAMAYAB</h2>
              <p className="text-sky-600 uppercase tracking-widest text-xs font-bold font-sans">Roohani Markaz O Ilaj</p>
              <div className="flex justify-center gap-8 text-sm text-sky-800 font-medium pt-6">
                 <Link href="/contact" className="hover:text-sky-900 transition-colors">Raabta Karein</Link>
                 <Link href="/surah" className="hover:text-sky-900 transition-colors">Surah / Naqsh</Link>
                 <span className="cursor-pointer hover:text-sky-900 transition-colors">Istikhara Report</span>
              </div>
              <div className="pt-10 text-sky-500 text-xs font-bold uppercase tracking-widest">
                 © 2026 Kamayab Roohani Markaz. All Rights Reserved.
              </div>
           </div>
        </footer>

      </body>
    </html>
  );
}
