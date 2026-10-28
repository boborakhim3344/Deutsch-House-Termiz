import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blog';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';

interface BlogProps {
  selectedPost: BlogPost | null;
  onSelectPost: (post: BlogPost | null) => void;
  onOpenRegister: () => void;
}

export const Blog: React.FC<BlogProps> = ({ selectedPost, onSelectPost, onOpenRegister }) => {
  const { language, t } = useLanguage();

  if (selectedPost) {
    return (
      <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => onSelectPost(null)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-zinc-800 hover:bg-stone-50 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Barcha maqolalar</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#E5B84B] text-xs font-bold text-zinc-950">
                {selectedPost.category[language]}
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime[language]}
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-6">
              {selectedPost.title[language]}
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed font-normal border-l-4 border-[#E5B84B] pl-4 italic">
              {selectedPost.excerpt[language]}
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-[32px] overflow-hidden min-h-[300px] sm:min-h-[420px] mb-10 shadow-md">
            <img
              src={selectedPost.image}
              alt={selectedPost.title[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Full Article Content */}
          <div className="bg-white rounded-[32px] border border-stone-200 p-8 sm:p-12 shadow-xs mb-12">
            <div className="prose prose-stone max-w-none text-stone-800 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal space-y-6">
              {selectedPost.content[language]}
            </div>
          </div>

          {/* Article CTA */}
          <div className="rounded-[32px] bg-[#1C1917] text-white p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-medium mb-3">
              Ushbu mavzuda savollaringiz bormi?
            </h3>
            <p className="text-stone-300 text-sm max-w-lg mx-auto mb-6">
              Deutsch House ustozlari sizga darajangizni aniqlash va Germaniyada o'qish imkoniyatlarini tanlashda yordam berishadi.
            </p>
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full bg-gradient-to-r from-[#D4A034] to-[#E5B84B] text-zinc-950 font-semibold text-sm shadow-md cursor-pointer"
            >
              <span>Ustoz bilan bepul suhbatga yozilish</span>
              <span className="w-6 h-6 rounded-full bg-white text-zinc-900 inline-flex items-center justify-center font-bold">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5B84B]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              {t.blogSec.label}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight mb-4">
            {t.blogSec.heading}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {t.blogSec.subheading}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                onSelectPost(post);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-[32px] bg-white border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-zinc-900 shadow-xs">
                    {post.category[language]}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
                    {post.readTime[language]}
                  </span>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-semibold text-zinc-950 leading-snug mb-3 group-hover:text-[#C9962B] transition-colors">
                    {post.title[language]}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt[language]}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-semibold text-zinc-900 group-hover:text-[#C9962B] transition-colors">
                  <span>To'liq o'qish</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
