'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [hasShot, setHasShot] = useState(false);
  const [scored, setScored] = useState(false);

  useEffect(() => {
    // Start shooting animation after a short delay
    const shootTimer = setTimeout(() => setHasShot(true), 800);
    // Ball lands in position (becomes the 0)
    const scoreTimer = setTimeout(() => setScored(true), 1600);

    return () => {
      clearTimeout(shootTimer);
      clearTimeout(scoreTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Basketball Scene */}
      <div className="relative w-full max-w-3xl h-[280px] md:h-[320px] mb-8 flex items-center justify-center">

        {/* 4 _ 4 layout - the ball becomes the 0 */}
        <div className="flex items-center justify-center gap-0">
          {/* First 4 */}
          <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-[#E74601] select-none">
            4
          </span>

          {/* Space for ball/0 */}
          <div className="relative w-[100px] md:w-[150px] lg:w-[180px] h-[120px] md:h-[180px] lg:h-[220px] flex items-center justify-center">
            {/* Basketball that becomes the 0 */}
            <div
              className={`absolute transition-all ${
                hasShot ? 'duration-700 ease-out' : 'duration-0'
              }`}
              style={{
                left: hasShot ? '50%' : '-150px',
                top: hasShot ? '50%' : '-50px',
                transform: hasShot
                  ? `translate(-50%, -50%) scale(${scored ? 1 : 0.3}) rotate(${scored ? '720deg' : '360deg'})`
                  : 'translate(0, 0) scale(0.3) rotate(0deg)',
                opacity: hasShot ? 1 : 0.8,
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className={`transition-all duration-300 ${scored ? 'w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]' : 'w-[40px] h-[40px] md:w-[50px] md:h-[50px]'}`}
              >
                {/* Ball */}
                <circle cx="50" cy="50" r="46" fill="url(#ballGradient404)" stroke="#c2410c" strokeWidth="3" />
                {/* Ball lines */}
                <path d="M50 4 L50 96" stroke="#c2410c" strokeWidth="2" />
                <path d="M4 50 L96 50" stroke="#c2410c" strokeWidth="2" />
                <path d="M15 20 Q50 50 15 80" stroke="#c2410c" strokeWidth="2" fill="none" />
                <path d="M85 20 Q50 50 85 80" stroke="#c2410c" strokeWidth="2" fill="none" />
                <defs>
                  <radialGradient id="ballGradient404" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Second 4 */}
          <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none text-[#E74601] select-none">
            4
          </span>
        </div>

        {/* Basketball Player - positioned to the left */}
        <div
          className={`absolute left-0 md:left-8 bottom-4 transition-transform duration-500 ${hasShot ? 'scale-105' : ''}`}
        >
          <svg
            width="60"
            height="120"
            viewBox="0 0 80 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[80px] md:h-[160px]"
          >
            {/* Head */}
            <circle cx="40" cy="20" r="15" fill="#f97316" />

            {/* Body */}
            <rect x="30" y="35" width="20" height="45" rx="8" fill="#f97316" />

            {/* Left Leg */}
            <rect x="25" y="78" width="12" height="50" rx="5" fill="#f97316" />

            {/* Right Leg */}
            <rect x="43" y="78" width="12" height="50" rx="5" fill="#f97316" />

            {/* Left Arm (supporting) */}
            <rect
              x="15"
              y="38"
              width="10"
              height="30"
              rx="5"
              fill="#f97316"
              className={`transition-transform duration-500 origin-top ${hasShot ? 'rotate-[-30deg]' : 'rotate-[20deg]'}`}
              style={{ transformOrigin: '20px 38px' }}
            />

            {/* Right Arm (shooting) */}
            <rect
              x="55"
              y="30"
              width="10"
              height="35"
              rx="5"
              fill="#f97316"
              className={`transition-transform duration-500 ${hasShot ? 'rotate-[-80deg]' : 'rotate-[-30deg]'}`}
              style={{ transformOrigin: '60px 30px' }}
            />

            {/* Jersey number */}
            <text x="40" y="62" textAnchor="middle" fill="#1a1a1a" fontSize="14" fontWeight="bold">
              4
            </text>
          </svg>
        </div>
      </div>

      {/* Message */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
        {scored ? 'Panier ! Mais page introuvable...' : 'Page introuvable'}
      </h2>
      <p className="text-gray-400 text-center max-w-md mb-10">
        Oups ! Cette page n&apos;existe pas ou a été déplacée.
        Pas de panique, on va vous remettre sur la bonne piste.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/blog"
          className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
        >
          Voir le blog
        </Link>
      </div>

      {/* Fun SEO message */}
      <p className="text-gray-600 text-sm mt-16 text-center">
        Même les meilleurs SEO font des 404... l&apos;important c&apos;est de bien les gérer 😉
      </p>
    </main>
  );
}
