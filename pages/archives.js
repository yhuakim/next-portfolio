import sanityClient from '../client'
import Post from '../components/Post';

function articles({posts, links}) {
  return (
    <>
    <Post articles={posts} />
    <div className="social-profile container">
      {links.links.map(e => 
        <i className="" key={e._key}>
          <a href={e.link} target="_blank" className="nav-link flex-column" >{e.title}</a>
        </i>
      )}
    </div>
    </>

  )
}

export default articles;

export const getServerSideProps = async() => {
    const result = await sanityClient.fetch(`
    *[_type in ["article", "talk"]] {
      title,
      excerpt,
      publishedAt,
      'name': author->name,
      'speaker': speaker->name,
      'categories': categories[]->title,
      mainImage {
        asset {
          _ref
        }
      },
      slug {
        current
      },
      postUrl,
      talkUrl
    }
    `)
    const posts = await result

    const arrayofLinks = await sanityClient.fetch(`
    *[_type == 'links'] {
      links[]
    }
    `)
    const links = await arrayofLinks[0]

    return {
      props: {
        posts,
        links
      }
    }
  }