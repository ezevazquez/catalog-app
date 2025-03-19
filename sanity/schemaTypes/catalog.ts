import { defineField, defineType } from "sanity"

export default defineType({
  name: "catalog",
  title: "Catalog",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "catalogId",
      title: "Catalog ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            {
              name: "header",
              title: "Header",
              type: "reference",
              to: [{ type: "header" }],
            },
            {
              name: "products",
              title: "Products",
              type: "array",
              of: [{ type: "reference", to: [{ type: "product" }] }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "client",
    },
  },
})

