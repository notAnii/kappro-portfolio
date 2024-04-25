import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'albums',
  title: 'Albums',
  type: 'document',
  fields: [
    defineField({
        name: 'albumName',
        title: 'Album Name',
        type: 'string',
    }),

    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'albumName',
          maxLength: 96,
        },
    }),

    defineField({
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'albumName',
      media: 'coverImage',
    },
  },
})
