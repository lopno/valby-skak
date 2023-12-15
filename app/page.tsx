import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./components/date";
import { getPosts } from "./lib/sanity";
import Image from "next/image";
import { siteTitle } from "./constants/title";
import { name } from "./constants/name";
import Header from "./components/header";

export default async function Home() {
  const sanityPosts = await getPosts();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header>
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </Header>
      <main>
        <section className={utilStyles.headingMd}>
          <p>Hello, this is cool site</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {sanityPosts.map((post) => (
              <li className={utilStyles.listItem} key={post._id}>
                <Link href={`/posts/${post.slug.current}`}>{post.title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={post.date} />
                </small>
                {post.excerpt && (
                  <p className={utilStyles.padding1px}>{post.excerpt}...</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
