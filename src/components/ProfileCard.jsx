import React from "react";

const ProfileCard = ({ name, title, photoSrc, logoSrc }) => {
  return (
    <section className="relative bg-slate-800/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center md:items-center gap-6">
        <div className="relative">
          <img
            src={photoSrc}
            alt={`${name} profile`}
            className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-white/10 shadow-lg"
          />
          {logoSrc && (
            <img
              src={logoSrc}
              alt="Logo"
              className="absolute -bottom-1 -right-1 h-9 w-9 rounded-full bg-slate-900/80 p-1.5 ring-2 ring-white/10"
            />
          )}
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{name}</h2>
          <p className="mt-1 text-blue-200/90">{title}</p>
          <p className="mt-3 text-sm text-blue-200/80 max-w-2xl">
            I’m available for calls, WhatsApp messages, and email. Feel free to reach out anytime — I usually respond within minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
