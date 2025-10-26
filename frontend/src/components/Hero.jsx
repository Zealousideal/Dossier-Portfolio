import React from 'react';
import { Mail, Phone, Linkedin, Github, Shield } from 'lucide-react';
import { Card } from './ui/card';

const Hero = () => {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <Card className="bg-[#1a1a1a] border-[#4a5c3a] border-2 p-8 shadow-2xl relative overflow-hidden">
          {/* Classification stamp */}
          <div className="absolute top-4 right-4 stamp stamp-top-secret">
            Top Secret
          </div>
          
          {/* Perforated edge effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#252525] border-r-2 border-dashed border-[#3a3a3a]"></div>
          
          <div className="ml-8">
            {/* Subject header */}
            <div className="mb-6 pb-4 border-b-2 border-[#3a3a3a]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#4a5c3a] animate-pulse"></div>
                <p className="text-sm text-[#8b7355] tracking-wider">SUBJECT FILE</p>
              </div>
              <h1 className="text-5xl font-bold text-[#e8e6d9] mb-2 typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
                SINOY DE
              </h1>
              <div className="flex items-center gap-2 text-[#4a5c3a]">
                <Shield className="w-5 h-5" />
                <p className="text-lg typewriter">Cybersecurity Researcher | Penetration Tester</p>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6 space-y-3">
              <div className="flex gap-2">
                <span className="text-[#8b7355] min-w-[120px]">STATUS:</span>
                <span className="text-[#e8e6d9]">ACTIVE</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#8b7355] min-w-[120px]">DESIGNATION:</span>
                <span className="text-[#e8e6d9]">Computer Science Undergraduate</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#8b7355] min-w-[120px]">SPECIALIZATION:</span>
                <span className="text-[#e8e6d9]">Penetration Testing, Web Security, Red Teaming</span>
              </div>
            </div>

            {/* Mission statement */}
            <div className="mb-6 p-4 bg-[#252525] border-l-4 border-[#4a5c3a]">
              <p className="text-[#d4d2c5] leading-relaxed typewriter">
                Developing innovative solutions to address emerging cyber threats and actively 
                contributing to the Cybersecurity community through technical research, publications, 
                and collaborative projects.
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-2">
              <p className="text-sm text-[#8b7355] mb-3 tracking-wider">CONTACT CHANNELS:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a 
                  href="mailto:desinoy2018@gmail.com" 
                  className="flex items-center gap-2 text-[#d4d2c5] hover:text-[#4a5c3a] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">desinoy2018@gmail.com</span>
                </a>
                <a 
                  href="tel:+917359647980" 
                  className="flex items-center gap-2 text-[#d4d2c5] hover:text-[#4a5c3a] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 7359647980</span>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#d4d2c5] hover:text-[#4a5c3a] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#d4d2c5] hover:text-[#4a5c3a] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;