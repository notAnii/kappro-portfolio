import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
        name: 'portfolioText',
        title: 'Portfolio Text',
        description: 'This is the paragraph that will be displayed on the portfolio page',
        type: 'array',
        of: [{type: 'block'}],
    }),

    defineField({
        name: 'portfolioImages',
        title: 'Portfolio Images',
        description: 'These are the four images that will be displayed on the portfolio page',
        type: 'array',
        of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'portfolioText',
      media: 'portfolioImages',
    },
  },
})
