import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client'


function ArticleIntro({article}) {
    return (
        <div className="container row article--home">
            <div className="col col-md-9">
            {article? article.map(i => 
            <section className="card border-0 py-2" key={i.title} >
                <div className="card-body px-5">
                <header className="card-title" >
                    <h1>
                        {i.title}
                    </h1>
                </header>
            
                <BlockContent blocks={i.text} className="card-text" {...sanityClient.config()} />
                
                </div>
            </section>
            
            )
            : <div>Loading...</div>}
            </div>
        </div>
    );
}

export default ArticleIntro;