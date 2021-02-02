import React, { Component } from 'react'

export default class RenderClick2 extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state =
    //         {
    //             count: 0
    //         }
    // }
    // IncrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })

    // }
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
