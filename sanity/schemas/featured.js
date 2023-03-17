import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Short description',
      type: 'string',
      validation: Rule => Rule.max(255),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    }),
  ],
});
