import React from "react";

const ContactCard = ({ phone, email }) => {
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  const callHref = `tel:${normalizedPhone}`;
  const whatsappHref = `https://wa.me/${normalizedPhone}`;
  const emailHref = `mailto:${email}`;

  return (
    <div className="relative bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 md:p-8 backdrop-blur shadow-xl overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <img src="/flame-icon.svg" alt="Logo" className="w-12 h-12" />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">Contact</h2>
            <p className="text-blue-200/80 text-sm">We usually respond within minutes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <a href={callHref} className="group flex items-center justify-center gap-3 rounded-xl border border-blue-400/30 bg-slate-900/40 px-5 py-4 text-white transition hover:border-blue-400/60 hover:bg-slate-900/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-300 group-hover:text-blue-200"><path d="M3 5a2 2 0 0 1 2-2h2.153a2 2 0 0 1 1.94 1.515l.51 2.04a2 2 0 0 1-.516 1.93l-1.22 1.22a14.5 14.5 0 0 0 6.392 6.392l1.22-1.22a2 2 0 0 1 1.93-.516l2.04.51A2 2 0 0 1 21 18.847V21a2 2 0 0 1-2 2h-1C9.82 23 1 14.18 1 4V3a2 2 0 0 1 2-2h2Z"/></svg>
            <span className="font-medium">Call</span>
          </a>

          <a href={whatsappHref} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 rounded-xl border border-green-400/30 bg-slate-900/40 px-5 py-4 text-white transition hover:border-green-400/60 hover:bg-slate-900/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-300 group-hover:text-green-200"><path d="M20 3.5A10.5 10.5 0 0 0 3.68 17.86L2 22l4.27-1.62A10.5 10.5 0 1 0 20 3.5Zm-8.5 17a8.47 8.47 0 0 1-4.31-1.18l-.31-.19-2.54.96.94-2.6-.2-.33A8.5 8.5 0 1 1 11.5 20.5Zm4.38-6.23c-.24-.12-1.43-.7-1.65-.78s-.38-.12-.54.12-.62.78-.76.95-.28.18-.52.06a6.97 6.97 0 0 1-2.05-1.27 7.68 7.68 0 0 1-1.42-1.77c-.15-.26 0-.4.11-.52.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4s.04-.3-.02-.42c-.06-.12-.54-1.31-.74-1.79-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.13.2-.55.2-1.02.14-1.13-.06-.11-.22-.18-.46-.3Z"/></svg>
            <span className="font-medium">WhatsApp</span>
          </a>

          <a href={emailHref} className="group flex items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-slate-900/40 px-5 py-4 text-white transition hover:border-cyan-400/60 hover:bg-slate-900/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5l-10 6-10-6V6Zm0 3.236V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.236l-9.445 5.667a2 2 0 0 1-2.11 0L2 9.236Z"/></svg>
            <span className="font-medium">Email</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 text-blue-200/90 text-sm">
          <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4">
            <p className="uppercase text-[10px] tracking-widest text-blue-300/60">Phone</p>
            <p className="mt-1 text-white text-base">{phone}</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4">
            <p className="uppercase text-[10px] tracking-widest text-blue-300/60">Email</p>
            <p className="mt-1 text-white text-base break-all">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
