'use client';

import { useState, useEffect } from 'react';

export default function SidebarNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="group rounded-[15px] p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
      <div className="bg-[#2C2E34] rounded-[14px] p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 text-[#E74601]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-white font-bold text-sm">Newsletter SEO</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Recevez nos meilleurs conseils SEO chaque semaine.
        </p>
        {isClient ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              disabled={status === 'loading'}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#E74601] mb-3 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Inscription...' : status === 'success' ? 'Inscrit !' : "Je m'inscris"}
            </button>
          </form>
        ) : (
          <div>
            <div className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2.5 text-gray-500 text-sm mb-3">
              Votre email
            </div>
            <div className="w-full bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium text-center">
              Je m&apos;inscris
            </div>
          </div>
        )}
        {isClient && status === 'success' && (
          <p className="text-green-400 text-xs mt-2">Merci pour votre inscription !</p>
        )}
        {isClient && status === 'error' && (
          <p className="text-red-400 text-xs mt-2">Erreur, veuillez réessayer.</p>
        )}
      </div>
    </div>
  );
}
