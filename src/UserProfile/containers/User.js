import React from "react";

import UserUI from "../components/UserUI"
import Feed from "../../_UIPuzzlePieces/Feed/Feed";

import { getUser, load25Posts } from "../../utils/hn_api";
import queryString from "query-string"

export default class User extends React.Component {
  state = {
    user: null,
    posts: [],
  };

  componentDidMount() {
    getUser(queryString.parse(this.props.location.search).name).then(user => {
      this.setState({ user })
      load25Posts(user.submitted).map(id =>
        id.then(post => {
          post.type === "story" &&
            this.setState(({ posts }) => ({ posts: [...posts, post] }))
        })
      )
    })
  }

  componentWillUnmount() {
    this.setState({ user: null, posts: [] })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.user && <UserUI user={this.state.user} />}

        <div className="container mx-auto px-6 pt-6">
          <h4 className="text-3xl font-semibold">
            {this.props.view[0].toUpperCase() + this.props.view.substring(1)} Posts
          </h4>
          <hr />
        </div>
        {
          this.state.posts ?
            <Feed
              posts={this.state.posts}
              type="Articles"
            />
            : <p>This user has not yet added a post to the Hacker News-verse</p>
        }

      </React.Fragment>
    );
  }
}
