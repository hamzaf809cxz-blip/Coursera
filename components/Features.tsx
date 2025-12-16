import React from 'react';
import { MonitorPlay, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-dark-bg relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Achieve your goals with <span className="text-blue-500">Coursera</span></h2>
          <p className="text-slate-400 text-lg">
            Whether you want to learn a new skill, get ready for a career, or earn a degree, Coursera has a learning path for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] group">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all">
              <MonitorPlay className="text-purple-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Learn a Skill</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Short courses to help you master specific tools or concepts in just a few hours.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-purple-400" /> 1-4 weeks
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-purple-400" /> Beginner to Advanced
              </li>
            </ul>
            <span className="text-purple-400 font-bold text-sm uppercase tracking-wider border-b border-purple-500/30 pb-1">Ideal for Upskilling</span>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] group relative border-t-4 border-t-blue-500 bg-white/[0.07]">
            <div className="absolute top-0 right-0 p-3">
                 <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
              <Briefcase className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Get Job-Ready</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Professional Certificates designed to get you hired in high-growth fields like IT and Data Science.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-blue-400" /> 3-6 months
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-blue-400" /> No experience required
              </li>
            </ul>
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider border-b border-blue-500/30 pb-1">Career Changer Favorite</span>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] group">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-8 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all">
              <GraduationCap className="text-orange-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Earn a Degree</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Bachelor's and Master's degrees from top universities at a breakthrough price.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-orange-400" /> 2-4 years
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-orange-400" /> Recognized globally
              </li>
            </ul>
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider border-b border-orange-500/30 pb-1">Academic Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;