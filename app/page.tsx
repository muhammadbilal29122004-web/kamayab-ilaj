import Link from 'next/link';

export default function Home() {
  return (
    <div className="pb-20">

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4 bg-white overflow-hidden">
        {/* Cinematic Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 pointer-events-none"
        >
          <source src="/surah vedio hero.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/95 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto drop-shadow-sm">

          <span className="text-green-700 tracking-[0.6em] uppercase text-[10px] font-black mb-8 px-4 py-1.5 rounded-full border border-green-200/50 bg-white/40 backdrop-blur-sm">
            Bismillah Hir Rahman Nir Raheem
          </span>

          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-green-950 leading-[1] mb-6 drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]">
            Kamayabi
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 md:w-32 h-[1.5px] bg-green-200/60"></div>
            <h2 className="text-xl md:text-3xl font-serif text-green-900 tracking-[0.3em] uppercase drop-shadow-sm font-semibold">
              Roohani Markaz
            </h2>
            <div className="w-16 md:w-32 h-[1.5px] bg-green-200/60"></div>
          </div>

          <p className="text-lg md:text-2xl text-slate-800/80 max-w-2xl leading-relaxed font-medium mb-16 drop-shadow-sm">
            Quran-e-Kareem ki barkat aur kamil hifazat ke zariye apni zindagi mein asaniyaan paida karein. Har pareshani ka mukammal shari'i hal yahan mojud hai.
          </p>


          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact">
              <button className="px-12 py-4 shadow-lg bg-green-900 text-white text-sm uppercase tracking-[0.2em] font-medium hover:bg-green-800 transition-colors">
                Kaam Shuru Karein
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.2em] text-green-900 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-green-900" />
        </div>
      </section>

      {/* 2. Core Pillars */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-green-900 font-bold drop-shadow-sm">Muntakhib Khidmaat</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: 'Surah', d: 'Qurani Wazaif', link: '/surah', imgSrc: '/surah image.jpg' },
            { t: 'Naqsh', d: 'Roohani Asraar', link: '/naqsh', imgSrc: '/naqsh image.jpg' },
            { t: 'Taveez', d: 'Hifazat o Barkat', link: '/taveez', imgSrc: '/taveez image.jpg' },
            { t: 'Istikhara', d: 'Mubarak Rahnumai', link: '/istikhara', imgSrc: '/istikhara.jpg' },
          ].map((p, i) => (
            <Link href={p.link} key={i}>
              <div className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-green-100 bg-white hover:-translate-y-2 transition-all duration-500 shadow-[0_15px_30px_rgba(22,163,74,0.05)] hover:shadow-[0_20px_40px_rgba(22,163,74,0.15)]">

                {/* Local Image */}
                <img src={p.imgSrc} alt={p.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                  <h3 className="text-4xl font-serif text-white mb-2 drop-shadow-md">{p.t}</h3>
                  <p className="text-green-300 uppercase tracking-[0.2em] text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-sm">{p.d}</p>
                  <div className="w-16 h-[2px] bg-green-400 mt-8 mx-auto transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2.5 Tabarrukat (Products/Items) */}
      <section className="py-24 bg-green-50/40 relative z-10 border-t border-green-100/50">
        <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:36px_36px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-green-950 font-bold drop-shadow-sm">Mubarak Tabarrukat</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto opacity-60" />
            <p className="text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed text-lg pt-2">
              Roohani faiz aur hifazat ke liye khas tayar karda mubarak surah, gems aur rings.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {[
              { t: 'Appendent Surah', imgSrc: '/appendent surah.jpg' },
              { t: 'Bengals Surah', imgSrc: '/bengals surah.jpg' },
              { t: 'Ring Gemestone', imgSrc: '/ring gemestone.jpg' },
              { t: 'Ring Surah', imgSrc: '/ring surah.jpg' },
              { t: 'Stone', imgSrc: '/stone.jpg' },
            ].map((p, i) => (
              <div key={i} className={`w-full sm:w-[calc(50%-12px)] ${i < 2 ? 'lg:w-[calc(50%-16px)] h-[450px]' : 'lg:w-[calc(33.333%-22px)] h-[400px]'} max-w-xl group relative rounded-[2rem] overflow-hidden cursor-pointer bg-white hover:-translate-y-3 transition-all duration-700 shadow-[0_15px_30px_rgba(22,163,74,0.08)] hover:shadow-[0_30px_60px_rgba(22,163,74,0.2)] flex-none ring-1 ring-green-100 hover:ring-green-300`}>

                {/* Local Image with zoom effect */}
                <img src={p.imgSrc} alt={p.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Floating Glassmorphism Footer */}
                <div className="absolute inset-x-4 bottom-4 z-10 translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl flex items-center justify-between group-hover:bg-white/20 group-hover:border-white/40 shadow-2xl transition-all duration-500">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-white mb-1 drop-shadow-md capitalize tracking-wide">{p.t.toLowerCase()}</h3>
                      <p className="text-green-300 text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] opacity-90">Premium Collection</p>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/30 flex items-center justify-center text-white backdrop-blur-sm border border-green-300/30 group-hover:bg-green-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.6)] transition-all duration-500 shrink-0 shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Premium Booking & Services */}
      <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-20 items-start">

            {/* Left Content: Title & Intro */}
            <div className="xl:col-span-4 space-y-12 group">
              <div className="relative">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-100/50 border border-green-200 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-green-800 uppercase">Premium Offers</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-slate-950 font-bold leading-[1] mb-6">
                  Khususi <br />
                  <span className="text-green-800 drop-shadow-sm">Peshkash</span>
                </h2>
                <div className="w-24 h-2 bg-green-600/20 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-green-600 w-1/2 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-sm">
                Aapki zaati aur roohani zaroriat ke liye muntakhib karda khusoosi packages jinke asraat fori aur mustaqil hote hain.
              </p>

              <Link href="/contact" className="inline-flex items-center gap-6 group/btn">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 group-hover/btn:text-green-700 transition-colors">Details Dekhein</span>
                <div className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center group-hover/btn:border-green-600 group-hover/btn:bg-green-600 group-hover/btn:text-white transition-all duration-300 shadow-sm">
                  <svg className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Right Content: Cards Grid */}
            <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                {
                  title: 'Lucky Stone Form',
                  price: '1,250 Rs',
                  type: 'Form / Registration',
                  icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.633 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.633-1M12 16v1m-2-10a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2h-4z" />
                },
                {
                  title: 'Special Guideline',
                  price: 'Consult Now',
                  type: 'Consultation',
                  icon: <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                },
                {
                  title: 'Appointment',
                  price: '30 Mins Walk-in',
                  type: 'Session',
                  icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
                {
                  title: 'Zaicha Form',
                  price: '5,550 Rs',
                  type: 'Numerology Report',
                  icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                },
              ].map((cat, i) => (
                <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(22,163,74,0.12)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
                  {/* Glass background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[4rem] -mr-12 -mt-12 group-hover:bg-green-100 transition-colors duration-500 pointer-events-none" />

                  {/* Floating Number Background */}
                  <div className="absolute -bottom-10 -right-4 text-[12rem] font-serif font-black text-slate-50 group-hover:text-green-50/60 transition-colors duration-700 select-none pointer-events-none">
                    {i + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-sm mb-12">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {cat.icon}
                      </svg>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-700 mb-4">{cat.type}</span>

                    <h3 className="text-3xl font-serif text-slate-900 group-hover:text-green-950 transition-colors mb-10 leading-snug">
                      {cat.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between w-full">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Starting From</span>
                        <span className="text-xl font-black text-slate-950 tracking-tight">{cat.price}</span>
                      </div>

                      <Link href="/contact" className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Humara Tariqa (How it works) */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-green-900 font-bold drop-shadow-sm">Kaam Ka Tariqa</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { step: '01', title: 'Rabita Karein', desc: 'Hamare diye gaye number ya form ke zariye apna roohani masla tafseel se batayein.' },
              { step: '02', title: 'Roohani Jaiza', desc: 'Aapke maslay ki roshni mein istikhara aur zaicha ke mutabiq behtareen hal nikala jayega.' },
              { step: '03', title: 'Mubarak Hal', desc: 'Taveez, Naqsh ya Qurani wazaif aapko faraaham kiye jayenge taa ke apko fori sakoon mile.' },
            ].map((wk, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-3xl font-serif font-bold text-green-700 shadow-md group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  {wk.step}
                </div>
                <h3 className="text-2xl font-serif text-slate-800 group-hover:text-green-800 transition-colors">{wk.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium px-4">{wk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Khusoosiyat (Trust Section) */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-950 via-green-950 to-slate-950 text-white relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
         </div>
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:40px_40px]" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
               
               <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6">
                     <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-green-900/40 border border-green-800/50 backdrop-blur-sm">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-green-400 uppercase">Trust & Legacy</span>
                     </div>
                     <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Hum Par Aitmaad <br />
                        <span className="text-green-500 border-b-2 border-green-500/30 pb-2">Kyun Karein?</span>
                     </h2>
                     <p className="text-lg text-slate-300 leading-relaxed font-light max-w-2xl">
                        Kamayabi Roohani Markaz hamesha Quran-e-Pak aur Sunnat ki roshni mein rehnumai karta hai, jahan har maslay ka mukammal shari'i aur roohani hal mojood hai.
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6 pt-4">
                     {[
                       { 
                         title: 'Mukammal Raazdaari', 
                         desc: 'Aapki tmam malomat aur masail hifazat se rakhe jate hain.',
                         icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                       },
                       { 
                         title: 'Qurani Tariqa', 
                         desc: 'Koi ghalat rasta nahi, sirf quran-e-pak ke mubarak asraar.',
                         icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                       },
                       { 
                         title: 'Mustaqil Asar', 
                         desc: 'Aise amaliyat jo waqti nahi balke hamesha ke liye asar chorte hain.',
                         icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       },
                     ].map((ft, i) => (
                        <div key={i} className="group relative flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-500">
                           <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-500">
                              <svg className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 {ft.icon}
                              </svg>
                           </div>
                           <div>
                              <h4 className="text-xl font-bold font-serif text-white mb-2">{ft.title}</h4>
                              <p className="text-slate-400 font-medium text-sm leading-relaxed">{ft.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="lg:col-span-5">
                  <div className="relative group">
                     {/* Outer Glow */}
                     <div className="absolute -inset-4 bg-green-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     
                     <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img src="/istikhara.jpg" alt="Features" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                        
                        {/* Text Overlay with Backdrop Blur */}
                        <div className="absolute bottom-8 inset-x-8 p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                           <span className="inline-block text-4xl text-green-400 mb-4 animate-bounce">✧</span>
                           <h3 className="text-3xl font-serif font-bold text-white mb-3">Rab ka Fazal</h3>
                           <p className="text-green-200 uppercase tracking-[0.2em] text-[10px] font-bold">Har mushkil aasaan hai, bas roohaniyat pe thik se amal ho.</p>
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-green-500/50 rounded-tl-lg" />
                        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-green-500/50 rounded-tr-lg" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>


    </div>
  );
}
