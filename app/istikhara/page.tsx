import Link from "next/link";

export default function IstikharaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center p-4 lg:p-8 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-green-50 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-1/4 -translate-y-1/4 shadow-inner" />
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-emerald-50 rounded-full blur-[100px] pointer-events-none opacity-30 translate-x-1/4 translate-y-1/4" />
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
                className="w-full h-full object-cover object-center opacity-45 group-hover:scale-110 transition-transform duration-[4000ms] pointer-events-none"
              >
                <source src="/istikhara hero vedio.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white/95" />
           </div>

           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-50/40 font-serif text-[18vw] opacity-40 select-none pointer-events-none font-bold">
              اِسْتِخَارہ
           </div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-800 text-[11px] font-black uppercase tracking-[0.4em] mb-4 shadow-sm animate-fade-in backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                 Allah Ki Raza
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-serif text-green-950 font-bold max-w-5xl leading-[1] relative drop-shadow-sm">
                Online <br />
                <span className="text-green-700 italic drop-shadow-md">Istikhara</span>
              </h1>
              
              <p className="text-xl text-slate-700/80 max-w-3xl leading-relaxed font-medium mt-4 mx-auto group-hover:text-slate-900 transition-colors">
                  Koi bada faisla karne se pehlay Alllah ki raza par chornay ka amal. Is raste mein kamyabi aur hidayat kamil hai.
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                 <div className="w-16 h-[1.5px] bg-green-300/60" />
                 <div className="w-6 h-6 rounded-full border-2 border-green-600 animate-spin-slow flex items-center justify-center scale-90">
                    <div className="w-1 h-3 bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.6)]" />
                 </div>
                 <div className="w-16 h-[1.5px] bg-green-300/60" />
              </div>
           </div>
        </div>


        {/* 2. Process / How it Works Section */}
        <div className="py-24 space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-green-950">Humara Tariqa-e-Kaar</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">Online Istikhara karwana nihayat asaan hai. Aap details darj karein, baki roohani zimmedari humari hai.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
              {[
                { step: "01", t: "Details Bharain", d: "Apna naam, walida ka naam aur maqsad darj karein." },
                { step: "02", t: "Roohani Amal", d: "Humare hazraat aap ke liye makhsoos namaz-e-istikhara parhein ge." },
                { step: "03", t: "Ishar-e-Qalb", d: "Allah ki taraf se jo bhi ishara ya rehnumai hogi note ki jayegi." },
                { step: "04", t: "Result Receive", d: "Aapko WhatsApp ya email par mukammal report mil jayegi." },
              ].map((step, i) => (
                 <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-green-200 hover:shadow-xl transition-all duration-500 text-center space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-100/50 rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 bg-green-950 text-white rounded-xl mx-auto flex items-center justify-center text-lg font-serif font-bold group-hover:scale-110 group-hover:bg-green-700 transition-all">{step.step}</div>
                    <h4 className="text-xl font-bold font-serif text-green-950">{step.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.d}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 3. Istikhara Service Card Section */}
        <section className="py-24 bg-green-950 rounded-[4rem] text-white my-12 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:30px_30px]" />
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
           
           <div className="px-10 lg:px-24 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-12">
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                       Divine Guidance
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">Makhsoos Maqasid <br /><span className="text-green-400 italic">Mubarak Istikhara</span></h2>
                    <p className="text-green-100/70 text-lg leading-relaxed font-light">In kamil roohani maamlat ke liye hum se rabita karein ya details submit karein:</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: "💍", t: "Rishta / Nikah", d: "Sahi rishte ki chunaav" },
                      { icon: "🏢", t: "Karobar / Business", d: "Naye kaam ka faisla" },
                      { icon: "✈️", t: "Safar / Travel", d: "Safar ki khair o afiyat" },
                      { icon: "🩺", t: "Health / Sehat", d: "Ilaj mein rahnumai" },
                    ].map((item, i) => (
                       <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                          <div className="text-3xl mb-3 group-hover:scale-125 transition-transform inline-block">{item.icon}</div>
                          <h4 className="text-xl font-bold font-serif text-white">{item.t}</h4>
                          <p className="text-green-200/50 text-[10px] uppercase font-bold tracking-widest mt-1">{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                 <div className="p-12 lg:p-16 rounded-[4rem] bg-white text-slate-900 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[4rem] group-hover:bg-green-100 transition-colors" />
                    
                    <div className="space-y-10 relative z-10 text-center md:text-left">
                       <div className="space-y-2">
                          <h3 className="text-4xl font-serif font-black text-green-950">Istikhara Request</h3>
                          <p className="text-slate-400 text-sm font-medium">Please provide accurate details for results.</p>
                       </div>
                       
                       <div className="space-y-6">
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 font-bold uppercase tracking-widest italic group-hover:border-green-200 transition-colors">Yahan Apna Masla Darj Karein...</div>
                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 font-bold uppercase tracking-widest italic group-hover:border-green-200 transition-colors">Apna Mukammal Naam...</div>
                       </div>
                       
                       <Link href="/contact" className="block">
                          <button className="w-full py-6 bg-green-900 text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.4em] shadow-xl hover:bg-green-800 hover:-translate-y-1 transition-all active:scale-95 shadow-green-950/20">Darkhowast Submit Karein</button>
                       </Link>
                       
                       <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-green-600 transition-colors">An Answer will be sent in 24 hours.</p>
                    </div>
                    
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Signs & Feedback Section */}
        <div className="py-24 text-center space-y-16">
           <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif text-green-950 font-bold">Ishar-e-Qalb Ki <span className="text-green-700 italic border-b-4 border-green-100">Ahmiyat</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Istikhara koi jadugari nahi balkay Allah se mashwara mangnay ka sacha aur roohani amal hai.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
              {[
                { t: "Kamil Rahnumai", d: "Faislay mein yaqeen", icon: "✨" },
                { t: "Zehni Sukoon", d: "Pareshani ka khatma", icon: "🛡️" },
                { t: "Allah Ki Raza", d: "Barq o Rehmat", icon: "💎" },
              ].map((b, i) => (
                 <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-green-200 text-center space-y-4">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-500 mb-2">{b.icon}</div>
                    <h3 className="font-serif text-2xl text-green-950 font-bold">{b.t}</h3>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{b.d}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* 5. Final CTA / Footer */}
        <div className="flex flex-col items-center gap-12 py-24 border-t border-green-50 mb-12">
          <div className="text-center space-y-4">
             <h3 className="text-4xl font-serif text-green-950 font-bold">Abhi Allah se Rahnumai Talab Karein</h3>
             <p className="text-slate-500 font-light max-w-lg mx-auto">Hichkichayein mat, har bada kaam karne se pehlay Istikhara karna Sunnat-e-Mubarak hai.</p>
          </div>
          
          <Link href="/contact" className="group flex items-center gap-6 px-12 py-6 bg-green-900 text-white rounded-[2.5rem] hover:bg-green-800 transition-all shadow-xl active:scale-95">
             <span className="text-sm font-black uppercase tracking-[0.3em]">Direct Rabta — WhatsApp</span>
             <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>

          <footer className="w-full text-center pt-32 opacity-60">
             <div className="flex flex-col items-center gap-6">
                <span className="text-green-700 font-serif font-black text-3xl tracking-tighter">Kamayabi</span>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] flex items-center gap-6">
                  <span className="h-[1px] w-12 bg-slate-200" />
                  Mubarak Roohani Center — Online Service
                  <span className="h-[1px] w-12 bg-slate-200" />
                </p>
             </div>
          </footer>
        </div>

      </div>
    </div>
  );
}
