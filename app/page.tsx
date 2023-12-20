import Link from "next/link";
import Date from "./components/date";
import { getPosts } from "./lib/sanity";
import { siteTitle } from "./constants/title";
import { Metadata } from "next";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Home() {
  const sanityPosts = await getPosts();

  return (
    <main>
      <section>
        <div className="flex flex-col px-4">
          {sanityPosts.map((post) => (
            <Link className="my-4" href={`/posts/${post.slug.current}`}>
              <Card key={post._id}>
                <CardHeader className="flex flex-col items-start">
                  <h2>{post.title}</h2>
                  <small>
                    <Date dateString={post.date} />
                  </small>
                </CardHeader>
                <Divider />
                <CardBody>{post.excerpt && <p>{post.excerpt}...</p>}</CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
