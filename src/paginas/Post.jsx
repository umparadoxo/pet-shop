import React, { useState, useEffect } from 'react';
import '../assets/css/post.css'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    
    useEffect(() => {
        let history = useHistory()
        busca(`/posts/${id}`, setPost)
            .catch(() => {
                history.push('/404')
            })
    }, [id])

    return (
        <main className='container flex flex--centro'>
            <article className='cartao post'>
                <h2 className='cartao__titulo'>
                    {post.title}
                </h2>
                <p className='cartao__texto'>
                    {post.body}
                </p>
            </article>
        </main>
    )
}

export default Post