import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";
import { ContactTable } from "./contactTable";
import { getContacts } from "../lib/sanity";

export const metadata: Metadata = {
  title: `Kontakter - ${siteTitle}`,
};

export default async function Contact() {
  const contacts = await getContacts();

  return (
    <main className="flex justify-center">
      <section className="px-4 w-full lg:w-1/2 min-w-80">
        {contacts && (
          <>
            <h1 className="text-4xl py-2">{contacts.title}</h1>
            <ContactTable
              tableTitle={contacts.title}
              contacts={contacts.contacts}
            />
          </>
        )}
      </section>
    </main>
  );
}
