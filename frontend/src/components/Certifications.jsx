import React, { useState } from 'react';
import { Award, Lock, Unlock, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
  const [revealedCerts, setRevealedCerts] = useState({});
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      provider: 'INE',
      title: 'eJPT (eLearnSecurity Junior Penetration Tester)',
      classification: 'CLASSIFIED',
      image: '/certifications/ejpt.png', // Add your image here
    },
    {
      provider: 'INE',
      title: 'ICCA (INE Certified Cloud Associate)',
      classification: 'CLASSIFIED',
      image: '/certifications/icca.png', // Add your image here
    },
    {
      provider: 'TCM Security',
      title: 'Practical Malware Analysis and Triage',
      details: 'Static and dynamic malware analysis, reverse engineering, Go & C# malware, Anti-Analysis Techniques and Binary Patching.',
      classification: 'TOP SECRET',
      image: '/certifications/pmat.png', // Add your image here
    },
    {
      provider: 'TCM Security',
      title: 'Practical Ethical Hacking',
      classification: 'CLASSIFIED',
      image: '/certifications/peh.png', // Add your image here
    },
    {
      provider: 'TCM Security',
      title: 'Web Security (Practical Web Hacking, Practical Bug Bounty Hunter & Practical API Hacking)',
      details: 'Comprehensive training in web application security, Burp Suite usage, and PortSwigger labs.',
      classification: 'CLASSIFIED',
      image: '/certifications/web-security.png', // Add your image here
    },
    {
      provider: 'TCM Security',
      title: 'Rust 101',
      details: 'Introduction to Rust programming with focus on low-level systems and security applications.',
      classification: 'CLASSIFIED',
      image: '/certifications/rust.png', // Add your image here
    },
    {
      provider: 'IBM',
      title: 'Basics of Quantum Information',
      details: 'Introduction to quantum computing concepts, qubits, and quantum algorithms.',
      classification: 'TOP SECRET',
      image: '/certifications/quantum.png', // Add your image here
    },
    {
      provider: 'IBM',
      title: 'Practical Introduction to Quantum-Safe Cryptography',
      details: 'Hands-on learning of post-quantum cryptographic algorithms and implementation considerations.',
      classification: 'TOP SECRET',
      image: '/certifications/quantum-crypto.png', // Add your image here
    },
  ];

  const toggleReveal = (index) => {
    setRevealedCerts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Award className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ CREDENTIALS & CLEARANCES ]
          </h2>
          <div className="stamp stamp-classified ml-auto hidden md:block">Classified</div>
        </div>

        <div className="mb-8 p-4 bg-[#1a1a1a] border-l-4 border-[#dc2626]">
          <div className="flex items-center gap-2 text-[#dc2626]">
            <Lock className="w-4 h-4" />
            <p className="text-sm typewriter">SECURITY NOTICE: Authorization required to view certification details</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const isRevealed = revealedCerts[index];
            const isHovered = hoveredCert === index;
            return (
              <div key={index} className="relative">
                <Card 
                  className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 hover:border-[#4a5c3a] transition-all relative"
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  {/* Classification stamp */}
                  <div className={`absolute top-4 right-4 stamp ${
                    cert.classification === 'TOP SECRET' ? 'stamp-top-secret' : 'stamp-classified'
                  }`}>
                    {cert.classification}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#4a5c3a]"></div>
                      <p className="text-sm text-[#8b7355] tracking-wider">ISSUING AUTHORITY</p>
                    </div>
                    <p className="text-lg text-[#4a5c3a] font-bold mb-3">{cert.provider}</p>
                    
                    <div className={`text-[#d4d2c5] typewriter transition-all duration-300 mb-3 ${
                      isRevealed ? 'revealed' : 'redacted'
                    }`}>
                      {cert.title}
                    </div>

                    {cert.details && (
                      <div className={`text-sm text-[#a8a6a1] typewriter transition-all duration-300 pl-4 border-l-2 border-[#4a5c3a] ${
                        isRevealed ? 'revealed' : 'redacted'
                      }`}>
                        {cert.details}
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={() => toggleReveal(index)}
                    className="bg-[#4a5c3a] hover:bg-[#5a6c4a] text-[#e8e6d9] border-2 border-[#4a5c3a] flex items-center gap-2 w-full justify-center"
                  >
                    {isRevealed ? (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>CLASSIFY</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4" />
                        <span>AUTHORIZE ACCESS</span>
                      </>
                    )}
                  </Button>
                </Card>

                {/* Hover Preview */}
                {isHovered && (
                  <div className="absolute top-0 left-full ml-4 z-50 pointer-events-none hidden lg:block">
                    <div className="bg-[#1a1a1a] border-2 border-[#4a5c3a] p-3 rounded shadow-2xl">
                      <p className="text-xs text-[#8b7355] mb-2 typewriter">CERTIFICATE PREVIEW</p>
                      <div className="w-80 h-56 bg-[#252525] border border-[#3a3a3a] flex items-center justify-center overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="text-[#4a5c3a] flex-col items-center justify-center gap-2" style={{display: 'none'}}>
                          <ImageIcon className="w-8 h-8" />
                          <span className="text-xs">Image not available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;