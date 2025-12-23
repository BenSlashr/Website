'use client';

import { useState } from 'react';

interface FormData {
  company: string;
  website: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
  service: string;
  timeline: string;
  message: string;
}

const budgetOptions = [
  { value: '', label: 'Sélectionnez votre budget mensuel' },
  { value: '500-1000', label: '500 - 1 000 €/mois' },
  { value: '1000-2000', label: '1 000 - 2 000 €/mois' },
  { value: '2000-3000', label: '2 000 - 3 000 €/mois' },
  { value: '3000-4000', label: '3 000 - 4 000 €/mois' },
  { value: '4000-5000', label: '4 000 - 5 000 €/mois' },
  { value: '5000-6000', label: '5 000 - 6 000 €/mois' },
  { value: '6000-7000', label: '6 000 - 7 000 €/mois' },
  { value: '7000-8000', label: '7 000 - 8 000 €/mois' },
  { value: '8000-9000', label: '8 000 - 9 000 €/mois' },
  { value: '9000-10000', label: '9 000 - 10 000 €/mois' },
  { value: '10000+', label: '10 000 €+/mois' },
  { value: 'not-sure', label: 'À définir ensemble' },
];

const serviceOptions = [
  { value: '', label: 'Sélectionnez un service' },
  { value: 'audit', label: 'Audit SEO' },
  { value: 'strategy', label: 'Stratégie SEO' },
  { value: 'technical', label: 'SEO Technique' },
  { value: 'content', label: 'SEO Contenu' },
  { value: 'netlinking', label: 'Netlinking' },
  { value: 'local', label: 'SEO Local' },
  { value: 'ecommerce', label: 'SEO E-commerce' },
  { value: 'migration', label: 'Migration SEO' },
  { value: 'accompagnement', label: 'Accompagnement SEO complet' },
  { value: 'formation', label: 'Formation SEO' },
  { value: 'other', label: 'Autre (préciser dans le message)' },
];

const timelineOptions = [
  { value: 'urgent', label: 'Urgent (< 1 mois)' },
  { value: '1-3months', label: '1 à 3 mois' },
  { value: '3-6months', label: '3 à 6 mois' },
  { value: 'flexible', label: 'Flexible' },
];

export default function LeadFormSEO() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    website: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    service: '',
    timeline: '',
    message: '',
  });

  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.company && formData.website;
      case 3:
        return formData.name && formData.email;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Demande envoyée !</h3>
        <p className="text-gray-400 mb-6">
          Merci pour votre demande. Notre équipe vous contactera sous 24h pour discuter de votre projet SEO.
        </p>
        <div className="inline-flex items-center gap-2 text-orange-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Réponse sous 24h garantie
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-800 shadow-2xl">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Étape {step}/{totalSteps}</span>
          <span className="text-xs text-orange-400">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Services & Budget */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Votre projet SEO</h3>
              <p className="text-gray-400 text-sm">Sélectionnez le service et le budget souhaités</p>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service souhaité *
              </label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-4 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-orange-500 transition-colors"
                  required
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#252525]">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Budget Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Budget mensuel estimé
              </label>
              <div className="relative">
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full px-4 py-4 bg-[#252525] border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#252525]">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Le budget peut être ajusté lors de notre échange
              </p>
            </div>

            {/* Quick info */}
            <div className="bg-[#252525] rounded-xl p-4 border border-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    Notre TJM se situe entre <span className="text-orange-400 font-medium">550€ et 900€</span> selon la complexité du projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Company Info */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Parlez-nous de votre entreprise</h3>
              <p className="text-gray-400 text-sm">Ces informations nous aident à personnaliser votre devis</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom de l&apos;entreprise *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Votre entreprise"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Site web *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">https://</span>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    className="w-full pl-20 pr-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="votresite.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Délai souhaité
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timelineOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeline: option.value }))}
                      className={`p-3 rounded-xl border transition-all duration-200 text-center ${
                        formData.timeline === option.value
                          ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 border-orange-500/50 text-white'
                          : 'bg-[#252525] border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Détails du projet (optionnel)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Décrivez vos objectifs, défis actuels, ou toute information utile..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Vos coordonnées</h3>
              <p className="text-gray-400 text-sm">Pour vous envoyer votre devis personnalisé</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="jean@entreprise.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#252525] rounded-xl p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Récapitulatif</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service</span>
                  <span className="text-white">
                    {serviceOptions.find(s => s.value === formData.service)?.label || '-'}
                  </span>
                </div>
                {formData.budget && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Budget</span>
                    <span className="text-white">
                      {budgetOptions.find(b => b.value === formData.budget)?.label}
                    </span>
                  </div>
                )}
                {formData.company && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Entreprise</span>
                    <span className="text-white">{formData.company}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Données sécurisées
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Réponse sous 24h
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                canProceed()
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continuer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed() || isSubmitting}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                canProceed() && !isSubmitting
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Recevoir mon devis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
