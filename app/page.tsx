
import Card from "@/components/Card";
import Link from "next/link";

// mock 博客数据，后续可用 Notion API 替换
const posts = [
  {
    id: "1",
    title: "如何打造玻璃拟态风格的个人博客",
    summary: "从设计到实现，手把手教你用 Next.js + Tailwind 打造毛玻璃风格博客。",
    date: "2025-10-10",
  },
  {
    id: "2",
    title: "Next.js 部署到 Netlify 全流程",
    summary: "详细讲解 Next.js 项目如何适配并部署到 Netlify。",
    date: "2025-10-05",
  },
];

export default function BlogHome() {
  return (
    <section className="container py-16 lg:py-24">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white drop-shadow-lg">我的博客</h1>
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Card className="p-8 hover:scale-[1.02] transition-transform cursor-pointer">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow">{post.title}</h2>
              <p className="text-white/80 mb-2">{post.summary}</p>
              <span className="text-xs text-white/40">{post.date}</span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
