import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
        name: 'contactText',
        title: 'Contact Text',
        type: 'string',
    }),

    defineField({
        name: 'contactImage',
        title: 'Contact Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),
  ],
  preview: {
    select: {
      title: 'contactText',
      media: 'contactImage',
    },
  },
})
