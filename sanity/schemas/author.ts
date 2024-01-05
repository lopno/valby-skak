import type { SchemaTypeDefinition } from "sanity";

export const author: SchemaTypeDefinition = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'picture',
    //   title: 'Picture',
    //   type: 'image',
    //   options: { hotspot: true },
    //   validation: (Rule) => Rule.required(),
    // },
  ],
};
