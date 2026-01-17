import { Metadata } from 'next';
import { getArticles, getAllCategories } from '@/lib/blog';
import Newsletter from '@/components/Newsletter';
import Breadcrumb from '@/components/Breadcrumb';
import BlogPageClient from '@/components/BlogPageClient';

// Revalide toutes les 60 secondes (ISR)
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog SEO & Search Marketing',
  description: 'Découvrez nos articles, guides et conseils SEO. Actualités, bonnes pratiques et stratégies pour améliorer votre référencement naturel.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  // Récupère les articles et catégories depuis WordPress
  const [articles, categories] = await Promise.all([
    getArticles(),
    getAllCategories(),
  ]);

  return (
    <>
      {/* Blog Header */}
      <section className="bg-[#1a1a1a] pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white italic">
            Blog
          </h1>
        </div>
      </section>

      {/* Client-side filterable content */}
      <BlogPageClient articles={articles} categories={categories} />

      {/* Fil d'Ariane */}
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <Newsletter />
    </>
  );
}
