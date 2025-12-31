/* eslint-disable @next/next/no-img-element */
import fetchPost from "@/lib/fetchPost";
import ReactMarkdown from 'react-markdown';
import Header from "@/components/Header";
import { Calendar, Clock, Tag } from "lucide-react";

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground">The article you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
      </div>
    );
  }

  const isVideo = post.image_feature_url?.endsWith('.mov') || post.image_feature_url?.endsWith('.mp4');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-muted">
          <div className="absolute inset-0">
            {isVideo ? (
              <video
                src={post.image_feature_url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={post.image_feature_url || post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container mx-auto">
              <div className="max-w-4xl space-y-4 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.split(',').map((cat) => (
                    <span key={cat} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded shadow-lg">
                      {cat}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%),_0_1px_3px_rgb(0_0_0_/_90%)]">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-gray-200 [text-shadow:_0_1px_5px_rgb(0_0_0_/_80%)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.scheduled_at || post.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  {/* Assuming 200 words per minute */}
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {Math.ceil((post.content?.split(' ').length || 0) / 200)} min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Article Body */}
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:opacity-80 transition-all">
              <ReactMarkdown>{post.content || ''}</ReactMarkdown>
            </article>

            {/* Footer / Tags (if any) */}
            <div className="mt-16 pt-8 border-t flex items-center gap-4 text-muted-foreground">
              <Tag className="h-4 w-4" />
              <div className="flex gap-2">
                {post.categories.split(',').map((cat) => (
                  <span key={cat} className="text-sm hover:text-primary cursor-pointer transition-colors">
                    #{cat.toLowerCase().replace(/\s+/g, '')},
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
