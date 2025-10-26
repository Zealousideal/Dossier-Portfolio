import React from 'react';
import { Shield, FileText, Terminal, Award, GraduationCap, Users } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'profile', label: 'Profile', icon: Shield },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'volunteering', label: 'Volunteering', icon: Users },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b-2 border-[#4a5c3a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-[#4a5c3a]" />
            <div>
              <h1 className="text-2xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
                [ DOSSIER ]
              </h1>
              <p className="text-sm text-[#8b7355]">CLASSIFICATION: CONFIDENTIAL</p>
            </div>
          </div>
          <div className="stamp stamp-classified">Classified</div>
        </div>
        
        <nav className="flex flex-wrap gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 border-2 flex items-center gap-2 transition-all ${
                  activeSection === section.id
                    ? 'bg-[#4a5c3a] border-[#4a5c3a] text-[#e8e6d9]'
                    : 'bg-[#252525] border-[#3a3a3a] text-[#a8a6a1] hover:border-[#4a5c3a] hover:text-[#e8e6d9]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm typewriter">{section.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;