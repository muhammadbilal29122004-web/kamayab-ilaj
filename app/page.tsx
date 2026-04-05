import Link from 'next/link';

export default function Home() {
  return (
    <div className="pb-20">

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4 bg-white overflow-hidden">
         {/* Very soft glow at top */}
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-50 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
            
            <span className="text-green-700 tracking-[0.4em] uppercase text-xs font-bold mb-8">
               Bismillah Hir Rahman Nir Raheem
            </span>
            
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-green-950 leading-[1] mb-6">
              Kamayab
            </h1>
            
            <div className="flex items-center gap-4 mb-10">
               <div className="w-16 md:w-32 h-[1px] bg-green-200"></div>
               <h2 className="text-xl md:text-3xl font-serif text-green-800 tracking-[0.2em] uppercase">
                 Roohani Markaz
               </h2>
               <div className="w-16 md:w-32 h-[1px] bg-green-200"></div>
            </div>
            
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light mb-16">
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

      {/* 3. Premium Booking & Services */}
      <section className="py-32 bg-green-50/60 border-y border-green-200/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col xl:flex-row gap-20 items-center justify-between">

          <div className="xl:w-1/3 space-y-10 text-center xl:text-left">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900 font-bold leading-tight drop-shadow-sm">Khususi<br />Peshkash</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-transparent mx-auto xl:mx-0 opacity-50" />
            </div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Aapki zaati aur roohani zaroriat ke liye muntakhib karda khusoosi packages jinke asraat fori aur mustaqil hote hain.
            </p>
            <button className="border-b-[2px] border-green-600 pb-2 text-green-700 uppercase tracking-[0.2em] font-bold hover:text-green-900 transition-colors text-sm">
              Mukammal Details Dekhein →
            </button>
          </div>

          <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[
              { title: 'Lucky Stone Form', price: '1,250 Rs', type: 'Form / Registration' },
              { title: 'Special Guideline', price: 'Take Solution', type: 'Consultation' },
              { title: 'Appointment', price: '30 Mins Walk-in', type: 'Session' },
              { title: 'Zaicha Form', price: '5,550 Rs', type: 'Numerology Report' },
            ].map((cat, i) => (
              <div key={i} className="p-10 rounded-3xl border border-green-200 bg-white group hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(22,163,74,0.15)] transition-all duration-500 flex flex-col gap-8 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)]">

                <div className="absolute -top-4 -right-4 p-6 opacity-[0.03] font-serif text-8xl group-hover:scale-110 group-hover:opacity-10 group-hover:text-green-700 transition-all duration-700 text-slate-800 select-none">
                  0{i + 1}
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-green-600/80 font-bold border-b border-green-100 pb-2 self-start">{cat.type}</span>

                <div className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-serif text-slate-800 group-hover:text-green-800 transition-colors duration-500 font-bold">{cat.title}</h3>
                  <div className="inline-block px-5 py-3 rounded-full bg-green-50 border border-green-200 group-hover:bg-green-100 transition-colors duration-500">
                    <span className="text-green-800 font-extrabold tracking-widest text-lg">{cat.price}</span>
                  </div>
                </div>
              </div>
            ))}
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

      {/* 5. Khusoosiyat (Features) */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:30px_30px]" />
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-100">Hum Par Aitmaad Kyun Karein?</h2>
                  <p className="text-lg text-green-300 leading-relaxed font-light">
                     Kamayab Roohani Markaz hamesha Quran-e-Pak aur Sunnat ki roshni mein rehnumai karta hai, jahan har maslay ka mukammal shari'i aur roohani hal mojood hai.
                  </p>
                  
                  <div className="space-y-6 pt-4">
                     {[
                       { title: 'Mukammal Raazdaari', desc: 'Aapki tmam malomat aur masail hifazat se rakhe jate hain.' },
                       { title: 'Qurani Tariqa', desc: 'Koi ghalat rasta nahi, sirf quran-e-pak ke mubarak asraar.' },
                       { title: 'Jald aur Mustaqil Asar', desc: 'Aise amaliyat jo waqti nahi balke hamesha ke liye asar chorte hain.' },
                     ].map((ft, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <div className="w-8 h-8 rounded-full bg-green-800 border border-green-500/50 flex items-center justify-center mt-1 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-green-300" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold font-serif text-white">{ft.title}</h4>
                              <p className="text-green-200/80 font-medium text-sm mt-1">{ft.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-green-700">
                  <img src="/istikhara.jpg" alt="Features" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-green-950/60" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                     <span className="text-6xl text-green-400 mb-4">✧</span>
                     <h3 className="text-3xl font-serif font-bold text-white mb-2 drop-shadow-md">Rab ka Fazal</h3>
                     <p className="text-green-200 uppercase tracking-widest text-sm font-semibold drop-shadow-sm">Har mushkil aasaan hai, bas roohaniyat pe thik se amal ho.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>


    </div>
  );
}
