import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import ResponsiveNav from "@/components/ResponsiveNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamayabi | Roohani Markaz",
  description: "Kamayabi Roohani Markaz - Quran-e-Kareem ki barkat aur kamil hifazat ke zariye apni zindagi mein asaniyaan paida karein.",
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
      <body className="font-sans min-h-screen bg-slate-50 text-slate-800 flex flex-col overflow-x-hidden selection:bg-green-700 selection:text-white">

        {/* Top Scrolling Marquee Bar */}
        <div className="fixed top-0 left-0 w-full z-[60] bg-green-950 text-green-100 py-2.5 border-b border-green-800/30 overflow-hidden flex items-center whitespace-nowrap shadow-md">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scrolling-text {
              display: flex;
              animation: marquee 40s linear infinite;
              min-width: 200%;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className="animate-scrolling-text text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
             <div className="flex shrink-0 items-center">
               <span className="mx-6">✦ Istikhara for Business</span>
               <span className="mx-6">✦ Love Marriage Istikhara</span>
               <span className="mx-6">✦ Pasand Ki Shadi Ka Wazifa</span>
               <span className="mx-6">✦ Karobar Ki Bandish Ka Tor</span>
               <span className="mx-6">✦ Kala Jadu Ka Roohani Ilaj</span>
               <span className="mx-6">✦ Gharelu Pareshani Ka Hal</span>
               <span className="mx-6">✦ Online Istikhara Center</span>
               <span className="mx-6">✦ Roohani Naqsh O Taveez</span>
             </div>
             <div className="flex shrink-0 items-center">
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
        </div>

        {/* Floating Navbar (Global Responsive) */}
        <ResponsiveNav />

        {/* PAGE CONTENT */}
        <main className="flex-1 w-full bg-white z-0 relative pt-0 mt-0 overflow-x-hidden">
          {children}
        </main>

        {/* ✦ Premium Cinematic Footer ✦ */}
        <footer className="bg-green-950 text-white relative pt-20 pb-10 overflow-hidden border-t border-green-900/50">
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-green-900/40 rounded-full blur-[140px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-900/30 rounded-full blur-[120px] opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
           <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

           <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 pb-16 border-b border-white/10 text-center sm:text-left">
                 
                 {/* 1. Branding & About */}
                 <div className="flex flex-col items-center sm:items-start space-y-6">
                    <Link href="/" className="inline-flex items-center gap-3 group px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-all duration-300">
                       <div className="w-5 h-5 bg-green-500 rotate-45 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse" />
                       <span className="text-2xl font-serif font-black tracking-widest uppercase">KAMAYABI</span>
                    </Link>
                    <p className="text-green-100/70 text-sm leading-relaxed font-medium max-w-xs mx-auto sm:mx-0">
                       Qurani rahnumai aur roohani elaj ke zariye hum aapki zindagi mein khushali aur barkat lane ke liye koshish karte hain. 
                    </p>
                    <div className="flex justify-center sm:justify-start gap-4">
                       {[1, 2, 3].map((s) => (
                         <div key={s} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-lg group">
                            <span className="text-xs group-hover:scale-125 transition-transform">✧</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* 2. Quick Navigation */}
                 <div className="flex flex-col items-center sm:items-start space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-green-500 flex items-center gap-2">
                       <span className="w-4 h-[1px] bg-green-500/50" /> Explore <span className="w-4 h-[1px] bg-green-500/50" />
                    </h4>
                    <ul className="space-y-4">
                       {[
                         { n: "Home Page", p: "/" },
                         { n: "Surah Collection", p: "/surah" },
                         { n: "Naqsh O Taveez", p: "/naqsh" },
                         { n: "Online Istikhara", p: "/istikhara" }
                       ].map((link) => (
                         <li key={link.n}>
                            <Link href={link.p} className="text-green-100/60 hover:text-white transition-all text-sm font-semibold hover:translate-x-1 inline-block">
                               {link.n}
                            </Link>
                         </li>
                       ))}
                    </ul>
                 </div>

                 {/* 3. Services / Wazaif */}
                 <div className="flex flex-col items-center sm:items-start space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-green-500 flex items-center gap-2">
                       <span className="w-4 h-[1px] bg-green-500/50" /> Services <span className="w-4 h-[1px] bg-green-500/50" />
                    </h4>
                    <ul className="space-y-4">
                       {[
                         "Shadi Mein Rukawat",
                         "Karobari Bandish",
                         "Nazar-e-Bad Ka Tor",
                         "Gharelu Na-Ittifaqi"
                       ].map((s) => (
                         <li key={s} className="text-green-100/60 hover:text-green-400 transition-all text-sm font-semibold cursor-pointer flex items-center gap-3 group justify-center sm:justify-start">
                            <span className="w-1.5 h-1.5 bg-green-800 rounded-full group-hover:bg-green-400 group-hover:scale-125 transition-all shadow-sm" />
                            {s}
                         </li>
                       ))}
                    </ul>
                 </div>

                 {/* 4. Direct Raabta (Contact) */}
                 <div className="flex flex-col items-center sm:items-start space-y-8 lg:pl-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-green-500 flex items-center gap-2">
                       <span className="w-4 h-[1px] bg-green-500/50" /> Contact <span className="w-4 h-[1px] bg-green-500/50" />
                    </h4>
                    <div className="w-full space-y-6">
                       <Link href="/contact" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-600/40 transition-all duration-300 shadow-xl active:scale-95 mx-auto sm:mx-0 max-w-[200px] sm:max-w-none">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(22,163,74,0.4)]">☏</div>
                             <div className="text-left">
                                <p className="text-[9px] font-black uppercase tracking-widest text-green-400 mb-0.5">Contact Us</p>
                                <p className="text-xs font-bold text-white">WhatsApp Now</p>
                             </div>
                          </div>
                          <span className="text-white transform group-hover:translate-x-1 transition-transform">→</span>
                       </Link>
                       <div className="relative">
                          <div className="absolute -left-2 top-0 text-2xl text-green-600 opacity-20">"</div>
                          <p className="text-green-100/50 text-[11px] font-bold leading-relaxed italic uppercase tracking-wider px-4">
                             Dua wo hathiyar hai jo maut ke ilawa har cheez ko taal sakti hai.
                          </p>
                          <div className="absolute -right-2 bottom-0 text-2xl text-green-600 opacity-20">"</div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Bottom Copyright Area */}
              <div className="pt-12 text-center flex flex-col items-center space-y-8">
                 <div className="flex items-center gap-8 opacity-40">
                    <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-green-500" />
                    <div className="w-3 h-3 rotate-45 border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                    <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-green-500" />
                 </div>
                 
                 <div className="space-y-4">
                    <p className="text-green-700 text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed">
                       © 2026 Kamayabi Roohani Markaz — Karachi, Pakistan. <br /> ALL RIGHTS RESERVED. 
                    </p>
                    <div className="h-[1px] w-12 bg-green-900/50 mx-auto" />
                    <p className="text-[9px] text-green-800/40 font-light tracking-[0.3em] uppercase">
                       Crafted with Faith & Devotion
                    </p>
                 </div>
              </div>
           </div>
        </footer>


      </body>
    </html>
  );
}
