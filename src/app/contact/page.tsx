'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const CALENDLY_URL = 'https://calendly.com/quentin-slashr/appel-de-decouverte-client-by-slashr?back=1';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
          {/* Tag */}
          <span className="inline-block bg-[#2C2E34] text-white text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider">
            Contact
          </span>

          {/* Title */}
          <h1
            className="font-bold text-white text-center"
            style={{
              fontSize: 'clamp(32px, 6vw, 55px)',
              lineHeight: '110%',
              letterSpacing: '-0.04em',
            }}
          >
            Contactez-nous
          </h1>

          {/* Description */}
          <p
            className="text-white/70 text-center max-w-2xl"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '145%',
            }}
          >
            Basée à Lille, l&apos;agence Slashr répond à vos projets dans toute la France.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="font-bold text-white mb-6 sm:mb-8"
                style={{
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                }}
              >
                Nos coordonnées
              </h2>

              {/* Phone & Email */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold mb-1"
                      style={{
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Téléphone
                    </h3>
                    <a
                      href="tel:+33632997719"
                      className="text-white/70 hover:text-white transition-colors"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '145%',
                      }}
                    >
                      (+33) 06 32 99 77 19
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E74601] to-[#CE08A9] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold mb-1"
                      style={{
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:hello@slashr.fr"
                      className="text-white/70 hover:text-white transition-colors"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '145%',
                      }}
                    >
                      hello@slashr.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <h3
                className="text-white font-bold mb-4 sm:mb-6"
                style={{
                  fontSize: '20px',
                  lineHeight: '130%',
                  letterSpacing: '-0.01em',
                }}
              >
                Notre bureau
              </h3>
              <div className="mb-8 sm:mb-12">
                <div className="bg-[#2C2E34] rounded-2xl p-6 border border-white/10">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#E74601] to-[#CE08A9] text-white text-xs font-medium rounded-full mb-4">
                    Lille
                  </span>
                  <p
                    className="text-white/70"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    165 avenue de Bretagne
                    <br />
                    59800 LILLE
                  </p>
                </div>
              </div>

              {/* CTA Calendly */}
              <div className="bg-[#2C2E34] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3
                  className="text-white font-bold mb-2 sm:mb-3"
                  style={{
                    fontSize: '20px',
                    lineHeight: '130%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Préférez un appel ?
                </h3>
                <p
                  className="text-white/70 mb-4 sm:mb-6"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                  }}
                >
                  Réservez un créneau de 30 minutes pour discuter de votre projet avec nos experts.
                </p>
                <div className="group inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 px-[30px] py-[15px] bg-white rounded-full text-[#2C2E34] font-semibold transition-colors"
                    style={{
                      fontSize: '15px',
                      lineHeight: '145%',
                    }}
                  >
                    Prendre RDV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#2C2E34] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10">
                <h2
                  className="font-bold text-white mb-2"
                  style={{
                    fontSize: 'clamp(24px, 4vw, 32px)',
                    lineHeight: '110%',
                    letterSpacing: '-0.04em',
                  }}
                >
                  Envoyez-nous un message
                </h2>
                <p
                  className="text-white/70 mb-6 sm:mb-8"
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '145%',
                  }}
                >
                  Nous vous répondons sous 24h.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3
                      className="text-white font-bold mb-2"
                      style={{
                        fontSize: '20px',
                        lineHeight: '130%',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Message envoyé !
                    </h3>
                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '145%',
                      }}
                    >
                      Nous vous répondrons très rapidement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="website"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Site web
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://"
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-white/70 mb-2"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '145%',
                          }}
                        >
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: '15px',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white/70 mb-2"
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontWeight: 500,
                          fontSize: '14px',
                          lineHeight: '145%',
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet..."
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#E74601] transition-colors resize-none"
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontSize: '15px',
                        }}
                      />
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#E74601] to-[#CE08A9] text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        fontSize: '15px',
                        lineHeight: '145%',
                      }}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>

                    <p
                      className="text-white/50 text-center"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '145%',
                      }}
                    >
                      Vos données personnelles sont protégées. Consultez notre{' '}
                      <Link href="/politique-de-cookies-ue" className="text-[#E74601] hover:underline">
                        politique de confidentialité
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Contact' },
        ]}
      />
    </main>
  );
}
