import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { sidebar } from "./schemas/sidebar";
import { author } from "./schemas/author";
import { contact } from "./schemas/contact";
import { contacts } from "./schemas/contacts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, sidebar, author, contact, contacts],
};
