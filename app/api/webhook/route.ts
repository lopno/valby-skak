import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 401 });
    }
    const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
    const body = await readBody(req); // Read the body into a string
    const isValid = await isValidSignature(body, signature, secret);
    if (!isValid) {
      return new Response("Invalid signature", { status: 401 });
    }

    const jsonBody = JSON.parse(body);
    const pathToRevalidate = `/posts/${jsonBody.slug.current}`;
    revalidatePath(pathToRevalidate);
    return new Response("Success!", { status: 200 });
  } catch (e) {
    return new Response(`Error revalidating: ${e.message}`, { status: 400 });
  }
}

async function readBody(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
