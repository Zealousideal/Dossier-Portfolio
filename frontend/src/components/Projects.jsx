import React, { useState } from 'react';
import { Terminal, Lock, Unlock, Eye, Github, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const [revealedProjects, setRevealedProjects] = useState({});
  const [hoveredLink, setHoveredLink] = useState(null);

  const projects = [
    {
      title: 'Active Directory Threat Simulation & Analysis Lab',
      classification: 'CLASSIFIED',
      technologies: ['Python', 'PowerShell', 'BloodHound', 'Mimikatz'],
      description: [
        'Designed a vulnerable Active Directory (AD) environment to simulate advanced attack techniques.',
        'Simulated attacks include LDAP Domain Dump, Golden Ticket impersonation, and Pass-the-Hash attacks.',
        'Performed Kerberoasting attacks to extract service account credentials.',
        'Analyzed Domain Controller vulnerabilities using BloodHound to identify privilege escalation paths.',
      ],
      linkType: 'medium',
      link: '#', // TODO: Add Medium article link
    },
    {
      title: 'WannaCry Ransomware Analysis',
      classification: 'TOP SECRET',
      technologies: ['Cutter', 'PE Studio', 'x32dbg', 'Procmon', 'Wireshark', 'Inetsim'],
      description: [
        'Analyzed WannaCry ransomware in a controlled lab environment.',
        'Documented file encryption and self-propagation via the EternalBlue SMB exploit (MS17-010).',
        'Static & Dynamic Analysis: Utilized FLOSS, PE Studio, Cutter, and Ghidra for extracting strings, imports, crypto API usage, and decompiling code.',
        'Observed killswitch domain checks, process spawning, registry modifications, and language-specific ransom files.',
        'Captured SMB exploitation/propagation (MS17-010), TCP/445 flows, outbound connections to hard-coded domains.',
        'Extracted Indicators of Compromise (IOCs) such as file hashes, domains, and registry keys.',
      ],
      linkType: 'medium',
      link: '#', // TODO: Add Medium article link
    },
    {
      title: 'BrainF*ck Interactive Learning Platform',
      classification: 'CONFIDENTIAL',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Custom Interpreter'],
      description: [
        'Developed React-based web application for learning the esoteric BrainF*ck programming language with interactive tutorials and in-browser execution.',
        'Built custom JavaScript interpreter for real-time code compilation, demonstrating low-level programming and memory manipulation concepts.',
        'Implemented responsive UI with tutorial system and code playground - showcasing complex programming paradigms relevant to reverse engineering.',
      ],
      linkType: 'github',
      link: 'https://github.com/Zealousideal/BrainF_Learn',
    },
    {
      title: 'Self-Driving Car Neural Network Simulation',
      classification: 'CONFIDENTIAL',
      technologies: ['Vanilla JavaScript', 'Neural Networks'],
      description: [
        'Built an autonomous driving simulation using pure JavaScript.',
        'Features neural network-based decision-making and real-time environmental perception.',
        'Designed and trained a custom neural network for vehicle steering, lane tracking, and obstacle avoidance without external ML libraries.',
        'Developed an interactive neural network visualizer to display neuron activations, mutations, and the learning progression of the top-performing vehicle.',
      ],
      linkType: 'github',
      link: 'https://github.com/Zealousideal/Self-Driving-Car',
    },
  ];

  const toggleReveal = (index) => {
    setRevealedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getStampClass = (classification) => {
    switch(classification) {
      case 'TOP SECRET': return 'stamp-top-secret';
      case 'CLASSIFIED': return 'stamp-classified';
      default: return 'stamp-confidential';
    }
  };

  const MediumIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );

  return (
    <section id="projects" className="py-20 px-4 bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ MISSION RECORDS ]
          </h2>
          <div className="stamp stamp-top-secret ml-auto hidden md:block">Top Secret</div>
        </div>

        <div className="mb-8 p-4 bg-[#1a1a1a] border-l-4 border-[#dc2626]">
          <div className="flex items-center gap-2 text-[#dc2626]">
            <Lock className="w-4 h-4" />
            <p className="text-sm typewriter">SECURITY NOTICE: Click "DECLASSIFY" to reveal mission details</p>
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isRevealed = revealedProjects[index];
            const isHovered = hoveredLink === index;
            return (
              <Card key={index} className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 relative overflow-hidden hover:border-[#4a5c3a] transition-all">
                {/* Link with hover effect */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 group"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-[#4a5c3a] hover:text-[#5a6c4a] transition-colors">
                      {project.linkType === 'github' ? (
                        <Github className="w-7 h-7" />
                      ) : (
                        <MediumIcon />
                      )}
                    </div>
                    
                    {/* Hover tooltip */}
                    <div className={`absolute top-full right-0 mt-2 px-3 py-1 bg-[#4a5c3a] text-[#e8e6d9] text-sm whitespace-nowrap rounded transition-all duration-200 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                      {project.linkType === 'github' ? 'View Code' : 'Read Article'}
                      <div className="absolute -top-1 right-3 w-2 h-2 bg-[#4a5c3a] transform rotate-45"></div>
                    </div>
                  </div>
                </a>

                {/* Project header */}
                <div className="mb-4 pr-12">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#dc2626] mt-2"></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#e8e6d9] mb-2 typewriter">
                        MISSION {String(index + 1).padStart(3, '0')}
                      </h3>
                      <p className="text-lg text-[#4a5c3a]">{project.title}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm text-[#8b7355] mb-2">TOOLS & TECHNOLOGIES:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#252525] border border-[#3a3a3a] text-[#d4d2c5] text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Redacted content */}
                <div className="mb-4">
                  <p className="text-sm text-[#8b7355] mb-3">MISSION BRIEF:</p>
                  <div className="space-y-2 pl-4 border-l-2 border-[#4a5c3a]">
                    {project.description.map((desc, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="text-[#4a5c3a]">▸</span>
                        <p className={`text-[#d4d2c5] typewriter transition-all duration-300 ${
                          isRevealed ? 'revealed' : 'redacted'
                        }`}>
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Declassify button */}
                <Button
                  onClick={() => toggleReveal(index)}
                  className="bg-[#4a5c3a] hover:bg-[#5a6c4a] text-[#e8e6d9] border-2 border-[#4a5c3a] flex items-center gap-2"
                >
                  {isRevealed ? (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>CLASSIFIED</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      <span>DECLASSIFY</span>
                    </>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;