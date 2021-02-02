import React, { Component } from 'react'
import withCounter from "../components/WithCounter"

class ClickCounter extends Component {

    render() {
        const { count, incrementCount, name } = this.props
        return <button onClick={incrementCount}>{name} Clicked {count} times</button>
    }
}

export default withCounter(ClickCounter, 5)