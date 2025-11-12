import { defineField, defineType } from "sanity";

export default defineType({
  name: "visita",
  title: "Visita & Colaboração",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "partner",
      title: "Parceiro",
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
      name: "photos",
      title: "Fotos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", title: "URL", type: "url" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "publishToInstagram",
      title: "Publicar no Instagram",
      type: "boolean",
      description:
        "Se marcado, um webhook será acionado para publicar no Instagram (@labnov_ufcg)",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      partner: "partner",
      date: "date",
    },
    prepare({ title, partner, date }) {
      return {
        title: title || "Sem título",
        subtitle: `${partner} - ${date || "Sem data"}`,
      };
    },
  },
});

