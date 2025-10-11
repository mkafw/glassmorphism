// 博客 API 模板，后续可直接对接 Notion、飞书等平台
// 只需实现 getCategories、getPostsByCategory、getPostDetail 三个方法

export type BlogCategory = {
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  date: string;
};

export type BlogPostDetail = BlogPost & {
  content: string;
};

// 获取所有主题
export async function getCategories(): Promise<BlogCategory[]> {
  // TODO: 替换为真实 API 请求
  return [
    { id: "ai", name: "AI 应用" },
    { id: "frontend", name: "前端开发" },
  ];
}

// 获取某主题下所有文章
export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  // TODO: 替换为真实 API 请求
  if (categoryId === "ai") {
    return [
      { id: "1", categoryId: "ai", title: "AI 写作工具实测", summary: "多款 AI 写作工具横评，优缺点全解析。", date: "2025-10-10" },
      { id: "2", categoryId: "ai", title: "Prompt 工程入门", summary: "如何写出高质量 Prompt，提升 AI 产出效果。", date: "2025-10-09" },
    ];
  }
  if (categoryId === "frontend") {
    return [
      { id: "3", categoryId: "frontend", title: "Next.js 部署到 Netlify 全流程", summary: "详细讲解 Next.js 项目如何适配并部署到 Netlify。", date: "2025-10-05" },
    ];
  }
  return [];
}

// 获取文章详情
export async function getPostDetail(postId: string): Promise<BlogPostDetail | null> {
  // TODO: 替换为真实 API 请求
  if (postId === "1") {
    return {
      id: "1",
      categoryId: "ai",
      title: "AI 写作工具实测",
      summary: "多款 AI 写作工具横评，优缺点全解析。",
      date: "2025-10-10",
      content: "这里是 AI 写作工具实测的正文内容……",
    };
  }
  if (postId === "2") {
    return {
      id: "2",
      categoryId: "ai",
      title: "Prompt 工程入门",
      summary: "如何写出高质量 Prompt，提升 AI 产出效果。",
      date: "2025-10-09",
      content: "这里是 Prompt 工程入门的正文内容……",
    };
  }
  if (postId === "3") {
    return {
      id: "3",
      categoryId: "frontend",
      title: "Next.js 部署到 Netlify 全流程",
      summary: "详细讲解 Next.js 项目如何适配并部署到 Netlify。",
      date: "2025-10-05",
      content: "这里是 Next.js 部署到 Netlify 全流程的正文内容……",
    };
  }
  return null;
}
