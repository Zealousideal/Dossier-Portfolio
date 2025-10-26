import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ ACADEMIC TRAINING ]
          </h2>
          <div className="stamp stamp-confidential ml-auto hidden md:block">Confidential</div>
        </div>

        <Card className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-8 hover:border-[#4a5c3a] transition-all relative">
          {/* Tab effect */}
          <div className="absolute -top-6 left-8 bg-[#4a5c3a] px-4 py-1 text-sm text-[#e8e6d9]">
            ACADEMIC RECORD
          </div>

          <div className="mt-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#4a5c3a] animate-pulse"></div>
                <p className="text-sm text-[#8b7355] tracking-wider">INSTITUTION</p>
              </div>
              <h3 className="text-2xl font-bold text-[#e8e6d9] mb-2 typewriter">
                Rashtriya Raksha University
              </h3>
              <div className="flex items-center gap-2 text-[#4a5c3a] mb-4">
                <MapPin className="w-4 h-4" />
                <span>Gandhinagar, Gujarat</span>
              </div>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-[#4a5c3a]">
              <div>
                <p className="text-sm text-[#8b7355] mb-1">DEGREE:</p>
                <p className="text-lg text-[#d4d2c5] typewriter">
                  Bachelor of Technology in Computer Science and Engineering
                </p>
                <p className="text-md text-[#4a5c3a] mt-1">
                  Specialization: Cyber Security
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#8b7355] mb-1">PERIOD:</p>
                  <div className="flex items-center gap-2 text-[#d4d2c5]">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2022 - Present</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#8b7355] mb-1">PERFORMANCE:</p>
                  <p className="text-[#d4d2c5]">
                    <span className="text-2xl font-bold text-[#4a5c3a]">7.96</span>
                    <span className="text-sm text-[#8b7355]"> / 10.0 CGPA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;