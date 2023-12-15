import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
import { getPostsTag, getPostTag } from "../../lib/tag";

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

    const tagToRevalidate = getPostTag(body.slug.current);
    // TODO: remove this again after everything is revalidated
    revalidateTag(getPostsTag());

    revalidateTag(tagToRevalidate);
    return new Response(`Revalidated '${tagToRevalidate}'`, { status: 200 });
  } catch (e) {
    return new Response(`Error revalidating: ${e.message}`, { status: 400 });
  }
}
