import type { SchemaTypeDefinition } from "sanity";

export const contact: SchemaTypeDefinition = {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "information",
      title: "Information",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
