import React from "react";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import ProfileCard from "./components/ProfileCard";
import Testimonials from "./components/Testimonials";

function App() {
  const phone = "-9011388302";
  const email = "sakshampravesh2025@gmail.com";

  const testimonials = [
    { quote: "Clear guidance and fast responses. Highly recommended!", name: "Omraje Bobde", detail: "DY Patil Pimpri" },
    { quote: "Helped me crack my doubts in minutes.", name: "Aditi S.", detail: "Sinhgad Student" },
    { quote: "Very supportive and professional.", name: "Rohan K.", detail: "PCCOE" },
    { quote: "The best mentor experience I've had.", name: "Neha P.", detail: "Modern College" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_300px_at_90%_90%,rgba(34,211,238,0.12),transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6 pb-24 space-y-8">
        <Header />

        <ProfileCard
          name="Saksham Pravesh"
          title="Mentor & Career Guidance"
          photoSrc="/profile.svg"
          logoSrc="/flame-icon.svg"
        />

        <ContactCard phone={phone} email={email} />

        <Testimonials items={testimonials} />

        <p className="mt-6 text-center text-blue-300/70 text-xs">Tap a button above to start a call, open WhatsApp, or draft an email.</p>
      </div>
    </div>
  );
}

export default App;
