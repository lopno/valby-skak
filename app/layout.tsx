import "../styles/globals.css";
import { siteTitle } from "./constants/title";
import { Providers } from "./providers";
import { Metadata } from "next";

/*
<Head>
  <link rel="icon" href="/favicon.ico" />
  <meta
    name="description"
    content="Learn how to build a personal website using Next.js"
  />
  <meta
    property="og:image"
    content={`https://og-image.vercel.app/${encodeURI(
      siteTitle,
    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
  />
  <meta name="og:title" content={siteTitle} />
  <meta name="twitter:card" content="summary_large_image" />
</Head>
 */

export const metadata: Metadata = {
  title: siteTitle,
};

export default function Layout({ children }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
