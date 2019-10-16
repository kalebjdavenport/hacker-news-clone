import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav/containers/MainNav";
import HomeFeed from "./HomeFeed/containers/HomeFeed";
import Loading from "./_UIPuzzlePieces/Loading";
import User from "./UserProfile/containers/User";
import Comments from "./Comments/containers/Comments";

class App extends React.Component {
  state = {
    dark_mode: false
  };

  toggleMode = () => {
    this.setState(({ dark_mode }) => ({
      dark_mode: !dark_mode
    }));
  };

  render() {
    return (
      <Router>
        <div className="App bg-gray-100 min-h-screen">
          <Nav dark={this.state.dark_mode} toggleMode={() => this.toggleMode} />

          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route
                exact
                path="/"
                key="recent"
                render={props => (
                  <HomeFeed view="new" dark={this.state.dark_mode} {...props} />
                )}
              />
              <Route
                exact
                path="/popular"
                key="popular"
                render={props => (
                  <HomeFeed view="top" dark={this.state.dark_mode} {...props} />
                )}
              />
              <Route
                exact
                path="/user"
                render={props => (
                  <User view="user" dark={this.state.dark_mode} {...props} />
                )}
              />
              <Route
                exact
                path="/post"
                render={props => (
                  <Comments dark={this.state.dark_mode} {...props} />
                )}
              />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
