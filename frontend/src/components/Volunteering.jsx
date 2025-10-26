import React from 'react';
import { Users, Star } from 'lucide-react';
import { Card } from './ui/card';

const Volunteering = () => {
  const activities = [
    {
      event: 'Drone Expo, Hyderabad',
      role: 'Organizer',
      highlights: [],
    },
    {
      event: 'National Cybersecurity Exercise 2025 (NCX)',
      role: 'Blue Team Trainer and REMA Technical Assistant',
      highlights: [
        'Contributed to national-scale cybersecurity readiness training.',
        'Trained and mentored over 150 participants on malware fundamentals, detection techniques, and evasion strategies.',
        'Configured and managed Blue Team environments, including defensive monitoring and incident response.',
      ],
    },
  ];

  return (
    <section id="volunteering" className="py-20 px-4 bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Users className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ COMMUNITY OPERATIONS ]
          </h2>
          <div className="stamp stamp-confidential ml-auto hidden md:block">Confidential</div>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 hover:border-[#4a5c3a] transition-all">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#4a5c3a] mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#e8e6d9] mb-2 typewriter">
                    {activity.event}
                  </h3>
                  <p className="text-lg text-[#4a5c3a] mb-4">{activity.role}</p>
                  
                  {activity.highlights.length > 0 && (
                    <div className="space-y-2 pl-4 border-l-2 border-[#4a5c3a]">
                      {activity.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span className="text-[#4a5c3a]">▸</span>
                          <p className="text-[#d4d2c5] typewriter">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;