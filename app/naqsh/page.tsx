import Link from "next/link";

export default function NaqshPage() {
  return (
    <div className="min-h-screen bg-obsidian text-gold-light font-sans flex items-center justify-center p-4 lg:p-8">
      <div className="max-w-6xl w-full flex flex-col gap-12 pt-4">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full h-16 pt-2 pb-6 border-b border-white/[0.02]">
          <div className="flex items-center gap-8 xs:gap-4 flex-wrap">
            <Link href="/" className="w-6 h-6 bg-gold-light rotate-45 shadow-[0_0_10px_rgba(223,191,120,0.5)] cursor-pointer" />
            <div className="flex items-center gap-6 xs:gap-6 flex-wrap text-sm uppercase tracking-widest text-gold font-medium">
              <Link href="/" className="text-gold-light font-bold text-lg hidden sm:block hover:text-white transition-colors">Kamayab</Link>
              <Link href="/surah" className="cursor-pointer hover:text-white transition-colors">Surah</Link>
              <span className="cursor-pointer text-white border-b border-gold pb-1 transition-colors">Naqsh</span>
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
             Naqsh - Roohani Asraar
           </h1>
           <p className="text-lg text-gold-dark/80 max-w-2xl text-center leading-relaxed">
             Roohaniyat ki roshni mein mukhtalif hawaale se tayar karda Naqsh. Muhabbat, hifazat, aur karobar ki taraqqi ke liye mukammal aamaal aur asraar.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 pb-12 border-b border-white/[0.02]">
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 border border-gold border-dashed bg-obsidian flex items-center justify-center rotate-45 mb-4 shadow-[0_0_15px_#2a6cb8]">
                    <div className="w-4 h-4 bg-jewel-blue rotate-45" />
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Naqsh e Sulemani</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Zabardast asar aur jald barkat ka sabab. Dunyawi maqasid aur izzat panay ke liye bhtreen aur asuda aamal.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 border border-gold border-dashed bg-obsidian flex items-center justify-center rotate-45 mb-4 shadow-[0_0_15px_#2a6cb8]">
                    <div className="w-4 h-4 bg-jewel-blue rotate-45" />
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Naqsh Hub</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Miya biwi mein muhabbat paida karne, ya ruthe hue ko mananay ke liye aazmooda roohani naqsh.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 border border-gold border-dashed bg-obsidian flex items-center justify-center rotate-45 mb-4 shadow-[0_0_15px_#2a6cb8]">
                    <div className="w-4 h-4 bg-jewel-blue rotate-45" />
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Naqsh Bandish Khulawa</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Har qisam ki karobari, ya jismani bandish torhnay ke liye khas al khas muakkalat wala naqsh.</p>
              </div>
              
              <div className="p-8 border border-gold-dark/30 rounded-2xl bg-obsidian-card flex flex-col gap-4 group hover:border-gold-dark/80 transition-all cursor-pointer shadow-xl shadow-black/40">
                 <div className="w-10 h-10 border border-gold border-dashed bg-obsidian flex items-center justify-center rotate-45 mb-4 shadow-[0_0_15px_#2a6cb8]">
                    <div className="w-4 h-4 bg-jewel-blue rotate-45" />
                 </div>
                 <h2 className="text-3xl text-gold-light font-serif group-hover:text-gold transition-colors">Naqsh e Hifazat</h2>
                 <p className="text-gold-dark/70 text-base leading-relaxed">Jadu toune, asayb, aur nazar e bad se mufazat ke liye makhsoos tayyari jis pe hisar kiya gaya ho.</p>
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
