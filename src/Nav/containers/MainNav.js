import React from 'react'

// Presentational Components
import NavUI from '../components/NavUI'

export default class Nav extends React.Component {
    state = {
        dark: false,
        primaryColor: 'orange'
    }

    toggleMode = () => {
        this.setState(({ dark }) => ({
            primaryColor: dark ? 'orange' : 'blue',
            dark: !dark
        }))
    }

    render() {
        return (
            <NavUI dark={ this.state.dark } toggleMode={ () => this.toggleMode } primaryColor={ this.state.primaryColor } />
        )
    }
}