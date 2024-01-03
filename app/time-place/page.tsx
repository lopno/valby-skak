import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";

export const metadata: Metadata = {
  title: siteTitle,
};

export default function TimeAndPlace() {
  return (
    <div>
      <h1>Time and place</h1>
      <p>TODO</p>
    </div>
  );
}
