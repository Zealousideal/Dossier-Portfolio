import React, { useState } from 'react';
import { Award, Lock, Unlock, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [revealedCerts, setRevealedCerts] = useState({});
  const [hoveredCert, setHoveredCert] = useState(null); const [previewPosition, setPreviewPosition] = useState('right');

  // Add function to check available space
  const checkPreviewPosition = (cardElement) => {
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const spaceOnRight = window.innerWidth - rect.right;
    const previewWidth = 320; // 80 (w-80) in tailwind

    if (spaceOnRight < previewWidth + 20) {
      setPreviewPosition('left');
    } else {
      setPreviewPosition('right');
    }
  };

  const certifications = [
    {
      provider: 'INE - eJPT',
      title: 'eLearnSecurity Junior Penetration Tester',
      classification: 'CLASSIFIED',
      image: '/certifications/ejpt.jpg',
    },
    {
      provider: 'INE - ICCA',
      title: 'INE Certified Cloud Associate',
      classification: 'CLASSIFIED',
      image: '/certifications/icca.jpg',
    },
    {
      provider: 'Practical Malware Analysis and Triage',
      title: 'Practical Malware Analysis and Triage',
      details:
        'Static and dynamic malware analysis, reverse engineering, Go & C# malware, Anti-Analysis Techniques and Binary Patching.',
      classification: 'TOP SECRET',
      image: '/certifications/pmat.jpg',
    },
    {
      provider: 'TCM Security',
      title: 'Practical Ethical Hacking',
      classification: 'CLASSIFIED',
      image: '/certifications/peh.jpg',
    },
    {
      provider: 'TCM Security',
      title: 'Practical Web Hacking',
      details:
        'Intermediate and advanced web application security, Burp Suite usage, and PortSwigger labs.',
      classification: 'CLASSIFIED',
      image: '/certifications/pwh.jpg',
    },
    {
      provider: 'TCM Security',
      title: 'Practical Bug Bounty Hunter',
      details:
        'An Introduction to Bug Bounty Hunting, Reconnaissance, and Vulnerability Discovery.',
      classification: 'CLASSIFIED',
      image: '/certifications/pbbh.jpg',
    },
    {
      provider: 'TCM Security',
      title: 'Practical API Hacking',
      details:
        'API Security fundamentals, common vulnerabilities, and exploitation techniques.',
      classification: 'CLASSIFIED',
      image: '/certifications/pah.jpg',
    },
    {
      provider: 'TCM Security',
      title: 'Rust 101',
      details:
        'Introduction to Rust programming with focus on low-level systems and security applications.',
      classification: 'CLASSIFIED',
      image: '/certifications/rust101.jpg',
    },
    {
      provider: 'IBM',
      title: 'Basics of Quantum Information',
      details:
        'Introduction to quantum computing concepts, qubits, and quantum algorithms.',
      classification: 'TOP SECRET',
      image: '/certifications/',
    },
    {
      provider: 'IBM',
      title: 'Practical Introduction to Quantum-Safe Cryptography',
      details:
        'Hands-on learning of post-quantum cryptographic algorithms and implementation considerations.',
      classification: 'TOP SECRET',
      image: '/certifications/PIQSC.jpeg',
    },
  ];

  const toggleReveal = (index) => {
    setRevealedCerts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        {/* Header */ }
        <div className="flex items-center gap-4 mb-12">
          <Award className="w-8 h-8 text-[#4a5c3a]" />
          <h2
            className="text-4xl font-bold text-[#e8e6d9] typewriter"
            style={ {
              fontFamily: "'Special Elite', 'Courier New', monospace",
            } }
          >
            [ CREDENTIALS & CLEARANCES ]
          </h2>
          <div className="stamp stamp-classified ml-auto hidden md:block">
            Classified
          </div>
        </div>

        {/* Security Notice */ }
        <div className="mb-8 p-4 bg-[#1a1a1a] border-l-4 border-[#dc2626]">
          <div className="flex items-center gap-2 text-[#dc2626]">
            <Lock className="w-4 h-4" />
            <p className="text-sm typewriter">
              SECURITY NOTICE: Authorization required to view certification
              details
            </p>
          </div>
        </div>

        {/* Certifications Grid */ }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          { certifications.map((cert, index) => {
            const isRevealed = revealedCerts[index];
            const isHovered = hoveredCert === index;

            return (
              <motion.div
                key={ index }
                className="relative"
                onMouseEnter={ () => {
                  setHoveredCert(index);
                  const cardElement = document.querySelector(`[data-cert-index="${index}"]`);
                  checkPreviewPosition(cardElement);
                } }
                data-cert-index={ index }
                onMouseLeave={ () => setHoveredCert(null) }
                whileHover={ {
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0px 10px 30px rgba(74, 92, 58, 0.4)',
                } }
                transition={ {
                  type: 'spring',
                  stiffness: 250,
                  damping: 18,
                } }
              >
                {/* Main Card */ }
                <Card
                  className={ `bg-[#1a1a1a] border-2 p-6 transition-all duration-300 relative ${isHovered
                    ? 'border-[#6e8453] shadow-[0_0_25px_rgba(74,92,58,0.5)]'
                    : 'border-[#3a3a3a]'
                    }` }
                >
                  {/* Classification Stamp */ }
                  <div
                    className={ `absolute top-4 right-4 stamp ${cert.classification === 'TOP SECRET'
                      ? 'stamp-top-secret'
                      : 'stamp-classified'
                      }` }
                  >
                    { cert.classification }
                  </div>

                  {/* Certificate Info */ }
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-[#4a5c3a]" />
                      <p className="text-sm text-[#8b7355] tracking-wider">
                        ISSUING AUTHORITY
                      </p>
                    </div>
                    <p className="text-lg text-[#4a5c3a] font-bold mb-3">
                      { cert.provider }
                    </p>

                    <div
                      className={ `text-[#d4d2c5] typewriter transition-all duration-300 mb-3 ${isRevealed ? 'revealed' : 'redacted'
                        }` }
                    >
                      { cert.title }
                    </div>

                    { cert.details && (
                      <div
                        className={ `text-sm text-[#a8a6a1] typewriter transition-all duration-300 pl-4 border-l-2 border-[#4a5c3a] ${isRevealed ? 'revealed' : 'redacted'
                          }` }
                      >
                        { cert.details }
                      </div>
                    ) }
                  </div>

                  {/* Access Button */ }
                  <Button
                    onClick={ () => toggleReveal(index) }
                    className="bg-[#4a5c3a] hover:bg-[#5a6c4a] text-[#e8e6d9] border-2 border-[#4a5c3a] flex items-center gap-2 w-full justify-center"
                  >
                    { isRevealed ? (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>CLASSIFY</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4" />
                        <span>AUTHORIZE ACCESS</span>
                      </>
                    ) }
                  </Button>
                </Card>

                {/* Hover Preview */ }
                <AnimatePresence>
                  { isHovered && (
                    <motion.div
                      initial={ { opacity: 0, y: 15, scale: 0.95 } }
                      animate={ {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        boxShadow: '0 0 25px rgba(74, 92, 58, 0.4)',
                      } }
                      exit={ { opacity: 0, y: 15, scale: 0.95 } }
                      transition={ { duration: 0.3, ease: 'easeOut' } }
                      className={ `absolute top-0 z-50 pointer-events-none hidden lg:block ${previewPosition === 'right'
                        ? 'left-full ml-4'
                        : 'right-full mr-4'
                        }` }
                    >
                      <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border-2 border-[#4a5c3a] p-3 rounded-xl shadow-2xl">
                        <p className="text-xs text-[#8b7355] mb-2 typewriter">
                          CERTIFICATE PREVIEW
                        </p>
                        <div className="w-80 h-56 bg-[#252525] border border-[#3a3a3a] flex items-center justify-center overflow-hidden">
                          <motion.img
                            src={ cert.image }
                            alt={ cert.title }
                            initial={ { scale: 0.98 } }
                            animate={ { scale: 1 } }
                            transition={ { duration: 0.4, ease: 'easeOut' } }
                            className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                            onError={ (e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            } }
                          />
                          <div
                            className="text-[#4a5c3a] flex-col items-center justify-center gap-2"
                            style={ { display: 'none' } }
                          >
                            <ImageIcon className="w-8 h-8" />
                            <span className="text-xs">
                              Image not available
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) }
                </AnimatePresence>
              </motion.div>
            );
          }) }
        </div>
      </div>
    </section>
  );
};

export default Certifications;
