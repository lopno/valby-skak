import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import { getPosts, IPostPreview } from "../lib/sanity";

export default function Home(props: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  sanityPosts: IPostPreview[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
          {props.sanityPosts.map((post) => (
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const sanityPosts = await getPosts();
  return {
    props: {
      allPostsData,
      sanityPosts,
    },
  };
};
