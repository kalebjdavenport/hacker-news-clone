import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ArticleCard({ post }) {
    return (
        <div className="rounded bg-white mb-5 overflow-hidden shadow-md">
            <div className="px-6 py-2">
                <a href={post.url} className="font-bold text-lg text-orange-800 mb-1">{post.title}</a>
                <div className="text-gray-700 text-base">

                    <p>posted by
                        <NavLink
                            exact
                            className="text-black"
                            to={{
                                pathname: '/user',
                                search: `?name=${post.by}`
                            }}> {post.by} </NavLink> on {new Date(post.time * 1000).toLocaleDateString()}, {new Date(post.time * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} with
                        <NavLink
                            exact
                            className="text-black"
                            to={{
                                pathname: "/post",
                                search: `?id=${post.id}`
                            }}
                        > {post.descendants} </NavLink>
                        comments</p>

                </div>
            </div>
        </div>
    )
}