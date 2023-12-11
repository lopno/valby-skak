import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPost, getPostIds } from "../../lib/sanity";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    content: string;
    contentHtml: string; // TODO: proper type
  };
}) {
  return (
    <Layout>
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
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostIds();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPost(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
