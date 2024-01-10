import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";
import { getTeam } from "lib/sanity";

export const metadata: Metadata = {
  title: `Holdskak - ${siteTitle}`,
};

export default async function Team() {
  const team = await getTeam();
  return (
    <section className="flex flex-row justify-center">
      <article className="px-4">
        <h1 className="text-4xl py-2">{team.title}</h1>
        <div
          className="py-2 grid gap-y-2"
          dangerouslySetInnerHTML={{ __html: team.contentHtml }}
        ></div>
      </article>
    </section>
  );
}
