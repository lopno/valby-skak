import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }
    const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
    const body = await readBody(req); // Read the body into a string
    const isValid = await isValidSignature(body, signature, secret);
    if (!isValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid signature" });
    }

    const jsonBody = JSON.parse(body);
    const pathToRevalidate = `/posts/${jsonBody.slug.current}`;
    revalidatePath(pathToRevalidate);
    return res.json({
      success: true,
      revalidated: true,
      path: pathToRevalidate,
    });
  } catch (e) {
    return res.status(500).send(`Error revalidating: ${e.message}`);
  }
};

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
