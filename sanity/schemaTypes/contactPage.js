import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),

    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),

  ],
  preview: {
    select: {
      title: 'phoneNumber',
    },
  },
})
