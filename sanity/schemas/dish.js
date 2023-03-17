import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
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
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Price of the Dish in GBP',
      type: 'number',
    }),
  ],
});
