import React from 'react'

// Presentational Components
import ArticleCard from './ArticleCard'
import CommentCard from '../Comment/CommentCard'

export default function Feed({ posts, type }) {
    const listItems = posts.map((post, index) => (
        <li key={index}>
            {type === "Articles" ? <ArticleCard post={post} /> : <CommentCard comment={post} />}
        </li>
    ))
    return <ul className='container mx-auto p-6'>{listItems}</ul>
}