import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

export default function ArticleCard({ comment }) {
    return (
        <div className="rounded bg-white mb-5 overflow-hidden border border-gray-500">
            <div className="px-6 py-2">
                <div className="text-gray-700 text-base">

                    <p>by
                         <NavLink
                            exact
                            className="text-black"
                            to={{
                                pathname: '/user',
                                search: `?name=${comment.by}`
                            }}> {comment.by} </NavLink> on {new Date(comment.time * 1000).toLocaleDateString()}, {new Date(comment.time * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                    </p>

                    <p className="text-black py-2 text-sm">{ReactHtmlParser(comment.text)}</p>

                </div>
            </div>
        </div>
    )
}