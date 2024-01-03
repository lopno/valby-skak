import Date from "../../components/date";
import { getPost, getPostSlugs } from "../../lib/sanity";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const postData = await getPost(params.slug);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }) {
  const postData = await getPost(params.slug);

  return (
    <main className="flex flex-row justify-center">
      <article className="px-4 w-full lg:w-1/2 min-w-80">
        <h1 className="text-4xl py-2">{postData.title}</h1>
        <div className="text-gray-300 py-2">
          <Date dateString={postData.date} />
        </div>
        <div
          className="py-2"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return await getPostSlugs();
}
