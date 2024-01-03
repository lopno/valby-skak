import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";

export const metadata: Metadata = {
  title: siteTitle,
};

export default function Team() {
  return (
    <div>
      <h1>Team</h1>
      <p>TODO</p>
    </div>
  );
}
