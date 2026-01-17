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
    <div className="group rounded-[15px] p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#E74601] hover:via-[#CE08A9] hover:to-[#8962FD] transition-all duration-300">
      <div className="bg-[#2C2E34] rounded-[14px] p-6">
        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
          {title}
        </h3>

        <div className="space-y-3">
          {services.map((result) => (
            <Link
              key={result.item.id}
              href={result.item.url}
              className="block text-gray-300 text-sm hover:text-[#E74601] transition-colors"
            >
              {result.item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;
