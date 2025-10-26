import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Analyst (Cybersecurity Research)',
      organization: 'Atal Incubation Center',
      period: 'January 2025 - Present',
      responsibilities: [
        'Leading research initiatives in national security domain with focus on Deep Tech areas including Quantum Computing and Post-Quantum Cryptographic Technologies.',
      ],
    },
    {
      title: 'Secretary & Technical Lead',
      organization: 'IncuBeta',
      period: 'July 2024 - Present',
      responsibilities: [
        'Conducting threat analysis and security assessment projects for government and defense applications.',
        'Coordinating cybersecurity events, workshops, and technical demonstrations for incubation programs.',
        'Managing communications and organizing meetings focused on emerging security technologies and research initiatives.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ OPERATIONAL HISTORY ]
          </h2>
          <div className="stamp stamp-confidential ml-auto hidden md:block">Confidential</div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 hover:border-[#4a5c3a] transition-all">
              <div className="relative">
                {/* Tab effect */}
                <div className="absolute -top-6 left-8 bg-[#4a5c3a] px-4 py-1 text-sm text-[#e8e6d9]">
                  FILE {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 mt-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[#e8e6d9] mb-1 typewriter">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[#4a5c3a]">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#8b7355] mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-2 pl-4 border-l-2 border-[#4a5c3a]">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-[#4a5c3a]">▸</span>
                      <p className="text-[#d4d2c5] typewriter">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;