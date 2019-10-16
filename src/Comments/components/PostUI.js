import React from 'react'

import { NavLink } from 'react-router-dom'

const PostUI = ({ post }) => {
    let date = new Date(post.time * 1000)
    return (
        <div className="container mx-auto mx-6 mt-8 mb-2">
            <h2 className="text-3xl text-red-700 font-semibold">{post.title}</h2>
            <p>posted by <NavLink
                exact
                className="text-black"
                to={{
                    pathname: '/user',
                    search: `?name=${post.by}`
                }
                }> {post.by} </NavLink > on {date.toLocaleDateString()}, {date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} with
                        <NavLink
                    exact
                    className="text-black"
                    to={{
                        pathname: "/post",
                        search: `?id=${post.id}`
                    }}
                > {post.descendants} </NavLink> comments
            </p>
        </div>

    )
}

export default PostUI