/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Post } from '@/lib/fetchPost';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/articles/${post.slug}`}>
      <Card
        className="group overflow-hidden border-none shadow-none hover:shadow-lg transition-all duration-300 bg-transparent p-0 gap-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {isHovered && post.video_preview_url ? (
            <video
              src={post.video_preview_url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={post.image_preview_url || post.image_url}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
        <CardHeader className="px-4 pt-4 pb-2">
          <div className="flex gap-2 mb-2">
            {post.categories.split(',').map((cat) => (
              <span key={cat} className="text-[10px] font-bold uppercase tracking-widest text-primary/70 border border-primary/20 px-2 py-1 rounded">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <div className="text-sm text-muted-foreground line-clamp-8 [&>p]:mb-0 [&>p]:inline">
            <ReactMarkdown>{post.excerpt}</ReactMarkdown>
          </div>
        </CardContent>
        <CardFooter className="px-4 pt-2 pb-4 flex justify-between items-center">
          <span className="text-xs font-medium text-muted-foreground">
            {new Date(post.scheduled_at || post.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent hover:text-primary cursor-pointer">
            Read Article <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
