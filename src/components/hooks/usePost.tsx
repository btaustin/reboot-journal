'use client';

import fetchPost from "@/lib/fetchPost";
import { useQuery } from "@tanstack/react-query";

export default function usePosts({ slug }: { slug: string }) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug)
  });
}