import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import AiAssistant from './components/AiAssistant';
import { HowItWorks } from './components/ContentSections';

const Footer: React.FC = () => (
  <footer className="bg-[#020617] text-slate-400 py-16 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-xl mb-4">CourseraInfo</h4>
          <p className="text-sm leading-relaxed opacity-60 max-w-sm">
            An immersive informational experience powered by Gemini. Not affiliated with Coursera Inc.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm">
            <a href="https://www.coursera.org" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Official Site</a>
            <span className="opacity-20">|</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
      
      <div className="border-t border-white/5 mt-10 pt-8 text-center text-xs opacity-40">
        <p>&copy; 2024 Demo Page. Built with React & Tailwind.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <AiAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;