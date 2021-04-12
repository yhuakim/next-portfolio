export default {
    name: "talk",
    title: "Talk",
    type: "document",
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          },
        },
        {
          name: 'speaker',
          title: 'Speaker',
          type: 'reference',
          to: {type: 'author'},
        },
        {
          name: 'mainImage',
          title: 'Main image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{type: 'reference', to: {type: 'category'}}],
        },
        {
          name: 'publishedAt',
          title: 'Published at',
          type: 'datetime',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'blockContent',
          },
        {
          name: 'talkUrl',
          title: 'Talk slides',
          type: 'url'
        }
    ],


    /* preview: {
        select: {
          title: 'title',
          author: 'speaker.name',
          media: 'mainImage',
          categories: 'categories'
        },
        prepare(selection) {
          const {author, categories} = selection
          return Object.assign({}, selection, {
                  subtitle: [author && `by ${author}`, categories]  
                })
              
        },
      }, */
}