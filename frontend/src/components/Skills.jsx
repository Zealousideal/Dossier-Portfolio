import React from 'react';
import { Code, Shield, Network, Brain } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const skillSections = [
    {
      title: 'Coding',
      icon: Code,
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
        { name: 'PowerShell', logo: 'https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/ps_black_128.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: [
        { name: 'Burp Suite', logo: 'https://cdn.worldvectorlogo.com/logos/burpsuite.svg' },
        { name: 'Metasploit', logo: 'https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg' },
        { name: 'Wireshark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wireshark/wireshark-original.svg' },
        { name: 'Nmap', logo: 'https://nmap.org/images/nmap-logo-256x256.png' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      ],
    },
    {
      title: 'Networking',
      icon: Network,
      skills: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Shield className="w-8 h-8 text-[#4a5c3a]" />
          <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
            [ TECHNICAL ARSENAL ]
          </h2>
          <div className="stamp stamp-confidential ml-auto hidden md:block">Confidential</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 hover:border-[#4a5c3a] transition-all">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#3a3a3a]">
                  <Icon className="w-6 h-6 text-[#4a5c3a]" />
                  <h3 className="text-xl font-bold text-[#e8e6d9] typewriter">
                    {section.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                  {section.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="group relative flex flex-col items-center justify-center p-2 hover:bg-[#252525] rounded transition-all"
                      title={skill.name}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                          onError={(e) => {
                            e.target.parentElement.parentElement.style.display = 'none';
                          }}
                        />
                      </div>
                      <span className="text-xs text-[#8b7355] mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
