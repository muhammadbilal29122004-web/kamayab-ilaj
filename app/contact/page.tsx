"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="pb-20">

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4">
        {/* Background Ambient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[40vw] h-[40vw] max-w-[600px] bg-sky-100/40 blur-[130px] rounded-full mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-xl bg-white border border-sky-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(59,130,246,0.08)] flex flex-col gap-8">
           
           <div className="text-center space-y-4">
             <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-blue-50/50 border border-sky-100 mb-2">
               <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-45 rounded-sm" />
             </div>
             <h1 className="text-4xl md:text-5xl font-serif text-sky-700 font-bold">Raabta Karein</h1>
             <p className="text-sky-500/80 text-sm uppercase tracking-[0.1em] font-medium">Apni mushkil ya pareshani hamse share karein</p>
           </div>
           
           <form className="flex flex-col gap-6 w-full pt-4">
             
             <div className="flex flex-col gap-2">
               <label className="text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Pura Naam</label>
               <input type="text" placeholder="Aapka naam..." className="w-full bg-slate-50 border border-sky-100 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
             </div>
             
             <div className="flex flex-col gap-2">
               <label className="text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Phone Number</label>
               <input type="text" placeholder="03xx xxxxxxx" className="w-full bg-slate-50 border border-sky-100 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
             </div>
             
             <div className="flex flex-col gap-2">
               <label className="text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">Masla / Message</label>
               <textarea rows={4} placeholder="Apna roohani masla tafseel se likhein..." className="w-full bg-slate-50 border border-sky-100 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium resize-none" />
             </div>
             
             <button type="button" onClick={() => alert('Message Sent Successfully!')} className="w-full mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-300 to-sky-400 text-white font-extrabold uppercase tracking-widest text-lg hover:brightness-110 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] transition-all duration-300">
               Paigham Bhejein
             </button>
             
           </form>

           <Link href="/" className="mx-auto mt-2 text-sky-500 hover:text-sky-700 transition-colors text-xs uppercase tracking-widest border-b border-transparent hover:border-sky-300 pb-1 font-bold">
             ← Wapas Home
           </Link>
           
        </div>
      </section>

    </div>
  );
}
