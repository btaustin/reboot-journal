'use client';

import fetchPosts from "@/lib/fetchPosts";
import { useQuery } from "@tanstack/react-query";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts()
  });
}