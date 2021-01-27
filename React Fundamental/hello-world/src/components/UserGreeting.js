import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                isLoggedIn: true
            }
    }
    render() {
        return (
            this.state.isLoggedIn ? <div>welcome</div>
                : <div>please login</div>

        )
    }
}
