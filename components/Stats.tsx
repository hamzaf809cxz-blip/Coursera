import React, { useEffect, useState, useRef } from 'react';
import { Users, Book, Building2, Globe2 } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: 'stat-learners', label: 'Learners', value: '113 Million+', numericValue: 113, suffix: ' Million+', icon: Users },
  { id: 'stat-courses', label: 'Courses', value: '7,000+', numericValue: 7000, suffix: '+', icon: Book },
  { id: 'stat-partners', label: 'Partners', value: '300+', numericValue: 300, suffix: '+', icon: Building2 },
  { id: 'stat-countries', label: 'Countries', value: '190+', numericValue: 190, suffix: '+', icon: Globe2 },
];

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(easedProgress * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, elementRef };
};

const StatCard: React.FC<{ stat: StatItem }> = ({ stat }) => {
  const { count, elementRef } = useCounter(stat.numericValue);
  
  return (
    <div 
      ref={elementRef}
      className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-500"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_#2563EB] transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <stat.icon size={32} className="text-blue-400 group-hover:text-white transition-colors" />
        </div>
      </div>
      <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:text-gradient transition-all min-w-[120px]">
        {count}{stat.suffix}
      </h3>
      <p className="text-slate-400 font-medium uppercase text-sm tracking-widest">{stat.label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-blue-900/10 blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;