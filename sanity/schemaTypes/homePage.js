import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
    }),

    defineField({
        name: 'homeImage',
        title: 'Home Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),
  ],
  preview: {
    select: {
      title: 'location',
      media: 'homeImage',
    },
  },
})
