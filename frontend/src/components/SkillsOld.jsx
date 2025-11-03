// import React from 'react';
// import { Code, Shield, Network, Brain, Database, Terminal as TerminalIcon } from 'lucide-react';
// import { Card } from './ui/card';

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: 'Web Security Tools',
//       icon: Shield,
//       skills: ['Burp Suite', 'OWASP ZAP', 'Nikto', 'DirBuster', 'Gobuster', 'FFUF', 'Wfuzz', 'Postman', 'Fiddler', 'PortSwigger Labs', 'Subdomain Enumeration (Amass, Sublist3r)'],
//     },
//     {
//       category: 'Penetration Testing Frameworks',
//       icon: TerminalIcon,
//       skills: ['Metasploit', 'Nmap', 'Nessus', 'BloodHound', 'Mimikatz', 'FFUF', 'wafw00f', 'LDAP Domain Dump', 'Google Dorking', 'Active Directory'],
//     },
//     {
//       category: 'Malware Analysis & Reverse Engineering',
//       icon: Code,
//       skills: ['Static & Dynamic Analysis', 'Packed/Obfuscated Malware', 'PE/ELF File Analysis', 'Behavioral Analysis', 'Reverse Engineering', 'IOC Extraction'],
//     },
//     {
//       category: 'Networking & Protocol Analysis',
//       icon: Network,
//       skills: ['Wireshark', 'TCPDump', 'HTTP', 'DNS', 'TCP/IP', 'Deep packet inspection', 'RAT communication patterns'],
//     },
//     {
//       category: 'Programming & Scripting',
//       icon: Code,
//       skills: ['Python', 'Bash', 'PowerShell', 'C++', 'Rust', 'C', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
//     },
//     {
//       category: 'Machine Learning & Data Science',
//       icon: Brain,
//       skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Deep Learning (CNN, ANN, R-CNNs)'],
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-4 mb-12">
//           <Database className="w-8 h-8 text-[#4a5c3a]" />
//           <h2 className="text-4xl font-bold text-[#e8e6d9] typewriter" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
//             [ TECHNICAL ARSENAL ]
//           </h2>
//           <div className="stamp stamp-confidential ml-auto hidden md:block">Confidential</div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skillCategories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <Card key={index} className="bg-[#1a1a1a] border-[#3a3a3a] border-2 p-6 hover:border-[#4a5c3a] transition-all">
//                 <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#3a3a3a]">
//                   <Icon className="w-6 h-6 text-[#4a5c3a]" />
//                   <h3 className="text-xl font-bold text-[#e8e6d9] typewriter">
//                     {category.category}
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-[#252525] text-[#d4d2c5] text-sm border border-[#3a3a3a] hover:border-[#4a5c3a] transition-all">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;