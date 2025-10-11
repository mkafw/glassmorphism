
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

export default function Home() {
  // mock 目录数据
  const toc = [
    { title: "关于如何在Netlify函数中使用环境变量", link: "#" },
    { title: "AI 应用", link: "#ai" },
    { title: "前端开发", link: "#frontend" },
  ];

  return (
    <section className="container py-16 lg:py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg text-left">我的博客</h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12">
        {/* 左侧内容区 */}
        <div className="flex flex-col gap-12 max-w-2xl mr-auto">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 drop-shadow">{cat.name}</h2>
                <Link href={`/category/${cat.id}`} className="text-xs text-purple-200 hover:underline">更多 &rarr;</Link>
              </div>
              <div className="flex flex-col gap-6">
                {cat.posts.map((post) => (
                  <Link key={post.id} href={`/post/${post.id}`}>
                    <Card className="p-6 hover:scale-[1.02] transition-transform cursor-pointer">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 drop-shadow">{post.title}</h3>
                      <p className="text-white/80 mb-1">{post.summary}</p>
                      <span className="text-xs text-white/40">{post.date}</span>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* 右侧目录区 */}
        <aside className="hidden md:block sticky top-24 h-fit bg-white/5 rounded-xl p-6 shadow-lg ml-auto">
          <h3 className="text-lg font-bold text-purple-200 mb-4">目录</h3>
          <ul className="space-y-3">
            {toc.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className="text-white/80 hover:text-purple-300 transition-colors">{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
