import Head from 'next/head'
import AboutIntro from '../components/AboutIntro'
import sanityClient from '../client'
import TalkIntro from '../components/TalkIntro'
import ArticleIntro from '../components/ArticleIntro'
import Post from '../components/Post'

export default function Home({about, talk, article, posts}) {
  return (
    <div className="">
      <Head>
        <title>Ekene Eze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home">
        <div className="d-grid justify-content-center hero" >
          <AboutIntro about={about} />
          <TalkIntro talk={talk} />
          <ArticleIntro article={article} />
        </div>
        <div className="seperator">
          <div className="line-left py-3 px-5">
            <img src="/assets/line_left.png" className="w-100" alt="line left" />
          </div>
          <div className="mouse py-2 px-3">
          <img src="/assets/mouse.svg" className="w-100" alt="mouse" />
          </div>
          <div className="line-right py-3 px-5">
            <img src="/assets/line_right.png" className="w-100" alt="line right" />
          </div>
        </div>
        <article>
          <Post articles={posts} />
        </article>
      </main>
    </div>
  )
}

export const getStaticProps = async() => {
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

  const aboutIntro = await sanityClient.fetch(`
  *[_type == "intro" && title == "About Me"] {
    title,
    text
  }
  `)
  const about = await aboutIntro

  const talkIntro = await sanityClient.fetch(`
  *[_type == "intro" && title == "Talks"] {
    title,
    text
  }
  `)
  const talk = await talkIntro

  const articleIntro = await sanityClient.fetch(`
  *[_type == "intro" && title == "Articles"] {
    title,
    text
  }
  `)
  const article = await articleIntro

  return {
    props: {
      posts,
      about,
      talk,
      article
    }
  }
}