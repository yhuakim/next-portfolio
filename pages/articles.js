import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client'
import Post from '../components/Post';

function articles({posts, intro}) {
  return (
    <>
      <div className="container">
        <div className=" row container justify-content-center">
           {intro? intro.map(i => 
            <section className="card py-2 border-0 col-12" key={i.title} >
                <div className="card-body px-5">
                <header className="card-title">
                    <h1 className="text-center">
                        {i.title}
                    </h1>
                </header>
            
                <BlockContent blocks={i.text} {...sanityClient.config()} />
                </div>
            </section>
            
            )
            : <div>Loading...</div>}
           </div>
        </div>
      <Post articles={posts} />
    </>

  )
}

export default articles;

export const getStaticProps = async() => {
    const result = await sanityClient.fetch(`
      *[_type == "article"] {
        title,
        excerpt,
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
        publishedAt,
        category,
        postUrl
      }
    `)
    const posts = await result
    const articleIntro = await sanityClient.fetch(`
    *[_type == "intro" && title == "Articles"] {
      title,
      text
    }
    `)
    const intro = await articleIntro
  
    return {
      props: {
        posts,
        intro
      }
    }
  }