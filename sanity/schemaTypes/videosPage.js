import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
        name: 'videosText',
        title: 'Videos Text',
        description: 'This is the paragraph that will be displayed on the videos page',
        type: 'array',
        of: [{type: 'block'}],
    }),

    defineField({
        name: 'videoLinks',
        title: 'Video Links',
        description: 'These are the videos that will be displayed on the videos page',
        type: 'array',
        of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'videosText',
      media: 'videoLinks',
    },
  },
})
