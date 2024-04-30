import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
        name: 'aboutImage',
        title: 'About Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'aboutText',
        title: 'About Text',
        description: 'This is the paragraph that will be displayed on the about page',
        type: 'array',
        of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'aboutText',
      media: 'aboutImage',
    },
  },
})
