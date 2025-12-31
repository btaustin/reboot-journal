/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Post } from '@/lib/fetchPost';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

interface FeaturedCarouselProps {
  posts: Post[];
}

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  }, [posts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (posts.length <= 1) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [posts.length, nextSlide]);

  if (posts.length === 0) return null;

  const currentPost = posts[currentIndex];
  const isVideo = currentPost.image_feature_url?.endsWith('.mov') || currentPost.image_feature_url?.endsWith('.mp4');

  return (
    <div className="relative w-full h-[280px] md:h-[450px] lg:h-[600px] xl:h-[80vh] overflow-hidden bg-muted">
      <div className="absolute inset-0 transition-opacity duration-1000">
        {isVideo ? (
          <video
            src={currentPost.image_feature_url}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={currentPost.image_feature_url || currentPost.image_url}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/20 rounded-md" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 text-white pb-12">
        <div className="max-w-3xl space-y-6 relative">
          <div className="flex gap-2">
            {currentPost.categories.split(',').map((cat) => (
              <span key={cat} className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded shadow-lg">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%),_0_1px_3px_rgb(0_0_0_/_90%)]">
            {currentPost.title}
          </h1>
          {currentPost.subhead && (
            <div className="text-lg bg-black/50 bg-blur hidden md:block rounded-md p-4">{currentPost.subhead}</div>
          )}
          <div className="pt-4">
            <Button asChild size="lg" className="shadow-xl hover:shadow-2xl transition-shadow">
              <Link href={`/articles/${currentPost.slug}`}>Read Article</Link>
            </Button>
          </div>
        </div>
      </div>

      {posts.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
