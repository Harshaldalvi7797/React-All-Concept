import React, { Component } from 'react'
import RegComponent from './RegComponent';
import PureComponents from './PureComponents';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: "Harshal"
            }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "Harshal" })
        })
    }
    render() {
        console.log("****** parent")
        return (
            <div>
                ParentComponent
                <RegComponent name={this.state.name} />
                <PureComponents name={this.state.name} />
            </div>
        )
    }
}
