import type { SchemaTypeDefinition } from "sanity";

export const team: SchemaTypeDefinition = {
  name: "team",
  title: "Holdskak",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "date",
    },
    prepare: ({ title, date }) => ({
      title: title,
      subtitle: date,
    }),
  },
};
