export default {
    name: 'links',
    title: 'Links',
    type: 'document',
    fields: [
        {
            name: 'links',
            title: 'Contact Links',
            type: 'array',
            of: [
              {
                title: 'Name',
                type: 'object',
                fields: [
                    {
                        title: 'Link',
                        name: 'link',
                        type: 'url',
                    },
                    {
                        title: 'Title',
                        name: 'title',
                        type: 'string'
                    }
                ]
              },
            ],
        },
    ]
}