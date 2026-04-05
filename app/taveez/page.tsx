import Link from "next/link";

export default function TaveezPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center p-4 lg:p-8 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-green-50 rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-50 rounded-full blur-[100px] pointer-events-none opacity-30 -translate-x-1/4 translate-y-1/4" />
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
                <source src="/taveez hero vedio.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white/95" />
           </div>

           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-50/40 font-serif text-[20vw] opacity-40 select-none pointer-events-none font-bold">
              تَعْوِیذ
           </div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-800 text-[11px] font-black uppercase tracking-[0.4em] mb-4 shadow-sm animate-fade-in backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                 Hifazat o Barkat
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-serif text-green-950 font-bold max-w-5xl leading-[1] relative drop-shadow-sm">
                Taveez <br />
                <span className="text-green-700 italic drop-shadow-md">Mubarak</span>
              </h1>
              
              <p className="text-xl text-slate-700/80 max-w-3xl leading-relaxed font-medium mt-4 mx-auto group-hover:text-slate-900 transition-colors">
                Bande ki hifazat aur qismat kholne wale khas roohani taveezat jis pe Quran o Hadees ke anwar ataar aur wazaif parhay gaye hon.
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                 <div className="w-24 h-[1.5px] bg-green-300/60" />
                 <div className="w-4 h-4 rounded-full border border-green-600 flex items-center justify-center scale-90 animate-bounce">
                    <div className="w-1 h-1 bg-green-600 rounded-full shadow-[0_0_8px_rgba(22,163,74,0.6)]" />
                 </div>
                 <div className="w-24 h-[1.5px] bg-green-300/60" />
              </div>
           </div>
        </div>


        {/* 2. Expanded Taveez Grid */}
        <div className="space-y-16 py-12">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-green-100 pb-10 text-center md:text-left">
              <div className="space-y-3">
                 <h2 className="text-4xl font-serif font-black text-green-950">Makhsoos Taveezat</h2>
                 <p className="text-slate-500 font-medium">Har taveez ek makhsoos maqsad aur tahaffuz ke liye banaya gaya hai.</p>
              </div>
              <Link href="/contact" className="px-8 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-colors">Custom Taveez Request</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
             {[
               { 
                 t: "Nazar-e-Bad Taveez", 
                 subtitle: "Evil Eye Protection",
                 d: "Buri nazar aur hasad karne walon ke shar se bachne ke liye nihayat mo'assar aur aazmooda roohani hifazat.",
                 fazilat: "Nazar se Hifazat",
                 icon: <><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
               },
               { 
                 t: "Wusat-e-Rizq Taveez", 
                 subtitle: "Wealth Abundance",
                 d: "Karobar mein barkat aur rizq mein izafay ke liye makhsoos Qurani aayat se tayar karda roohani tohfa.",
                 fazilat: "Rizq Mein Barkat",
                 icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.633 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.633-1M12 16v1" />
               },
               { 
                 t: "Hifazat-e-Safar", 
                 subtitle: "Safe Travel",
                 d: "Safar ke dauran har qisam ke hadsat aur nagahani mushkilat se bachne ke liye Allah ki panah ka zariya.",
                 fazilat: "Mehfooz Safar",
                 icon: <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               },
               { 
                 t: "Shifa-e-Jismani", 
                 subtitle: "Physical Healing",
                 d: "Purani bimariyon aur jismani takaleef se nijat ke liye roohani ilaj jo shifa ka sabab banta hai.",
                 fazilat: "Sehat o Tandurusti",
                 icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               },
               { 
                 t: "Mian Biwi Muhabbat", 
                 subtitle: "Marital Love",
                 d: "Gharelu jhaghron ka khatma aur miyan biwi ke darmian shadeed muhabbat o ittehad paida karne ke liye.",
                 fazilat: "Ghar Mein Sukoon",
                 icon: <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
               },
               { 
                 t: "Imtihan Me Kamyabi", 
                 subtitle: "Exam Success",
                 d: "Zehni kushaish aur imtihanat mein numayan kamyabi hasil karne ke liye tulaba ke liye khas roohani madad.",
                 fazilat: "Zehni Tawanai",
                 icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               }
             ].map((s, i) => (
               <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-green-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(22,163,74,0.12)] transition-all duration-700 flex flex-col gap-6 cursor-pointer relative overflow-hidden">
                 {/* Decorative background number */}
                 <div className="absolute top-4 right-4 text-7xl font-serif font-black text-slate-50 group-hover:text-green-50/50 transition-colors duration-500 select-none">
                    {i + 1}
                 </div>
                 
                 <div className="w-14 h-14 bg-green-950 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-green-700 group-hover:rotate-[360deg] transition-all duration-700 relative z-10">
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                     {s.icon}
                   </svg>
                 </div>
                 
                 <div className="space-y-3 relative z-10">
                    <div className="space-y-0.5">
                       <span className="text-[9px] font-bold text-green-600 uppercase tracking-[0.3em]">{s.subtitle}</span>
                       <h2 className="text-2xl font-serif text-green-950 font-bold group-hover:text-green-900 transition-colors">{s.t}</h2>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{s.d}</p>
                 </div>
                 
                 <div className="mt-4 pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest">{s.fazilat}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-900 group-hover:text-white transition-all">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 3. Methodology & Etiquette Section */}
        <section className="py-24 bg-green-950 rounded-[4rem] text-white my-12 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:30px_30px]" />
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
           
           <div className="px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                 <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-green-300 text-[10px] font-bold uppercase tracking-widest">
                    Sacred Methodology
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Taveez Pehenne <br /><span className="text-green-400 italic">Ka Shara'i Adab</span></h2>
                 <p className="text-green-100/70 text-lg leading-relaxed font-light">Roohani wazaif aur taveezat ki taseer unke ehteram aur adab se wabasta hai. Humari rahnumai mein inka sahi tariqa ye hai:</p>
                 
                 <div className="space-y-8 pt-4">
                    {[
                      { step: "01", t: "Pakizgi", d: "Taveez pehente waqt pak saaf hona behtar hai, bawuzu rahein to nure-ala-nur hai." },
                      { step: "02", t: "Gale Ya Bazu", d: "Isko chahe gale mein pehnein ya seedhay bazu par bandhein dono jaiz hain." },
                      { step: "03", t: "Kamil Yaqeen", d: "Hamesha ye yaqeen rakhein ke shifa aur hifazat sirf Allah ki taraf se hai." },
                    ].map((step, i) => (
                       <div key={i} className="flex gap-6 items-start group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-serif text-green-400 font-bold group-hover:bg-green-500 group-hover:text-white transition-all shadow-lg">{step.step}</div>
                          <div className="flex-1">
                             <h4 className="text-xl font-bold font-serif text-white">{step.t}</h4>
                             <p className="text-green-200/60 text-sm mt-1">{step.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-1/2 relative w-full h-[600px] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <img src="/taveez image.jpg" alt="Spiritual Protection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/40 to-transparent" />
                 <div className="absolute inset-x-10 bottom-10 space-y-4">
                    <div className="w-12 h-1 bg-green-400 rounded-full" />
                    <h3 className="text-4xl font-serif font-bold text-white leading-tight">Kamil Panah <br />Aur Barkat</h3>
                    <p className="text-green-100/70 text-sm leading-relaxed">Roohaniyat ki dunya mein ye taveezat aapki zindagi mein aik nayi tabdeeli aur sukoon ka pesh-khaima sabit hon ge.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Roohani Barkat (Benefits) List Section */}
        <div className="py-24 text-center space-y-20">
           <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif text-green-950 font-bold">Roohani <span className="text-green-700 italic">Barkataan</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Mushkilat koi bhi hon, Allah ka kalam har pareshani ka behtareen rasta dikhata hai.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
              {[
                { t: "Khair o Afiyat", d: "Har ghaibi mushkil se hifazat", icon: "✨" },
                { t: "Sukoon-e-Qalb", d: "Dil ke itminan ke liye", icon: "💎" },
                { t: "Kamyabi o Taraqqi", d: "Karobar o imtihan mein", icon: "🚀" },
                { t: "Dua Ki Qubooliyat", d: "Wazaif ke saath taseer", icon: "🤲" },
              ].map((b, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-green-200 text-center space-y-4">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-500 mb-2">{b.icon}</div>
                    <h3 className="font-serif text-xl text-green-950 font-bold">{b.t}</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{b.d}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 5. Final CTA Section */}
        <div className="flex flex-col items-center gap-12 py-24 border-t border-green-50 mb-12">
          <div className="text-center space-y-4 px-4">
             <h3 className="text-4xl font-serif text-green-950 font-bold">Apna Roohani Tohfa Mangwaein</h3>
             <p className="text-slate-500 font-light max-w-lg mx-auto">Aapke masle ke liye makhsoos Qurani aayat parh kar taveez tayar kiya jayega jo in-sha-Allah aapki pareshani khatam karega.</p>
          </div>
          
          <Link href="/contact" className="group flex items-center gap-6 px-12 py-6 bg-green-900 text-white rounded-[2.5rem] hover:bg-green-800 transition-all shadow-xl active:scale-95">
             <span className="text-sm font-black uppercase tracking-[0.3em]">Hukum Karein / WhatsApp</span>
             <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>

          <footer className="w-full text-center pt-24 border-t border-green-50/50">
             <div className="flex flex-col items-center gap-6">
                <span className="text-green-700 font-serif font-black text-3xl tracking-tighter">Kamayabi</span>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-slate-200" />
                  Mubarak Wazaif & Taveezat Collections
                  <span className="w-8 h-[1px] bg-slate-200" />
                </p>
             </div>
          </footer>
        </div>

      </div>
    </div>
  );
}
