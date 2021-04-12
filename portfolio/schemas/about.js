export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'About Me',
            type: 'string'
        },
        {
            name: 'intro',
            title: 'Brief Introduction',
            type: 'reference',
            to: {type: 'intro'}
        },
        {
            name: 'craft',
            title: 'My Crafts',
            type: 'reference',
            to: {
                type: 'intro'
            }
        }
    ]
}