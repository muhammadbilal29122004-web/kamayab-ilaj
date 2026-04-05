import Link from "next/link";

export default function NaqshPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center p-4 lg:p-8 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-green-50 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-emerald-50 rounded-full blur-[100px] pointer-events-none opacity-30 translate-x-1/4" />
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col gap-12 pt-32 relative z-10 mx-auto">
        

        {/* 1. Cinematic Hero Section */}
        <div className="flex flex-col items-center justify-center py-24 lg:py-32 gap-10 text-center relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] group px-6">
           {/* Background Video Overlay */}
           <div className="absolute inset-0 z-0 overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover object-center opacity-40 group-hover:scale-110 transition-transform duration-[4000ms] pointer-events-none"
              >
                <source src="/naqsh hero vedio.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white/95" />
           </div>

           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-50/40 font-serif text-[20vw] opacity-40 select-none pointer-events-none font-bold">
              نَقْش
           </div>
           
           <div className="relative z-10 space-y-6 flex flex-col items-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-800 text-[11px] font-black uppercase tracking-[0.4em] mb-4 shadow-sm animate-fade-in backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                 Asraar-e-Roohaniyat
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-serif text-green-950 font-bold max-w-5xl leading-[1] relative drop-shadow-sm">
                Naqsh <br />
                <span className="text-green-700 italic drop-shadow-md">Mubarak</span>
              </h1>
              
              <p className="text-xl text-slate-700/80 max-w-3xl leading-relaxed font-medium mt-4 mx-auto group-hover:text-slate-900 transition-colors">
                Roohaniyat ki dunya ke makhsoos asraar aur raaz. Humare tayar karda Naqsh-e-Mubarak har mushkil ke hal aur kamil hifazat ke liye sadiyon se aazmooda hain.
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                 <div className="w-12 h-[2px] bg-green-300/60" />
                 <div className="w-4 h-4 rounded-full border-2 border-green-600 scale-75 animate-bounce" />
                 <div className="w-12 h-[2px] bg-green-300/60" />
              </div>
           </div>
        </div>


        {/* 2. Expanded Naqsh Grid */}
        <div className="space-y-16 py-12">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-green-100 pb-10 text-center md:text-left">
              <div className="space-y-3">
                 <h2 className="text-4xl font-serif font-black text-green-950">Mashhoor Naqsh-e-Aamaal</h2>
                 <p className="text-slate-500 font-medium">Har Naqsh ki apni kamil quwat aur roohani taseer hoti hai.</p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                 <div className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400">Available: 40+ Types</div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full mt-8">
             {[
               { 
                 t: "Naqsh-e-Sulemani", 
                 subtitle: "Zabardast Asar",
                 d: "Izzat panay, dunya ke kamon mein asani aur kamil ghaliba hasil karne ke liye sadiyon se chala aa raha naqsh.",
                 fazilat: "Fatah-o-Kamyabi",
                 icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               },
               { 
                 t: "Naqsh-e-Hub (Love)", 
                 subtitle: "Muhabbat o Ittehad",
                 d: "Mian biwi mein shadeed muhabbat, ruthe hue ko mananay aur ghar mein ittehad paida karne ka aazmooda hal.",
                 fazilat: "Dil o Jaan Ka Sukoon",
                 icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               },
               { 
                 t: "Naqsh-e-Bandish Khushada", 
                 subtitle: "Taqdeer Khulawa",
                 d: "Karobar, rishton ya kisi bhi kisam ki bandish ko jarr se khatam karne aur rukawaton ko hatanay ke liye khas naqsh.",
                 fazilat: "Rukawaton Ka Hal",
                 icon: <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2z" />
               },
               { 
                 t: "Naqsh-e-Hifazat-e-Kamil", 
                 subtitle: "Protection Shield",
                 d: "Jadu toune, asayb aur nazar-e-bad se hamesha ke liye hifazat ka kamil roohani qila jo aapke saath rahega.",
                 fazilat: "Kamil Panah",
                 icon: <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               },
               { 
                 t: "Naqsh-e-Barkat-e-Karobar", 
                 subtitle: "Business Prosperity",
                 d: "Dukan aur factory mein khair o barkat aur grahakon ki kasrat ke liye makhsoos mawaakalat se bhara naqsh.",
                 fazilat: "Khair o Barkat",
                 icon: <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
               },
               { 
                 t: "Naqsh-e-Shifa-e-Amraz", 
                 subtitle: "Health & Healing",
                 d: "Sadiyon purani aur la-ilaaj bimariyon se nijat ke liye roohani shifa ka zariya jo boht se mareezon par aazmaaya gaya.",
                 fazilat: "Roohani Shifa",
                 icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               }
             ].map((s, i) => (
               <div key={i} className="group p-10 lg:p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-green-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(22,163,74,0.15)] transition-all duration-700 flex flex-col gap-8 cursor-pointer relative overflow-hidden">
                 {/* Decorative element */}
                 <div className="absolute top-0 right-0 w-48 h-48 bg-green-50/50 rounded-bl-[6rem] -mr-16 -mt-16 group-hover:bg-green-600/10 transition-colors duration-700 pointer-events-none" />
                 
                 {/* Background Index */}
                 <div className="absolute -bottom-8 -right-4 text-[12rem] font-serif font-black text-slate-50 group-hover:text-green-50/80 transition-colors duration-700 select-none pointer-events-none">
                    0{i + 1}
                 </div>

                 <div className="flex items-center justify-between relative z-10 w-full">
                    <div className="w-16 h-16 bg-green-950 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl transform group-hover:rotate-[360deg] group-hover:bg-green-700 transition-all duration-700">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {s.icon}
                      </svg>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-800 text-[10px] font-bold uppercase tracking-widest">{s.fazilat}</div>
                 </div>
                 
                 <div className="space-y-4 relative z-10">
                    <div className="space-y-1">
                       <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.3em]">{s.subtitle}</span>
                       <h2 className="text-4xl font-serif text-green-950 font-bold group-hover:text-green-900 transition-colors leading-tight">{s.t}</h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed font-light mt-4 max-w-sm">{s.d}</p>
                 </div>
                 
                 <div className="mt-8 flex items-center gap-6 relative z-10">
                    <Link href="/contact" className="px-8 py-3 bg-slate-900 group-hover:bg-green-800 text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg">Naqsh Mangwaein</Link>
                    <div className="flex items-center gap-2 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                      Detail Report <span>→</span>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 3. Methodology Section */}
        <section className="py-24 bg-green-950 rounded-[4rem] text-white my-12 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:30px_30px]" />
           
           <div className="px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                 <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                    Methodology & Usage
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Naqsh Raknay Ka <br /><span className="text-green-400 italic">Sahi Tariqa</span></h2>
                 <p className="text-green-100/70 text-lg leading-relaxed font-light">Naqsh ki barkat tab hi khulth ha jab usay makhsoos adab ke saath rakha jaye. Hamaray Naqsh-e-Mubarik ko istemal karne ka mukammal shari'i tariqa yahan darj hai.</p>
                 
                 <div className="grid grid-cols-1 gap-8 pt-4">
                    {[
                      { step: "01", t: "Pass Rakhna", d: "Naqsh ko hamesha apne pass rakhain (Purse ya Pocket) ya ghar ke makhsoos kone mein laga dein." },
                      { step: "02", t: "Adaab o Paakizgi", d: "Naqsh ke saath kabhi napak jagah na jayein aur koshish karein ke bawuzu rahein." },
                      { step: "03", t: "Adab o Ehteram", d: "Subah ke waqt Naqsh dekh kar ALLAH ka shukr ada karein aur dua maangein." },
                    ].map((step, i) => (
                       <div key={i} className="flex gap-6 items-start group">
                          <div className="text-3xl font-serif text-green-500/50 font-black group-hover:text-green-400 transition-all">{step.step}</div>
                          <div>
                             <h4 className="text-xl font-bold font-serif text-white">{step.t}</h4>
                             <p className="text-green-200/60 text-sm mt-1">{step.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-1/2 relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                 <img src="/naqsh image.jpg" alt="Naqsh Ritual" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-green-950/60 backdrop-blur-xs" />
                 <div className="absolute inset-x-8 bottom-8 p-8 backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl text-center">
                    <span className="inline-block text-4xl text-green-400 mb-4 animate-bounce">◈</span>
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">Aitmad-o-Yaqeen</h3>
                    <p className="text-green-200 uppercase tracking-[0.2em] text-[10px] font-bold">Har Naqsh ki taseer ALLAH ki raza par munhasir hai.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Rules of Etiquette Section */}
        <div className="py-24 text-center space-y-16">
           <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif text-green-950 font-bold">Naqsh Ke <span className="text-green-700 italic border-b-4 border-green-100">Adaab</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Naqsh roohaniyat ki dunya ka wo raaz hai jo adab ke baghair taseer nahi karta.</p>
           </div>
           
           <div className="grid grid-cols-1 md:text-3xl text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                 {[
                   { t: "Sacred Handling", d: "Zuroori Ehteram", icon: "✨" },
                   { t: "Faith & Belief", d: "Kamil Yaqeen", icon: "🗝️" },
                   { t: "Purity Checks", d: "Paakizgi Ka Khayal", icon: "💎" },
                 ].map((b, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-green-200 text-center space-y-4">
                       <div className="w-14 h-14 bg-white rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-sm text-green-600 group-hover:rotate-12 transition-transform">{b.icon}</div>
                       <h3 className="font-serif text-2xl text-green-950 font-bold">{b.t}</h3>
                       <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{b.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 5. Final CTA */}
        <div className="flex flex-col items-center gap-12 py-24 border-t border-green-50 mb-12">
          <div className="text-center space-y-4">
             <h3 className="text-4xl font-serif text-green-950 font-bold">Abhi Apna Makhsoos Naqsh Banwaein</h3>
             <p className="text-slate-500 font-light max-w-lg mx-auto">Aapki pareshani ke liye makhsoos Naqsh-e-Mubarak tayar kiya jayega jo aapko roohani asani faraham karega.</p>
          </div>
          
          <Link href="/contact" className="group flex items-center gap-6 px-12 py-5 bg-green-900 text-white rounded-3xl hover:bg-green-800 transition-all shadow-xl active:scale-95">
             <span className="text-sm font-black uppercase tracking-[0.3em]">Hukum Karein / WhatsApp</span>
             <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>

          <footer className="w-full text-center pt-24 opacity-60">
             <p className="text-slate-400 text-xs font-serif italic tracking-[0.3em] uppercase">Kamayabi — The House of Spiritual Healing & Naqsh collection</p>
          </footer>
        </div>

      </div>
    </div>
  );
}
