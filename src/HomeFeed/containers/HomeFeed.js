import React from 'react'

// Presentational Components
import Feed from '../../_UIPuzzlePieces/Feed/Feed'

// Network Requests
import { getArrOfUserIdsOfType, load25Posts } from '../../utils/hn_api'

export default class HomeFeed extends React.Component {

    state = {
        posts: [],
    }


    componentDidMount() {
        getArrOfUserIdsOfType(this.props.view).then(result => {
            load25Posts(result).map(id => (
                id.then(user => {
                    this.setState(({ posts }) => ({ posts: [...posts, user] }))
                })
            ))
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto p-6">
                    <h2 className='text-4xl font-semibold'>{this.props.view[0].toUpperCase() + this.props.view.substring(1)} Posts</h2>
                    <hr />
                </div>
                <Feed
                    posts={this.state.posts}
                    type="Articles"
                />
            </React.Fragment>
        )
    }
}