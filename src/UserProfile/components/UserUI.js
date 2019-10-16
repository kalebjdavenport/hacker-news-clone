import React from 'react'

// Plugins
import ReactHtmlParser from 'react-html-parser'

const UserUI = ({ user }) => {
    let date = new Date(user.created * 1000)
    return (
        <div className="container mx-auto mx-6 mt-8 mb-2">
            <h2 className="text-4xl font-semibold">{user.id}</h2>
            <p>joined {date.toLocaleDateString("en-US")}, {date.toLocaleTimeString("en-US")} has {user.karma} karma</p>
            {user.about && <p className="text-lg">{ReactHtmlParser(user.about)}</p>}
        </div>
    )
}

export default UserUI