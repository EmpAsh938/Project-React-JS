import moment from 'moment'

const Article = ({ title, date, snippet, length }) => {
    return (
        <article className="article-section">
            <h2 className='article-head'>{title}</h2>
            <div className='article-info'>
    <span className='info'>{moment(date).format('dddd Do, YYYY')}</span>
    <span className='info'>{length} min read</span>
            </div>
                <p className='text'>{snippet}</p>
        </article>
    )
}

export default Article