// 用于静态生成所有分类页面
export function generateStaticParams() {
  return categories.map((category) => ({ id: category.id }));
}
import Card from "@/components/Card";
import Link from "next/link";


// mock 主题和文章数据
const categories = [
  {
    id: "ai",
    name: "AI 应用",
    posts: [
      {
        id: "1",
        title: "AI 写作工具实测",
        summary: "多款 AI 写作工具横评，优缺点全解析。",
        date: "2025-10-10",
      },
      {
        id: "2",
        title: "Prompt 工程入门",
        summary: "如何写出高质量 Prompt，提升 AI 产出效果。",
        date: "2025-10-09",
      },
    ],
  },
  {
    id: "frontend",
    name: "前端开发",
    posts: [
      {
        id: "3",
        title: "Next.js 部署到 Netlify 全流程",
        summary: "详细讲解 Next.js 项目如何适配并部署到 Netlify。",
        date: "2025-10-05",
      },
    ],
  },
];

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  if (!category) return <div className="text-center text-white py-24">未找到该主题</div>;
  return (
    <section className="container py-16 lg:py-24">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-purple-200 drop-shadow-lg">{category.name}</h1>
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        {category.posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Card className="p-8 hover:scale-[1.02] transition-transform cursor-pointer">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow">{post.title}</h2>
              <p className="text-white/80 mb-2">{post.summary}</p>
              <span className="text-xs text-white/40">{post.date}</span>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-purple-300 hover:underline">← 返回首页</Link>
      </div>
    </section>
  );
}
