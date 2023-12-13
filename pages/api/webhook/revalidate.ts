import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req, res) {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME];
    const body = await readBody(req); // Read the body into a string
    const isValid = await isValidSignature(body, signature, secret);
    if (!isValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid signature" });
    }

    const jsonBody = JSON.parse(body);
    await res.revalidate(`/posts/${jsonBody.slug.current}`);
    return res.json({ success: true, revalidated: true });
  } catch (e) {
    return res.status(500).send("Error revalidating");
  }
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
