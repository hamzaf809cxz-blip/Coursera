import React from 'react';
import { Users, Book, Building2, Globe2 } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Learners', value: '113 Million+', icon: Users },
  { label: 'Courses', value: '7,000+', icon: Book },
  { label: 'Partners', value: '300+', icon: Building2 },
  { label: 'Countries', value: '190+', icon: Globe2 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-blue-900/10 blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_#2563EB] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <stat.icon size={32} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:text-gradient transition-all">{stat.value}</h3>
              <p className="text-slate-400 font-medium uppercase text-sm tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;