import React from 'react'

// Presentational Components
import NavUI from '../components/NavUI'

export default class Nav extends React.Component {

    render() {
        return (
            <NavUI dark={ this.props.dark } updateView={ this.props.updateView } toggleMode={ this.props.toggleMode } />
        )
    }
}