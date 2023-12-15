import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../../styles/utils.module.css";
import { getPost, getPostIds } from "../../lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { name } from "../../constants/name";
import styles from "../../components/layout.module.css";
import Header from "../../components/header";

export default async function Post({ params }) {
  const postData = await getPost(params.id);

  return (
    <>
      <>
        <Header>
          <Link href="/">
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </Header>
      </>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const paths = await getPostIds();
  return paths;
}
