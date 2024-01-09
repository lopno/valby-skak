import Link from "next/link";
import Date from "./components/date";
import { getPosts, getSidebar } from "./lib/sanity";
import { siteTitle } from "./constants/title";
import { Metadata } from "next";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import Navigation from "components/navigation";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Home() {
  const sanityPosts = await getPosts();
  const sidebar = await getSidebar();

  return (
    <>
      <Navigation />
      <section>
        <div className="flex flex-wrap">
          <div className="flex grow basis-2/3 flex-col px-4 min-w-80 space-y-4 py-4">
            {sanityPosts.map((post) => (
              <Link href={`/posts/${post.slug.current}`} key={post._id}>
                <Card key={post._id}>
                  <CardHeader className="flex flex-col items-start">
                    <h2>{post.title}</h2>
                    <small>
                      <Date dateString={post.date} />
                    </small>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    {post.excerpt && <p>{post.excerpt}...</p>}
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex grow basis-1/3 flex-col px-4 min-w-80 space-y-4 py-4">
            <Card>
              <CardHeader>
                <h2>{sidebar.title}</h2>
              </CardHeader>
              <Divider />
              <CardBody className="space-y-2">
                <div
                  className="leading-6 space-y-2"
                  dangerouslySetInnerHTML={{ __html: sidebar.contentHtml }}
                />
              </CardBody>
            </Card>
            <a
              href="https://www.fadoelsservice.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardHeader>
                  <h2>Holmberg Fadølsservice</h2>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Holmberg Fadølsservice Logo"
                  className="z-0 w-full h-full object-cover"
                  src="/images/HolmbergLogo.png"
                />
              </Card>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
