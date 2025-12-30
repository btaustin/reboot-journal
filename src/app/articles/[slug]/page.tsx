import fetchPost from "@/lib/fetchPost";

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Article Page: {slug}: {post.title}</h1>
    </div>
  );
}