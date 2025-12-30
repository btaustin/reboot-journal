import fetchPosts from "@/lib/fetchPosts";

export default async function Home() {
	const posts = await fetchPosts();
	return (
		<div className="min-h-screen">
			<main>
				<div>
					<h1>All Posts</h1>
					{posts && posts.results.length === 0 && <p>No posts available.</p>}
					{posts && posts.results.length > 0 && (
						<ul>
							{posts.results.map((post) => (
								<li key={post.slug}>
									<h2>{post.title}</h2>
									<p>{post.categories}</p>
									<p>{post.excerpt}</p>
									<p><em>{new Date(post.scheduled_at || "").toLocaleDateString()}</em></p>
								</li>
							))}
						</ul>
					)}
				</div>
			</main>

		</div>
	)
}
