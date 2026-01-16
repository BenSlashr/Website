import Link from 'next/link';
import { SimilarityResult } from '@/lib/internalLinking';

interface RelatedServicesProps {
  services: SimilarityResult[];
  title?: string;
}

const RelatedServices = ({
  services,
  title = 'Services associés',
}: RelatedServicesProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-[#2C2E34] rounded-2xl p-8 mb-8">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
        <span className="w-8 h-8 bg-gradient-to-br from-[#E74601] to-[#FF9011] rounded-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>
        {title}
      </h3>

      <div className="space-y-4">
        {services.map((result, index) => (
          <Link
            key={result.item.id}
            href={result.item.url}
            className="group block bg-[#1a1a1a] rounded-xl p-4 hover:bg-[#1f1f1f] transition-all duration-200 border border-transparent hover:border-[#E74601]/20"
          >
            <div className="flex items-start gap-4">
              {/* Number indicator */}
              <span className="flex-shrink-0 w-6 h-6 bg-[#E74601]/10 rounded-full flex items-center justify-center text-[#E74601] text-xs font-medium">
                {index + 1}
              </span>

              <div className="flex-1 min-w-0">
                {/* Title */}
                <h4 className="text-white font-medium text-sm group-hover:text-[#E74601] transition-colors line-clamp-1">
                  {result.item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {result.item.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-500 group-hover:text-[#E74601] transition-colors mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedServices;
