// sanity.js
import { createClient } from "@sanity/client";
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
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    excerpt,
    date,
    "authorName": author->name
  }`);
  return posts;
}
