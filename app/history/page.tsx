import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";

export const metadata: Metadata = {
  title: siteTitle,
};

export default function History() {
  return (
    <div>
      <h1>History</h1>
      <p>TODO</p>
    </div>
  );
}
