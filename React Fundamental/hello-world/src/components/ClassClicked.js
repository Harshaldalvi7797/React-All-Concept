import React, { Component } from 'react'

export default class ClassClicked extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                message: "hii welcome Harshal"
            }
    }
    clickEvent = () => {
        console.log("class click here")
        this.setState({ message: "Bye " })
        console.log(this)

    }
    render() {

        return (
            <div>
                <h2>    {this.state.message}</h2>

                <button onClick={this.clickEvent}>Clicked class</button>

            </div>
        )
    }
}
