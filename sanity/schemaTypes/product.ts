import { defineField, defineType } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productId",
      title: "Product ID",
      type: "string",
      readOnly: true,
      initialValue: () => {
        // Generate a random ID with format PRD-XXXXX
        return `PRD-${Math.floor(10000 + Math.random() * 90000)}`
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "catalogs",
      title: "Catalogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "catalog" }] }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "fit",
      title: "Fit",
      type: "string",
      options: {
        list: [
          { title: "Regular", value: "regular" },
          { title: "Oversized", value: "oversized" },
          { title: "Slim", value: "slim" },
          { title: "Relaxed", value: "relaxed" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Detail",
      type: "string",
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          // Will be dynamically populated based on category
        ],
      },
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
          { title: "Blue", value: "blue" },
          { title: "Red", value: "red" },
          { title: "Green", value: "green" },
          // More colors can be added dynamically
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "mainImages",
      title: "Main Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(0),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "productId",
      media: "mainImages.0",
    },
  },
})

