import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Notícia",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Resumo",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Data",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Link para a notícia completa (opcional)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare({ title, date }) {
      return {
        title: title || "Sem título",
        subtitle: date || "Sem data",
      };
    },
  },
});

