import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client'


function TalkIntro({talk}) {
    return (
        <div className="container row talk--home">
            <div className="image-wrapper">
            <img className="w-100" src="/assets/talk_bg.png" alt="talk bg"/>
            </div>
           <div className="col col-md-9">
           {talk? talk.map(i => 
            <section className="card py-2 " key={i.title} >
                <div className="card-body px-5">
                <header className="card-title">
                    <h1>
                        {i.title}
                    </h1>
                </header>
            
                <BlockContent blocks={i.text} className="card-text mb-5" {...sanityClient.config()} />

                <div className="card-link mt-5">
                <a href={i.a} target="_blank" rel="noopener noreferrer">View talks   
                </a>
                <i className="fas fa-chevron-circle-right pl-3"></i>
                </div>

                </div>
            </section>
            
            )
            : <div>Loading...</div>}
           </div>
        </div>
    );
}

export default TalkIntro;