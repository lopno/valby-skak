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

    const pathToRevalidate = `/posts/[id]`;
    revalidatePath(pathToRevalidate, "page");
    return new Response(`Revalidated ${pathToRevalidate}`, { status: 200 });
  } catch (e) {
    return new Response(`Error revalidating: ${e.message}`, { status: 400 });
  }
}
