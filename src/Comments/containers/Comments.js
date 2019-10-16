import React from "react";

import PostUI from "../components/PostUI"
import Feed from "../../_UIPuzzlePieces/Feed/Feed";

import { getPost, load25Posts } from "../../utils/hn_api";
import queryString from "query-string"

export default class Post extends React.Component {
    state = {
        post: null,
        comments: [],
    };

    componentDidMount() {
        getPost(queryString.parse(this.props.location.search).id).then(post => {
            this.setState({ post })

            this.state.post.kids &&
                load25Posts(post.kids).map(id =>
                    id.then(post => {
                        post.type === "comment" &&
                            this.setState(({ comments }) => ({ comments: [...comments, post] }))
                    })
                )
        })
    }

    componentWillUnmount() {
        this.setState({ post: null, comments: [] })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.post && <PostUI post={this.state.post} />}

                <div className="container mx-auto p-6">
                    <h4 className="text-2xl font-semibold">Recent Comments</h4>
                    <hr />
                </div>
                {
                    this.state.comments
                        ? <Feed
                            posts={this.state.comments}
                            type="Comments" />
                        : <p>This currently has no comments</p>
                }
            </React.Fragment>
        );
    }
}
