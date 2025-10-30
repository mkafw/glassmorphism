import { Client } from "@notionhq/client";
import type { PageObjectResponse, BlockObjectRequestWithoutChildren } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DB_ID!;

// 获取所有文章（分页可扩展）
export async function getPosts() {
  const response = await notion.dataSources.query({ data_source_id: databaseId });
  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map((page) => {
      const nameProperty = page.properties.Name;
      const title = nameProperty?.type === 'title' ? nameProperty.title?.[0]?.plain_text : '';
      return {
        id: page.id,
        title: title || "",
        created: page.created_time,
        last_edited: page.last_edited_time,
        archived: page.archived,
      };
    });
}

// 新增文章（支持文字和图片）
export async function createPost(title: string, content: string, imageUrl?: string) {
  return await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: { title: [{ text: { content: title } }] },
    },
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [{ type: "text", text: { content } }],
        },
      } as BlockObjectRequestWithoutChildren,
      ...(imageUrl ? [{
        object: "block",
        type: "image",
        image: { type: "external", external: { url: imageUrl } },
      } as BlockObjectRequestWithoutChildren] : []),
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
  
  if (!('properties' in page)) {
    throw new Error('Invalid page response');
  }
  
  const pageObj = page as PageObjectResponse;
  const nameProperty = pageObj.properties.Name;
  const title = nameProperty?.type === 'title' ? nameProperty.title?.[0]?.plain_text : '';
  
  return {
    id: pageObj.id,
    title: title || "",
    created: pageObj.created_time,
    last_edited: pageObj.last_edited_time,
    archived: pageObj.archived,
    blocks: blocks.results,
  };
}
