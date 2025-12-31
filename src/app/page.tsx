import fetchPosts from "@/lib/fetchPosts";
import Header from "@/components/Header";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ArticleCard from "@/components/ArticleCard";

export const dynamic = 'force-dynamic';

export default async function Home() {
	const postsResult = await fetchPosts();
	const posts = postsResult?.results || [];

	const featuredPosts = posts.filter(post => post.is_featured);

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{featuredPosts.length > 0 && (
					<section className="w-full">
						<FeaturedCarousel posts={featuredPosts} />
					</section>
				)}

				<div className="container py-12 md:py-24">
					<div className="flex flex-col gap-12">
						<div className="flex flex-col gap-4">
							<h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
							<p className="text-muted-foreground text-lg max-w-[700px]">
								Exploring the intersection of technology, programming, and leadership.
							</p>
						</div>

						{posts.length === 0 && featuredPosts.length === 0 && (
							<div className="text-center py-24 border rounded-2xl bg-muted/30">
								<p className="text-muted-foreground">No articles found. Check back soon!</p>
							</div>
						)}

						{posts.length > 0 && (
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
								{posts.map((post) => (
									<ArticleCard key={post.slug} post={post} />
								))}
							</div>
						)}
					</div>
				</div>
			</main>

			<footer className="border-t py-12 bg-muted/30">
				<div className="container flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Reboot Journal. All rights reserved.
					</p>
					<div className="flex gap-6 text-sm font-medium text-muted-foreground">
						<a href="#" className="hover:text-primary transition-colors">Twitter</a>
						<a href="#" className="hover:text-primary transition-colors">GitHub</a>
						<a href="#" className="hover:text-primary transition-colors">RSS</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
