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

type contact = {
  title: string;
  information: string[];
};

interface IContactTableProps {
  tableTitle: string;
  contacts: contact[];
}

export function ContactTable(props: IContactTableProps) {
  return (
    <Table
      aria-label="Kontakter for Valby Skakklub"
      hideHeader={true}
      className="py-2"
      classNames={{
        wrapper: "px-0 lg:px-4",
        td: "pl-0 lg:pl-3",
      }}
    >
      <TableHeader>
        <TableColumn>Kontakt</TableColumn>
        <TableColumn>Information</TableColumn>
      </TableHeader>
      <TableBody>
        {props.contacts.map((contact) => (
          <TableRow key={contact.title}>
            <TableCell className="flex flex-col justify-start">
              <span className="text-lg">{contact.title}</span>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                {contact.information.map((information) => (
                  <span
                    className="text-base"
                    key={`${contact.title}${information}`}
                  >
                    {information}
                  </span>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
