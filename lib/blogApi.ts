export type BlogPost = {
  id: number;
  title: string;
  summary: string;
  date: string;
  labels: string[];
};

export type BlogPostDetail = {
  id: number;
  title: string;
  content: string;
  date: string;
  updated: string;
  labels: string[];
  author: string;
  comments: number;
};

export async function getPosts(): Promise<BlogPost[]> {
  const response = await fetch('/.netlify/functions/github-blog-posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts.filter(post => post.labels.includes(category));
}

export async function getPostDetail(postId: string): Promise<BlogPostDetail | null> {
  const response = await fetch(`/.netlify/functions/github-blog-post?id=${postId}`);
  if (!response.ok) return null;
  return response.json();
}
