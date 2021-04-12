export default {
    name: 'archives',
    title: 'Archives',
    type: 'document',
    fields: [
        {
            name: 'archive',
            title: 'List of Archives',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                    {type: 'article',},
                    {type: 'talk'}
                ]
              },
            ],
        },
    ]
}