// 用于静态生成所有文章详情页面
export function generateStaticParams() {
  // 这里可以根据实际数据源动态生成所有 id
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
import Card from "@/components/Card";
import Link from "next/link";

// 这里将来用 Notion API 获取文章详情
export default function PostDetail({ params }: { params: { id: string } }) {
  // mock 数据
  const post = {
    id: params.id,
    title: params.id === "1" ? "如何打造玻璃拟态风格的个人博客" : "Next.js 部署到 Netlify 全流程",
    content:
      params.id === "1"
        ? `详细介绍如何用 Next.js + Tailwind CSS 打造毛玻璃风格的个人博客，包括设计理念、代码实现和视觉优化建议。`
        : `本篇文章将带你一步步完成 Next.js 项目在 Netlify 上的部署，包括静态导出、配置和上线。`,
    date: params.id === "1" ? "2025-10-10" : "2025-10-05",
  };

  return (
    <section className="container py-16 lg:py-24">
      <Card className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{post.title}</h1>
        <div className="text-xs text-white/40 mb-8">{post.date}</div>
        <article className="prose prose-invert prose-lg text-white/90">
          {post.content}
        </article>
        <div className="mt-8">
          <Link href="/" className="text-blue-300 hover:underline">← 返回首页</Link>
        </div>
      </Card>
    </section>
  );
}
