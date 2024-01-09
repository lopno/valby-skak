"use client";
import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { ICalendarEvent } from "lib/sanity";

interface ICalendarProps {
  events: ICalendarEvent[];
}

export default function CalendarTable(props: ICalendarProps) {
  return (
    <Table
      aria-label="Kalender for Valby Skakklub"
      className="py-2"
      classNames={{
        wrapper: "px-0 lg:px-4",
        td: "pl-0 sm:pl-3",
      }}
    >
      <TableHeader>
        <TableColumn>Dato</TableColumn>
        <TableColumn>Åbnefolk</TableColumn>
        <TableColumn>Begivenhed</TableColumn>
      </TableHeader>
      <TableBody items={props.events}>
        {(event) => (
          <TableRow key={event._id}>
            <TableCell>
              <span>{event.date}</span>
            </TableCell>
            <TableCell>
              <span>{event.openers}</span>
            </TableCell>
            <TableCell>
              <span>{event.title}</span>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
