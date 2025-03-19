import { defineField, defineType } from "sanity"

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "pregunta",
      title: "Pregunta",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "respuesta",
      title: "Respuesta",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "pregunta",
      subtitle: "respuesta",
    },
  },
})

