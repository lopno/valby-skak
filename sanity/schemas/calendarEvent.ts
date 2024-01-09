import type { SchemaTypeDefinition } from "sanity";

export const calendarEvent: SchemaTypeDefinition = {
  name: "calendarEvent",
  title: "Calendar Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "openers",
      title: "Openers",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare({ title, date }: { title: string; date: string }) {
      return {
        title: title,
        subtitle: date,
      };
    },
  }
};
