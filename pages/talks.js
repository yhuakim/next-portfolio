import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client'
import Post from '../components/Post';

function articles({talks, talk}) {
  return (
    <>
        <div className="container talk--page "> 
           <div className="talk-intro row container justify-content-center">
           {talk? talk.map(i => 
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
        <Post articles={talks} />
    </>

  )
}

export default articles;

export const getStaticProps = async() => {
    const result = await sanityClient.fetch(`
      *[_type == "talk"] {
        title,
        excerpt,
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
        talkUrl
      }
    `)
    const talks = await result

    const talkIntro = await sanityClient.fetch(`
    *[_type == "intro" && title == "Talks"] {
      title,
      text
    }
    `)
    const talk = await talkIntro
  
    return {
      props: {
        talks,
        talk
      }
    }
  }