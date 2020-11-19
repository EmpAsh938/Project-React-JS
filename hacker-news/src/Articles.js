import React from 'react'
import { useGlobalContext } from './context'

const Articles = () => {
    const { isLoading, hits, handleRemove} = useGlobalContext()
    if (isLoading) {
        return (
            <div className='loader'></div>
        )
    }
    if (hits.length === 0) {
        return (
            <div className='article__content__header error'>Could Not Found</div>
        )
    }
    return (
        <div className='article'>
            {hits.map(value=>{
                const { 
                    title,
                    url,
                    author,
                    points,
                    num_comments,
                    objectID,
                } = value
                // console.log(value)
                return (
                    <article key={objectID} className='article__content'>
                        <h3 className='article__content__header'>{title}</h3>
                <p className='article__content__text'>{points} points by {author} | {num_comments} comments</p>
                <div className='article__content__btn-container'>
                    <a 
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='article__content__btn-container__link'
                    >
                        Read more
                    </a>
                    <button
                    className='article__content__btn-container__btn' 
                    onClick={()=>handleRemove(objectID)}
                    >
                        remove
                    </button>
                </div>
                    </article>
            )})}
        </div>
    )
}

export default Articles
