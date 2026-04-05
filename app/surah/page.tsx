import Link from "next/link";

export default function SurahPage() {
   return (
      <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
         {/* Cinematic Background Elements */}
         <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-green-50 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 translate-x-1/4 -translate-y-1/4" />
         <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-emerald-50 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-30 -translate-x-1/4" />
         <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-green-50/60 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 translate-y-1/4" />

         {/* Decorative Dot Pattern */}
         <div className="absolute inset-0 opacity-[0.2] md:opacity-[0.4] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none" />

         <div className="max-w-7xl w-full flex flex-col gap-8 md:gap-12 pt-24 md:pt-32 relative z-10 mx-auto">

            {/* 1. Cinematic Hero Section */}
            <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 gap-6 md:gap-10 text-center relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group px-6">
               {/* Background Image Hero Overlay */}
               <div className="absolute inset-0 z-0 overflow-hidden">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover object-center opacity-40 group-hover:scale-110 transition-transform duration-[4000ms] pointer-events-none"
                  >
                    <source src="/surah navlink hero vedio.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white/95" />
               </div>


               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-50/40 font-serif text-[30vw] md:text-[22vw] opacity-40 select-none pointer-events-none font-bold z-0 leading-none">
                  قرآن
               </div>

               <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-800 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4 animate-fade-in shadow-sm">
                     <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-600 animate-pulse" />
                     Mubarak Qurani Rahnumai
                  </div>

                  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-green-950 font-bold max-w-5xl leading-[1.1] md:leading-[1] relative drop-shadow-sm">
                     Surah <br />
                     <span className="text-green-700 italic drop-shadow-md">Collection</span>
                  </h1>

                  <p className="text-base md:text-xl text-slate-600 max-w-3xl leading-relaxed font-light mt-2 md:mt-4 mx-auto">
                     Qurani aayat ki barkat se har mushkil ka hal. Humne aapke liye muntakhib karda surah ke un wazaif ki tafseel jama ki hai jo sadiyon se aazmooda hain.
                  </p>

                  <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6">
                     <div className="w-10 md:w-16 h-[2px] bg-green-200" />
                     <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-green-600 scale-75 animate-bounce" />
                     <div className="w-10 md:w-16 h-[2px] bg-green-200" />
                  </div>
               </div>
            </div>

            {/* 2. Detailed Surah Cards Grid */}
            <div className="space-y-12 md:space-y-16 py-8 md:py-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-green-100 pb-8 md:pb-10">
                  <div className="space-y-2 md:space-y-3">
                     <h2 className="text-3xl md:text-4xl font-serif font-black text-green-950">Muntakhib Surah</h2>
                     <p className="text-slate-500 font-medium text-sm md:text-base">Har suarat ki apni khaas fazeelat aur barkat hai.</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="px-4 md:px-6 py-2 md:py-3 rounded-xl bg-slate-50 border border-slate-100 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Total: 114 Surah</div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 w-full mt-6 md:mt-8">
                  {[
                     {
                        t: "Surah Yaseen",
                        subtitle: "Qalb-e-Quran (Heart of Quran)",
                        d: "Har qisam ki hajat aur mushkilat ke hal ke liye wazifa. Subah ke waqt tilawat se din bhar kaam mein asani peda hoti hai.",
                        fazilat: "Nijat-e-Pareshani",
                        img: "/surah yaseen.jpg"
                     },
                     {
                        t: "Surah Muzammil",
                        subtitle: "Solution for Difficulties",
                        d: "Gharelu pareshani aur sakoon-e-qalb ke liye nihayat barkat wali surah. Iske khaas wazaif ghaibi imdad faraham karte hain.",
                        fazilat: "Ghaibi Imdad",
                        img: "/surah muzammil.jpg"
                     },
                     {
                        t: "Surah Rahman",
                        subtitle: "The Most Gracious",
                        d: "Zehar se lay kar har bimari tak ki shifa ka roohani ilaj. Dil ke mareezon ke liye behad mufeed aur sakoon bakhsh.",
                        fazilat: "Shifa-e-Amraaz",
                        img: "/surah rahan.jpg"
                     },
                     {
                        t: "Surah Waqiah",
                        subtitle: "Abundance & Wealth",
                        d: "Rizq ki wusar aur ghareebi/tangi door karne ke liye ram-baan aamil. Maghrib ke baad padhne ki khas fazeelat hai.",
                        fazilat: "Wusat-e-Rizq",
                        img: "/surah waqia.jpg"
                     },
                     {
                        t: "Surah Mulk",
                        subtitle: "Protection in Grave",
                        d: "Raat ko sote waqt parhna qabar ke azab se bachata hai aur ALLAH ki makhsoos panah faraham karta hai.",
                        fazilat: "Hifazat-e-Qabar",
                        img: "/surah mulk.jpg"
                     },
                     {
                        t: "Surah Kahf",
                        subtitle: "Light of Guidance",
                        d: "Jumma ke din tilawat karne se pura hafta roshni rahti hai aur Fitna-e-Dajjal se hifazat milti hai.",
                        fazilat: "Noor-e-Hidayat",
                        img: "/surah kahf.jpg"
                     }
                  ].map((s, i) => (
                     <div key={i} className="group flex flex-col bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 hover:border-green-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_45px_90px_rgba(22,163,74,0.18)] transition-all duration-700 cursor-pointer relative overflow-hidden">
                        {/* Card Header Image */}
                        <div className="h-48 sm:h-64 md:h-64 w-full relative overflow-hidden group-hover:h-56 sm:group-hover:h-72 transition-all duration-700">
                           <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                           <div className="absolute bottom-4 left-6 md:bottom-6 md:left-10 p-3 md:p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl md:rounded-2xl">
                              <div className="px-3 md:px-4 py-1.5 bg-green-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full">{s.fazilat}</div>
                           </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-8 flex-1 relative bg-white">
                           {/* Index Number */}
                           <div className="absolute -bottom-6 -right-3 md:-bottom-8 md:-right-4 text-[8rem] sm:text-[12rem] font-serif font-black text-slate-50 group-hover:text-green-50/80 transition-colors duration-700 select-none pointer-events-none z-0 leading-none">
                              0{i + 1}
                           </div>

                           <div className="space-y-3 md:space-y-4 relative z-10">
                              <div className="space-y-1">
                                 <span className="text-[9px] md:text-[10px] font-bold text-green-600 uppercase tracking-[0.3em]">{s.subtitle}</span>
                                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-green-950 font-bold group-hover:text-green-900 transition-colors leading-tight">{s.t}</h2>
                              </div>
                              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mt-2 md:mt-4">{s.d}</p>
                           </div>

                           <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative z-10 pt-4">
                              <Link href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-slate-900 group-hover:bg-green-800 text-white rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 text-center">Raabta Karein</Link>
                              <div className="flex items-center gap-2 text-green-700 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                                 Explore Benefits <span>→</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* 3. Kaam Ka Tariqa (Method) Section */}
            <section className="py-16 md:py-24 bg-green-950 rounded-[2.5rem] md:rounded-[4rem] text-white my-8 md:my-12 relative overflow-hidden shadow-2xl px-6">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:25px_25px] md:bg-[size:30px_30px]" />
               <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-green-500/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />

               <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
                  <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                     <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-green-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                        The Sacred Process
                     </div>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">Kaam Ka Behtareen <br /><span className="text-green-400 italic">Methodology</span></h2>
                     <p className="text-green-100/70 text-base md:text-lg leading-relaxed font-light">Surat aur wazaif ka asar tab hi hota hai jab unko sahi tariqe, pakizgi aur kamil yaqeen ke saath kiya jaye. Humari rahnumai hamesha Sunnat ke mutabiq hoti hai.</p>

                     <div className="space-y-6 md:space-y-8 pt-4">
                        {[
                           { step: "01", t: "Wuzu o Pakizgi", d: "Sab se pehle bawuzu hon aur kisi pur sakoon jagah ka intekhab karein." },
                           { step: "02", t: "Darood Shareef", d: "Har wazife se pehle aur baad mein kam se kam 3 baar Darood Shareef parhein." },
                           { step: "03", t: "Kamil Yaqeen", d: "Dua ya wazifa krte waqt poora dhiyan ALLAH ki taraf rakhein." },
                        ].map((step, i) => (
                           <div key={i} className="flex gap-4 md:gap-6 items-start group">
                              <div className="text-2xl md:text-3xl font-serif text-green-500/50 font-black group-hover:text-green-400 group-hover:scale-110 transition-all">{step.step}</div>
                              <div>
                                 <h4 className="text-lg md:text-xl font-bold font-serif text-white">{step.t}</h4>
                                 <p className="text-green-200/60 text-xs md:text-sm mt-1">{step.d}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2 relative">
                     <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative shadow-2xl">
                        <img src="/surah image.jpg" alt="Recitation" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-green-950/60" />
                        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 text-center flex-col">
                           <span className="text-4xl md:text-5xl text-green-400 mb-4 md:mb-6 font-serif italic">✧</span>
                           <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 md:mb-4">Roohani Sukoon</h3>
                           <p className="text-green-200/80 text-xs md:text-sm leading-relaxed max-w-sm">"Beshaq ALLAH ke zikar hi mein dilon ka itminan hai."</p>
                           <div className="mt-6 md:mt-8 px-5 py-2 border border-white/20 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-green-400 backdrop-blur-md italic">Surat-ur-Ra'd - 28</div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. Quran-e-Pak Ki Barkataan (Benefits) Section */}
            <div className="py-16 md:py-24 text-center space-y-12 md:space-y-16 px-4">
               <div className="space-y-4 md:space-y-6">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-green-950 font-bold">Quran-e-Pak Ki <br className="md:hidden" /> <span className="text-green-700 italic border-b-4 border-green-100">Barkataan</span></h2>
                  <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Quran sirf hidayat hi nahin, balke humari zindagi ki har pareshani ka mukammal shifa hai.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                  {[
                     { t: "Har Mushkil Ka Hal", d: "Asaani aur raah", icon: "✧" },
                     { t: "Shifa-e-Amraaz", d: "Jismani o roohani", icon: "✚" },
                     { t: "Ghar Mein Barkat", d: "Sukoon o itminan", icon: "🏠" },
                     { t: "Nazar-e-Bad Se Panah", d: "Kamil hifazat", icon: "🛡️" },
                  ].map((b, i) => (
                     <div key={i} className="p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-slate-50 border border-slate-100 group transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-green-200 text-center space-y-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl mx-auto flex items-center justify-center text-xl md:text-2xl shadow-sm text-green-600 group-hover:scale-110 transition-transform">{b.icon}</div>
                        <h3 className="font-serif text-lg md:text-xl text-green-950 font-bold">{b.t}</h3>
                        <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{b.d}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* 5. Final CTA Section */}
            <div className="flex flex-col items-center gap-10 md:gap-12 py-16 md:py-24 border-t border-green-50 mb-8 md:mb-12 px-6">
               <div className="text-center space-y-3 md:space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-green-950 font-bold">Abhi Rabita Karein aur Mashwara Leine</h3>
                  <p className="text-slate-500 font-light text-sm md:text-base max-w-lg mx-auto">Aapka masla chahe kitna hi bada kyun na ho, Qurani rahnumai hamesha rasta dikhati hai.</p>
               </div>

               <Link href="/contact" className="w-full sm:w-auto group flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-5 bg-green-900 text-white rounded-[1.5rem] md:rounded-[2rem] hover:bg-green-800 transition-all shadow-[0_20px_40px_rgba(20,83,45,0.2)] active:scale-95">
                  <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Direct WhatsApp Raabta</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </Link>

               <footer className="w-full text-center pt-16 md:pt-20 border-t border-green-50/50">
                  <div className="flex flex-col items-center gap-4">
                     <span className="text-green-700 font-serif font-black text-xl md:text-2xl tracking-tighter">Kamayabi</span>
                     <p className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] flex flex-wrap justify-center items-center gap-4">
                        <span className="hidden sm:inline w-8 h-[1px] bg-slate-200" />
                        Roohani Markaz — © 2026
                        <span className="hidden sm:inline w-8 h-[1px] bg-slate-200" />
                     </p>
                  </div>
               </footer>
            </div>

         </div>
      </div>
   );
}
