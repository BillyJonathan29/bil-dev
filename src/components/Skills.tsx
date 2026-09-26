import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-2">
            <Layers className="w-4 h-4" />
            <span>Keahlian Teknis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Teknologi & Perangkat yang Digunakan
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Perangkat dan bahasa yang saya gunakan sehari-hari untuk mengembangkan aplikasi web yang solid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition"
            >
              <h3 className="text-lg font-semibold text-indigo-300 mb-4 pb-2 border-b border-slate-800">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700/60 transition"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
