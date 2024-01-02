import Link from "next/link";
import Date from "./components/date";
import { getPosts } from "./lib/sanity";
import { siteTitle } from "./constants/title";
import { Metadata } from "next";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Home() {
  const sanityPosts = await getPosts();

  return (
    <main>
      <section>
        <div className="flex flex-wrap">
          <div className="flex grow basis-2/3 flex-col px-4 min-w-80 space-y-4 py-4">
            {sanityPosts.map((post) => (
              <Link href={`/posts/${post.slug.current}`}>
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
                <h2>Skak Simultan med klubmesteren</h2>
              </CardHeader>
              <Divider />
              <CardBody className="space-y-2">
                <p className="leading-6">
                  Valby Skakklub afholder stor Skaksimultan lørdag den 2.
                  september kl. 14, på Valby Langgade, hvor klubmester Kurt
                  Klifoth vil spille simultan med op til 20 deltagere.
                </p>
                <p className="leading-6">
                  Det er gratis, og tilmelding kan ske ved at sende navn og
                  tlf.nr til{" "}
                  <Link href="mailto:formand@valbyskakklub.dk">
                    formand@valbyskakklub.dk
                  </Link>{" "}
                </p>
                <p className="leading-6">
                  Du kan se hvor vi er henne på Kulturdagenes hjemmeside:{" "}
                  <Link href="https://www.valbylokaludvalg.kk.dk/kulturdage/event/valby-skakklub-2/">
                    https://www.valbylokaludvalg.kk.dk/kulturdage/event/valby-skakklub-2/
                  </Link>
                </p>
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
                  alt="Holmberg Fadølsservice"
                  className="z-0 w-full h-full object-cover"
                  src="/images/HolmbergLogo.png"
                />
              </Card>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
