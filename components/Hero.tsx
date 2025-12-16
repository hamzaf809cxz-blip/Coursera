import React from 'react';
import { ArrowRight, Globe, Award, Video, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-32 overflow-hidden bg-dark-bg min-h-screen flex items-center">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_#3B82F6]"></span>
              </span>
              <span className="text-blue-200 font-medium text-sm tracking-wide">World-Class Learning</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white">
              Learn without <br />
              <span className="text-gradient drop-shadow-2xl">Limits</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg border-l-2 border-blue-500/50 pl-6">
              A global platform offering access to online courses and degrees from world-class universities and companies.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#how-it-works" className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="flex items-center gap-3">
                  How it Works
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </a>
              <a href="#features" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300">
                Explore Features
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-8">
              {[
                { Icon: Globe, label: "Global Access" },
                { Icon: Award, label: "Recognized Certs" },
                { Icon: Video, label: "Flexible Video" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                    <item.Icon size={20} />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative lg:h-[600px] w-full flex items-center justify-center animate-float">
             {/* Glowing Orb Behind */}
             <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse-glow"></div>
             
             <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group w-full max-w-lg aspect-[4/5] md:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                  alt="Student learning" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-0 group-hover:saturate-100 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <Play size={20} className="text-white fill-white ml-1" />
                        </div>
                        <div>
                           <p className="text-white font-bold">Continue Learning</p>
                           <p className="text-xs text-blue-200">Chapter 4: Neural Networks</p>
                        </div>
                      </div>
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3"></div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Floating Badge 1 */}
             <div className="absolute top-10 -right-4 glass p-4 rounded-2xl flex items-center gap-4 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.3)]" style={{animationDelay: '1s'}}>
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg shadow-orange-500/30">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Credential</p>
                  <p className="font-bold text-white">Professional Cert</p>
                </div>
             </div>

             {/* Floating Badge 2 */}
             <div className="absolute bottom-20 -left-10 glass p-4 rounded-2xl flex items-center gap-4 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.3)]" style={{animationDelay: '2s'}}>
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl shadow-lg shadow-green-500/30">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Community</p>
                  <p className="font-bold text-white">113M+ Learners</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;