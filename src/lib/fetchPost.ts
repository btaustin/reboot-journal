'use server';

import { getCloudflareContext } from "@opennextjs/cloudflare";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  image_hint: string;
  image_preview_url: string;
  is_featured: boolean;
  scheduled_at?: string;
  subhead?: string;
  video_preview_url?: string;
  image_feature_url?: string;
  categories: string;
};

export default async function fetchPost(slug: string): Promise<Post | null> {
  const { env } = await getCloudflareContext({ async: true });
  const db = env.DB;

  const stmt = db
    .prepare("SELECT p.*, GROUP_CONCAT(pc.category_slug) AS categories FROM Post p, PostCategory pc WHERE p.slug = pc.post_slug AND p.slug = ? GROUP BY p.slug")
    .bind(slug);

  return stmt.first();
};