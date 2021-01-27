import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childname) {
        alert(`hello ${this.state.parentName} from ${childname}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greerHandler={this.greetParent} />
            </div>
        )
    }
}
