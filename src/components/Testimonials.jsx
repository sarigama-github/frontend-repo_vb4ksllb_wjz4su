import React from "react";

const TestimonialItem = ({ quote, name, detail }) => (
  <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
    <p className="text-blue-50/90">“{quote}”</p>
    <div className="mt-4 text-sm text-blue-200/80">
      <p className="font-medium text-white">{name}</p>
      {detail && <p className="text-blue-300/70">{detail}</p>}
    </div>
  </div>
);

const Testimonials = ({ items }) => {
  return (
    <section className="relative">
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">What students say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((t, idx) => (
          <TestimonialItem key={idx} quote={t.quote} name={t.name} detail={t.detail} />)
        )}
      </div>
    </section>
  );
};

export default Testimonials;
