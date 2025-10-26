import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-[#4a5c3a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 p-6 bg-[#252525] border-2 border-[#8b7355]">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-[#8b7355] mt-1" />
            <div>
              <p className="text-[#8b7355] font-bold mb-2 typewriter">DECLASSIFICATION NOTICE</p>
              <p className="text-sm text-[#d4d2c5] typewriter leading-relaxed">
                This dossier contains information pertaining to ongoing cybersecurity research and operations. 
                All contents are subject to review and may be reclassified without prior notice. 
                Unauthorized access, use, or distribution of classified information is strictly prohibited.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#3a3a3a] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#4a5c3a]" />
              <p className="text-sm text-[#8b7355] typewriter">
                Document ID: DOSSIER-SINOY-DE-2025
              </p>
            </div>
            <p className="text-sm text-[#8b7355] typewriter">
              Last Updated: January 2025
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-[#8b7355] typewriter">
              © 2025 Sinoy De. All Rights Reserved. | Classification Level: CONFIDENTIAL
            </p>
          </div>
        </div>

        {/* Stamp decoration */}
        <div className="mt-8 flex justify-center gap-8">
          <div className="stamp stamp-confidential">Confidential</div>
          <div className="stamp stamp-top-secret">Top Secret</div>
          <div className="stamp stamp-classified">Classified</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;