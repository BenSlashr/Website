import Link from 'next/link';

interface Expertise {
  name: string;
  href: string;
}

interface OtherExpertisesSectionProps {
  title?: string;
  subtitle?: string;
  expertises: Expertise[];
  currentExpertise?: string;
}

const OtherExpertisesSection = ({
  title = "Nos autres expertises",
  subtitle = "Notre équipe a l'habitude de travailler sur de nombreux CMS.",
  expertises,
  currentExpertise
}: OtherExpertisesSectionProps) => {
  return (
    <section className="bg-[#252525] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Expertises Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {expertises.map((expertise) => {
            const isActive = expertise.name.toLowerCase() === currentExpertise?.toLowerCase();

            return (
              <Link
                key={expertise.name}
                href={expertise.href}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                    : 'bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#2a2a2a] border border-gray-700 hover:border-orange-500/50'
                }`}
              >
                {expertise.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherExpertisesSection;
