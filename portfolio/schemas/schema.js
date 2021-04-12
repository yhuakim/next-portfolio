// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import article from './article'
import blockContent from './blockContent'
import intro from './intro'
import about from './about'
import author from './author'
import link from './link'
import talk from './talk'
import category from './category'
import archive from './archive'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    article,
    blockContent,
    intro,
    about,
    author,
    link,
    talk,
    category,
    archive
  ]),
})
