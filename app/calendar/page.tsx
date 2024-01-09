import * as React from "react";
import { Metadata } from "next";
import { siteTitle } from "constants/title";
import { getCalendarEvents } from "lib/sanity";
import CalendarTable from "./calendarTable";

export const metadata: Metadata = {
  title: `Kalender - ${siteTitle}`,
};

export default async function Calendar() {
  const calendarEvents = await getCalendarEvents();

  return (
    <div className="flex justify-center">
      <section className="px-4 w-full lg:w-2/3 xl:w-1/2 min-w-80">
        <h1 className="text-4xl py-2">Kalender for Valby Skakklub</h1>
        <CalendarTable events={calendarEvents} />
      </section>
    </div>
  );
}
