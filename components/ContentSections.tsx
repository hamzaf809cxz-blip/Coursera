import React from 'react';
import { UserPlus, Search, PlayCircle, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { id: 'step-join', icon: UserPlus, title: "Join for Free", desc: "Sign up and explore thousands of courses at no cost." },
    { id: 'step-find', icon: Search, title: "Find Your Path", desc: "Choose from individual courses, specializations, or degrees." },
    { id: 'step-start', icon: PlayCircle, title: "Start Learning", desc: "Watch videos, read materials, and complete assignments." },
    { id: 'step-earn', icon: Award, title: "Earn a Certificate", desc: "Receive a shareable certificate upon completion (paid)." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#050B1D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Getting started is easy. Transform your life through education in four simple steps.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center relative group animate-fade-in-up" 
              style={{ animationDelay: `${idx * 150}ms` }}
            >
               <div className="w-24 h-24 bg-dark-surface border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                 <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                 <step.icon size={36} className="text-slate-300 group-hover:text-white transition-colors" />
               </div>
               <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
               <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};