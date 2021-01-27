import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Harshal"

        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null
    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount ")
    }
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return true

    }
    componentDidUpdate() {

        console.log("LifeCycleA componentDidUpdate")

    }


    changeState = () => {
        this.setState({ name: "Codeevaluation" })
    }


    render() {
        console.log("LifeCycleA render")
        return (
            <div>

                <div>
                    LifeCycleA
                <button onClick={this.changeState}>change State</button>

                </div>
                <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA;