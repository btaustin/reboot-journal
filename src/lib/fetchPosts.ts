'use server';

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Post } from "./fetchPost";

export default async function fetchPosts(): Promise<D1Result<Post> | null> {
  const { env } = await getCloudflareContext({ async: true });
  const db = env.DB;

  const stmt = db
    .prepare(`SELECT 
        slug, title, excerpt, created_at, updated_at, image_url, image_hint, 
        image_preview_url, is_featured, scheduled_at, subhead, video_preview_url, image_feature_url,
        GROUP_CONCAT(PostCategory.category_slug) AS categories
        FROM Post, PostCategory 
        WHERE Post.slug = PostCategory.post_slug
        GROUP BY Post.slug
        ORDER BY scheduled_at DESC`);

  return stmt.all();
};