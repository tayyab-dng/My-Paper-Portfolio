'use client';

import React from 'react';
import PaperHeader from '@/components/PaperHeader';
import PaperFooter from '@/components/PaperFooter';

export default function LegalPage() {
  return (
    <main className="min-h-screen w-full bg-[#cdc6be] text-[#1d1d1b] relative selection:bg-[#1d1d1b] selection:text-[#cdc6be] flex flex-col justify-between">
      <PaperHeader isFixed={false} leftTitle="Amsterdam, NL" />

      <div className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32 font-editorial">
        <h1 className="font-canopee text-[14vw] md:text-[6vw] uppercase leading-none mb-8 tracking-[-0.03em]">
          Legal &amp; Imprint
        </h1>

        <div className="space-y-6 text-lg md:text-xl font-light text-[#1d1d1b]/90 border-t border-[#1d1d1b]/30 pt-8">
          <p>
            <strong>Tayyab Safdar Portfolio</strong> — Independent Designer &amp; Creative Developer based in Amsterdam, Netherlands.
          </p>
          <p>
            All projects, typography, design assets, and case studies featured in this portfolio are protected by copyright law. Reproduction, modification, or distribution in any form without prior written authorization is strictly prohibited.
          </p>
          <p>
            For project inquiries, partnerships, or editorial requests, please reach out via email: <a href="mailto:info@niccolomiranda.com" className="underline font-medium">info@niccolomiranda.com</a>.
          </p>
        </div>
      </div>

      <PaperFooter />
    </main>
  );
}
