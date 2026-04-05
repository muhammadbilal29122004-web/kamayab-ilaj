import Link from "next/link";

export default function SurahPage() {
  return (
    <div className="min-h-screen bg-obsidian text-gold-light font-sans flex items-center justify-center p-4 lg:p-8">
      <div className="max-w-6xl w-full flex flex-col gap-12 pt-4">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full h-16 pt-2 pb-6 border-b border-white/[0.02]">
          <div className="flex items-center gap-8 xs:gap-4 flex-wrap">
            <Link href="/" className="w-6 h-6 bg-gold-light rotate-45 shadow-[0_0_10px_rgba(223,191,120,0.5)] cursor-pointer" />
            <div className="flex items-center gap-6 xs:gap-6 flex-wrap text-sm uppercase tracking-widest text-gold font-medium">
              <Link href="/" className="text-gold-light font-bold text-lg hidden sm:block hover:text-white transition-colors">Kamayab</Link>
              <span className="cursor-pointer text-white border-b border-gold pb-1 transition-colors">Surah</span>
              <Link href="/naqsh" className="cursor-pointer hover:text-white transition-colors">Naqsh</Link>
              <Link href="/taveez" className="cursor-pointer hover:text-white transition-colors">Taveez</Link>
              <Link href="/istikhara" className="cursor-pointer hover:text-white transition-colors">Istikhara</Link>
            </div>
          </div>
          <div className="h-10 px-6 rounded-full border border-gold-dark/60 flex items-center justify-center p-1 bg-obsidian-card cursor-pointer hover:bg-gold-dark/20 transition-colors">
            <span className="text-gold-light text-sm font-semibold tracking-wide">Raabta Karein</span>
          </div>
        </nav>

        {/* Content */}
        <div className="flex flex-col items-center justify-center py-16 gap-8">
           <h1 className="text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark font-bold text-center">
             Surah - Qurani Wazaif
           </h1>
           <p className="text-lg text-gold-dark/80 max-w-2xl text-center leading-relaxed">
             Yahan mukhtalif Qurani aayat aur surah ki tafseelat di gayi hain, jo har mushkil se nijat, sakoon aur barkat ke liye parhi ja sakti hain. Humari rahnumai aapki behtari ke liye hai.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 pb-12 border-b border-white/[0.02]">
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 bg-gradient-to-br from-[#298c56] to-[#1c663e] rounded-full flex items-center justify-center shadow-[0_0_15px_#298c56] mb-2">
                    <span className="text-white font-serif font-bold italic text-xl">Y</span>
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Surah Yaseen</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Har qisam ki hajat aur mushkilat ke hal ke liye wazifa. Subah ke waqt tilawat se din bhar kaam mein asani peda hoti hai.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 bg-gradient-to-br from-[#298c56] to-[#1c663e] rounded-full flex items-center justify-center shadow-[0_0_15px_#298c56] mb-2">
                    <span className="text-white font-serif font-bold italic text-xl">M</span>
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Surah Muzammil</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Gharelu pareshani aur sakoon-e-qalb ke liye nihayat barkat wali surah. Iske khaas wazaif ghaibi imdad faraham karte hain.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 bg-gradient-to-br from-[#298c56] to-[#1c663e] rounded-full flex items-center justify-center shadow-[0_0_15px_#298c56] mb-2">
                    <span className="text-white font-serif font-bold italic text-xl">R</span>
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Surah Rahman</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Zehar se lay kar har bimari tak ki shifa ka roohani ilaj. Dil ke mareezon ke liye behad mufeed.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 bg-gradient-to-br from-[#298c56] to-[#1c663e] rounded-full flex items-center justify-center shadow-[0_0_15px_#298c56] mb-2">
                    <span className="text-white font-serif font-bold italic text-xl">W</span>
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Surah Waqiah</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Rizq ki wusar aur ghareebi/tangi door karne ke liye ram-baan aamil. Maghrib ke baad padhne ki khas fazeelat hai.</p>
              </div>
           </div>
           
           <Link href="/" className="mt-8 text-gold-dark hover:text-gold-light transition-colors uppercase tracking-widest text-sm font-bold border-b-2 border-transparent hover:border-gold-light pb-1"> 
             ← Wapas Home Par Jayen 
           </Link>
        </div>

        {/* Footer */}
        <div className="text-center pb-8 border-white/[0.02] pt-2">
          <p className="text-gold-dark opacity-80 italic flex items-center justify-center gap-3 font-serif lg:text-lg">
            <span>✧</span>
            <span className="tracking-widest">Kamayab — Roohani Ilaj, Surah, Naqsh aur Taveez</span>
            <span>✧</span>
          </p>
        </div>

      </div>
    </div>
  );
}
