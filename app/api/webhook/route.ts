import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 401 });
    }
    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug: { current: string };
    }>(req, secret);

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    // revalidateTag(getPostsTag());
    // revalidateTag(getPostTag(body.slug.current));
    revalidatePath("/", "page");
    revalidatePath("/posts/[slug]", "page");
    // revalidatePath(`/posts/${body.slug.current}`, "page");
    return new Response(`Revalidated '${body.slug.current}'`, { status: 200 });
  } catch (e) {
    return new Response(`Error revalidating: ${e.message}`, { status: 400 });
  }
}
