'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function NotFound() {
  const [phase, setPhase] = useState<'falling' | 'bouncing' | 'settled'>('falling');
  const [ballPosition, setBallPosition] = useState({ y: -400, rotation: 0, scale: 1, squash: 1 });
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = Date.now();

    // Physics constants
    const gravity = 2500; // pixels per second squared
    const bounceDamping = 0.6; // Energy loss per bounce
    const floorY = 0; // Final resting position
    const startY = -450; // Start from near the top (nav area)

    let velocity = 0;
    let currentY = startY;
    let rotation = 0;
    let bounceCount = 0;
    let lastTime = Date.now();
    let squash = 1;
    let squashVelocity = 0;

    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTime) / 1000; // Convert to seconds
      lastTime = now;

      // Apply gravity
      velocity += gravity * deltaTime;
      currentY += velocity * deltaTime;

      // Rotation based on velocity
      rotation += velocity * deltaTime * 0.5;

      // Squash spring physics (for bounce effect)
      const squashSpring = 300;
      const squashDamping = 15;
      const squashForce = (1 - squash) * squashSpring - squashVelocity * squashDamping;
      squashVelocity += squashForce * deltaTime;
      squash += squashVelocity * deltaTime;

      // Check for floor collision
      if (currentY >= floorY) {
        currentY = floorY;

        // Only bounce if velocity is significant enough
        if (Math.abs(velocity) > 50) {
          velocity = -velocity * bounceDamping;
          bounceCount++;

          // Squash effect on impact
          const impactStrength = Math.min(Math.abs(velocity) / 1000, 0.4);
          squash = 1 - impactStrength;
          squashVelocity = 0;

          if (bounceCount >= 1) {
            setPhase('bouncing');
          }
        } else {
          // Ball has settled
          velocity = 0;
          squash = 1;
          setPhase('settled');
        }
      }

      setBallPosition({
        y: currentY,
        rotation,
        scale: 1,
        squash: Math.max(0.6, Math.min(1.2, squash)),
      });

      // Continue animation until settled
      if (phase !== 'settled' && (Math.abs(velocity) > 5 || currentY < floorY)) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]" />

      {/* Animated court lines (subtle) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-orange-500/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-orange-500/30 rounded-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* 404 with animated ball */}
        <div className="relative flex items-center justify-center mb-8">
          {/* First 4 */}
          <span
            className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, #666 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(249, 115, 22, 0.3)',
            }}
          >
            4
          </span>

          {/* Ball container - becomes the 0 */}
          <div className="relative w-[80px] sm:w-[110px] md:w-[140px] lg:w-[170px] h-[100px] sm:h-[140px] md:h-[180px] lg:h-[220px] flex items-center justify-center">
            {/* The basketball */}
            <div
              className="absolute"
              style={{
                transform: `translateY(${ballPosition.y}px) rotate(${ballPosition.rotation}deg) scaleX(${1 + (1 - ballPosition.squash) * 0.3}) scaleY(${ballPosition.squash})`,
              }}
            >
              <div className="relative">
                {/* Ball glow */}
                <div
                  className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
                    phase === 'settled' ? 'bg-orange-500/50 scale-125' : 'bg-orange-500/30'
                  }`}
                />

                {/* Ball SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-[65px] h-[65px] sm:w-[90px] sm:h-[90px] md:w-[115px] md:h-[115px] lg:w-[140px] lg:h-[140px] relative z-10"
                >
                  <defs>
                    <radialGradient id="ballGradient" cx="35%" cy="35%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </radialGradient>
                    <filter id="ballShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
                    </filter>
                  </defs>

                  {/* Main ball */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="url(#ballGradient)"
                    filter="url(#ballShadow)"
                  />

                  {/* Ball seams */}
                  <path
                    d="M50 4 C50 4 50 96 50 96"
                    stroke="#9a3412"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M4 50 C4 50 96 50 96 50"
                    stroke="#9a3412"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M12 18 Q 35 50 12 82"
                    stroke="#9a3412"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M88 18 Q 65 50 88 82"
                    stroke="#9a3412"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Highlight */}
                  <ellipse
                    cx="35"
                    cy="30"
                    rx="12"
                    ry="8"
                    fill="rgba(255,255,255,0.25)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Second 4 */}
          <span
            className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, #666 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(249, 115, 22, 0.3)',
            }}
          >
            4
          </span>
        </div>

        {/* Message */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Page introuvable
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base sm:text-lg">
            Cette page n&apos;existe pas ou a été déplacée.
            <br />
            <span className="text-gray-500">On va vous remettre sur la bonne piste.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-full text-base font-medium transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full transition-colors duration-300 group-hover:bg-[#1a1a1a]" />
            <span className="relative z-10 text-white">Retour à l&apos;accueil</span>
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full text-base font-medium border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-300"
          >
            Nous contacter
          </Link>
        </div>

        {/* Fun message */}
        <p className="text-gray-600 text-sm mt-16 text-center">
          Même les meilleurs SEO font des 404...
          <span className="text-orange-500/70"> l&apos;important c&apos;est de bien les gérer</span> 😉
        </p>
      </div>
    </main>
  );
}
