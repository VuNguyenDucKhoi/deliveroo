import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Retaurant name',
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
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 Stars)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).error("Please enter value between 1 and 5!"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [{ type: "category" }],
    }),
    defineField({
      name: 'dishes',
      title: 'Dish',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }),
  ],
});
