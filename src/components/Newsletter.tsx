'use client';

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue.');
        return;
      }

      setStatus('success');
      setMessage('Merci pour votre inscription !');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="relative px-4 sm:px-6 pt-0 pb-12 sm:pb-16 md:pb-20 -mt-[50px] sm:-mt-[60px] md:-mt-[75px] z-20">
      <div className="max-w-5xl mx-auto">
        {/* Newsletter Card */}
        <div className="bg-[#2C2E34] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Restez informés des tendances et des meilleures pratiques
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Vous avez besoin d&apos;un partenaire de confiance, pour développer votre trafic
              organique. Comme avec nos clients, faisons équipe pour vous accompagner
              avec efficacité, fiabilité et pragmatisme.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Email Input */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4 gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                disabled={status === 'loading'}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-full sm:rounded-l-full sm:rounded-r-none px-5 sm:px-6 py-3 text-white text-base placeholder-gray-500 focus:outline-none focus:border-gray-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-black px-5 sm:px-6 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full text-sm font-medium hover:bg-gray-200 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
              </button>
            </form>

            {/* Status Message */}
            {message && (
              <p className={`text-sm mb-3 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              {/* Avatar heads */}
              <div className="flex -space-x-2 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34] bg-[#3a3d47] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34] bg-[#3a3d47] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#2C2E34] bg-[#3a3d47] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-white font-medium">+500 personnes</span> suivent la news
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
