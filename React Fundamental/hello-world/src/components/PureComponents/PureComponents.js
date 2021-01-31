import React, { PureComponent } from 'react'
import RegComponent from './RegComponent'
import ParentComponent from "./../ParentComponent";

export class PureComponents extends PureComponent {
    render() {
        console.log("pure component render***")
        return (
            <div>
                <h1>Pure Components</h1>
                {this.props.name}
                <ParentComponent />
                <RegComponent />

            </div>
        )
    }
}

export default PureComponents
