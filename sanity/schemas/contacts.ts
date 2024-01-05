import type { SchemaTypeDefinition } from "sanity";

export const contacts: SchemaTypeDefinition = {
  name: "contacts",
  title: "Contacts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "contact" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
