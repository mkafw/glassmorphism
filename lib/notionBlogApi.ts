import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DB_ID!;

// 获取所有文章（分页可扩展）
export async function getPosts() {
  // 用最新 SDK，类型断言规避类型错误
  const response = await (notion.databases as any).query({ database_id: databaseId });
  return response.results.map((page: any) => ({
  id: (page as any).id,
  title: (page as any).properties?.Name?.title?.[0]?.plain_text || "",
  created: (page as any).created_time,
  last_edited: (page as any).last_edited_time,
  archived: (page as any).archived,
    // 可扩展更多字段
  }));
}

// 新增文章（支持文字和图片）
export async function createPost(title: string, content: string, imageUrl?: string) {
  return await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: { title: [{ text: { content: title } }] },
    },
    children: [
      ({ object: "block", type: "paragraph", paragraph: { text: [{ type: "text", text: { content } }] } } as any),
      ...(imageUrl ? [({ object: "block", type: "image", image: { type: "external", external: { url: imageUrl } } } as any)] : []),
    ],
  });
}

// 更新文章标题（内容需用 block API，略）
export async function updatePost(pageId: string, title?: string) {
  return await notion.pages.update({
    page_id: pageId,
    properties: title ? { Name: { title: [{ text: { content: title } }] } } : {},
  });
}

// 删除（归档）文章
export async function deletePost(pageId: string) {
  return await notion.pages.update({
    page_id: pageId,
    archived: true,
  });
}

// 获取单篇文章详情（含内容块）
export async function getPostDetail(pageId: string) {
  const page = await notion.pages.retrieve({ page_id: pageId });
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  return {
    id: page.id,
    title: page.properties.Name?.title?.[0]?.plain_text || "",
    created: page.created_time,
    last_edited: page.last_edited_time,
    archived: page.archived,
    blocks: blocks.results,
  };
}
