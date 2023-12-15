// sanity.js
import { createClient } from "@sanity/client";
import { toHTML } from "@portabletext/to-html";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-07-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export interface IPostPreview {
  _type: "post";
  _id: string; // UUID
  title: string;
  slug: { current: string; type: "_slug" };
  excerpt: string;
  date: string;
  authorName: string;
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts(): Promise<IPostPreview[]> {
  const posts = await client.fetch(
    `*[_type == "post"]{
    _id,
    title,
    slug,
    excerpt,
    date,
    "authorName": author->name
  }`,
    { cache: "force-cache" },
  );
  return posts;
}

export async function getPostIds(): Promise<{ id: string }[]> {
  const posts = await getPosts();
  return posts.map((post) => {
    return {
      id: post.slug.current,
    };
  });
}

interface IPost {
  _type: "post";
  _id: string; // UUID
  title: string;
  slug: { current: string; type: "_slug" };
  content: any; // TODO
  contentHtml: any; // TODO
  date: string;
  authorName: string;
}

export async function getPost(id: string): Promise<IPost> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $id]{
      _id,
      title,
      slug,
      content,
      date,
      "authorName": author->name
    }[0]`,
    { id, cache: "force-cache" },
  );
  return { ...post, contentHtml: toHTML(post.content) };
}
