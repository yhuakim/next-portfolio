import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import moment from 'moment'
import { defaultFormat } from 'moment';

function Post({articles}) {
    return (
        <div className="container-sm" >
            <div className="row justify-content-center">
                {articles? articles.map(p => 
                    <div className="card col col-9 bg-white border-0 mb-3" key={p.title} >
                        <div className="card-body">
                            <header className="card-title" >
                            <h1>
                                <a href={p.postUrl || p.talkUrl }target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none stretched-link" >
                                    {p.title}
                                </a>
                            </h1>
                            <small className="card-subtitle text-muted" >
                                {moment(p.publishedAt, defaultFormat).toLocaleString()}
                            </small>
                            </header>
                            <small className="badge bg-secondary p-2 mb-2">{p.categories? p.categories[0]: 'loading'}</small>
                            <BlockContent blocks={p.excerpt} className="card-text" {...sanityClient.config()} />
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">{p.name || p.speaker} </footer>
                            </blockquote>
                        </div>
                    </div>
                ) : <div className="loader">Loading...</div> }
            </div>
        </div>
    );
}

export default Post;