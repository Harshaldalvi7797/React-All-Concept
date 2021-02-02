import React, { Component } from 'react'

export default class RenderClick extends Component {


    render() {
        const { count, IncrementCount } = this.props
        return (
            <div>
                <button onClick={IncrementCount}>Submit</button>
                {count}

            </div>
        )
    }
}
