"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const sendWhatsApp = () => {
    const { name, phone, message } = formData;
    if (!name || !phone || !message) {
      alert("Baraye maharbani tamam khanay pur karein.");
      return;
    }

    const whatsappNumber = "923146416825";
    const encodedMessage = encodeURIComponent(
      `Salaam! Kamayabi Roohani Markaz,\n\n` +
      `*Naam:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Masla:* ${message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center">
      
      {/* ✦ Cinematic Background ✦ */}
      <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-green-50 rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-emerald-50 rounded-full blur-[100px] pointer-events-none opacity-30 -translate-x-1/4 translate-y-1/4" />
      <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <section className="relative z-10 w-full max-w-5xl px-6 py-32 md:py-48 flex flex-col items-center justify-center gap-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-2xl animate-fade-in">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-100 border border-green-200 text-green-800 text-[10px] font-black uppercase tracking-[0.4em] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Qurani Rahnumai O Mashwara
           </div>
           <h1 className="text-5xl md:text-7xl font-serif text-green-950 font-black leading-tight">Raabta <span className="text-green-700 italic border-b-4 border-green-100">Karein</span></h1>
           <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">Aapka masla chahe kitna hi bada kyun na ho, Qurani aayat mein har mushkil ka hal maujood hai. Humse apna masla share karein.</p>
        </div>

        {/* ✦ Main Interactive Card ✦ */}
        <div className="w-full flex flex-col lg:flex-row bg-white/70 backdrop-blur-3xl border border-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(22,163,74,0.12)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_120px_rgba(22,163,74,0.18)]">
           
           {/* Left: Contact Info (Sidebar) */}
           <div className="lg:w-[40%] bg-green-950 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[size:25px:25px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 space-y-12">
                 <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-black">Roohani <br /><span className="text-green-400 italic">Markaz</span></h3>
                    <p className="text-green-100/60 text-sm font-light leading-relaxed">Humara maqsad logon ki mushkilat ko Quran-o-Sunnat ke mutabiq hal karna hai.</p>
                 </div>
                 
                 <div className="space-y-8">
                    {[
                      { icon: "📱", t: "Direct Message", l: "+92 314 6416825" },
                      { icon: "📍", t: "Location", l: "Karachi, Pakistan" },
                      { icon: "⏰", t: "Timing", l: "24/7 Available" },
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-center group/item hover:translate-x-2 transition-transform cursor-pointer">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shadow-lg transition-colors group-hover/item:bg-green-600">{item.icon}</div>
                          <div>
                             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 mb-1">{item.t}</p>
                             <p className="font-bold text-base">{item.l}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative z-10 pt-16">
                 <p className="text-green-100/40 text-[9px] font-medium leading-relaxed italic uppercase tracking-wider text-center lg:text-left">
                    "Allah ki rahmat se kabhi mayoos na hon, beshak har mushkil ke baad asani hai."
                 </p>
              </div>
           </div>

           {/* Right: Contact Form */}
           <div className="lg:w-[60%] p-10 md:p-16 flex flex-col gap-10">
              <div className="space-y-2">
                 <h2 className="text-3xl font-serif text-green-950 font-bold">Apni Detail Likhein</h2>
                 <p className="text-slate-500 text-sm font-medium">Koi bhi masla ho, baghair kisi jhijhak ke likhein.</p>
              </div>

              <form className="flex flex-col gap-6 md:gap-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase ml-1">Pura Naam</label>
                       <input 
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         placeholder="Aapka naam..." 
                         className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase ml-1">Phone Number</label>
                       <input 
                         type="text" 
                         value={formData.phone}
                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         placeholder="03xx xxxxxxx" 
                         className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium" 
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase ml-1">Aapka Masla / Message</label>
                    <textarea 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Apna roohani masla tafseel se likhein..." 
                      className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-7 py-5 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium resize-none shadow-inner" 
                    />
                 </div>

                 <div className="pt-2">
                    <button 
                      type="button" 
                      onClick={sendWhatsApp}
                      className="group w-full px-8 py-5 rounded-[2rem] bg-gradient-to-r from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-white font-black uppercase tracking-[0.3em] text-sm shadow-[0_15px_40px_rgba(20,83,45,0.25)] hover:shadow-[0_20px_50px_rgba(20,83,45,0.35)] transform active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                    >
                       Paigham Bhejein
                       <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </button>
                 </div>
              </form>

              <div className="mt-4 flex items-center justify-center gap-10">
                 <Link href="/" className="text-green-700 hover:text-green-950 transition-colors text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> Home Page
                 </Link>
                 <div className="w-[1px] h-4 bg-slate-200" />
                 <p className="text-slate-400 text-[10px] font-medium tracking-tight">Privacy Guaranteed</p>
              </div>
           </div>
        </div>

        {/* Bottom Reassurance */}
        <div className="text-center space-y-4 max-w-lg opacity-80 animate-fade-in delay-500 pb-12">
           <p className="text-slate-500 italic text-sm leading-relaxed">
              "Beshaq Allah har dil ki pukaar sunne wala hai. Humara kaam sirf aik wasila banna hai, shifa dene wala sirf wohi zaat hai."
           </p>
        </div>

      </section>

    </div>
  );
}
