import { defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publicação",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Autores",
      type: "string",
      description: "Lista de autores separados por vírgula",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "journal",
      title: "Revista/Periódico",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Ano",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "month",
      title: "Mês",
      type: "string",
      options: {
        list: [
          { title: "Janeiro", value: "January" },
          { title: "Fevereiro", value: "February" },
          { title: "Março", value: "March" },
          { title: "Abril", value: "April" },
          { title: "Maio", value: "May" },
          { title: "Junho", value: "June" },
          { title: "Julho", value: "July" },
          { title: "Agosto", value: "August" },
          { title: "Setembro", value: "September" },
          { title: "Outubro", value: "October" },
          { title: "Novembro", value: "November" },
          { title: "Dezembro", value: "December" },
        ],
      },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Link para a publicação (opcional)",
    }),
    defineField({
      name: "doi",
      title: "DOI",
      type: "string",
      description: "Digital Object Identifier (opcional)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      journal: "journal",
      year: "year",
    },
    prepare({ title, journal, year }) {
      return {
        title: title || "Sem título",
        subtitle: `${journal || ""} ${year || ""}`.trim(),
      };
    },
  },
});

