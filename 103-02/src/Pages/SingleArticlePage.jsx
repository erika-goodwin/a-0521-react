import React from 'react'
import { useParams } from 'react-router-dom'

import { articlesArr } from '../data/articles'

const SingleArticlePage = () => {

    const { id } = useParams()
    const post = articlesArr.find(res => res.id === id)
    const { title, body } = post

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default SingleArticlePage
