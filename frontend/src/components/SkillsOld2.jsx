// import React from 'react';
// import { Code, Shield, Network, Brain, Database, Terminal as TerminalIcon, Search, Bug, Lock } from 'lucide-react';
// import { Card } from './ui/card';

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: 'Web Security',
//       icon: Shield,
//       skills: ['OWASP Top 10', 'Web Application Penetration Testing', 'SQL Injection', 'XSS', 'CSRF', 'CORS', 'SSRF', 'Race-Conditions', 'Command Injection', 'File Inclusion'],
//     },
//     {
//       category: 'Web Security Tools',
//       icon: Shield,
//       skills: ['Burp Suite', 'OWASP ZAP', 'Nikto', 'DirBuster', 'Gobuster', 'FFUF', 'Wfuzz', 'Postman', 'Fiddler', 'PortSwigger Labs', 'Subdomain Enumeration (Amass, Sublist3r)'],
//     },
//     {
//       category: 'Bug Bounty & Recon',
//       icon: Search,
//       skills: ['Google Dorking', 'Subdomain Enumeration (Amass, Sublist3r)', 'Asset Discovery', 'Shodan', 'Recon-ng'],
//     },
//     {
//       category: 'Penetration Testing Frameworks',
//       icon: TerminalIcon,
//       skills: ['Metasploit', 'Nmap', 'Nessus', 'BloodHound', 'Mimikatz', 'FFUF', 'wafw00f', 'LDAP Domain Dump', 'Google Dorking', 'Active Directory'],
//     },
//     {
//       category: 'Network Fundamentals',
//       icon: Network,
//       skills: ['TCP/IP', 'OSI Model', 'Subnetting', 'VLANs', 'Routing (RIP, OSPF, EIGRP)', 'Switching', 'NAT', 'ACLS'],
//     },
//     {
//       category: 'Network Security Tools',
//       icon: Network,
//       skills: ['Wireshark', 'tcpdump', 'Nmap', 'Netcat'],
//     },
//     {
//       category: 'Protocols & Services',
//       icon: Database,
//       skills: ['HTTP/S', 'DNS', 'DHCP', 'FTP', 'SMTP', 'SNMP', 'SSH', 'Telnet', 'ICMP', 'BGP', 'MPLS', 'FHRP', 'IP'],
//     },
//     {
//       category: 'Malware Analysis & Reverse Engineering',
//       icon: Bug,
//       skills: ['Static & Dynamic Analysis', 'Packed/Obfuscated Malware', 'PE/ELF File Analysis', 'Behavioral Analysis', 'Reverse Engineering', 'IOC Extraction'],
//     },
//     {
//       category: 'Static & Dynamic Analysis Tools',
//       icon: Code,
//       skills: ['Ghidra', 'PE Studio', 'dnSpy', 'x32dbg', 'Process Explorer', 'Regshot', 'Sysinternals Suite', 'YARA'],
//     },
//     {
//       category: 'Networking & Protocol Analysis',
//       icon: Network,
//       skills: ['Deep packet inspection with Wireshark', 'TCPDump', 'HTTP', 'DNS', 'TCP/IP', 'RAT communication patterns'],
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
//           <Lock className="w-8 h-8 text-[#4a5c3a]" />
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
