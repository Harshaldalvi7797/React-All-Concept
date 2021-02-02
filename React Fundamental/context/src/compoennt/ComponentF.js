import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class ComponentF extends Component {
    render() {
        return (
            <div>
                componentF
                <UserConsumer>
                    {
                        (username) => {
                            return <div> hello {username}</div>
                        }
                    }
                </UserConsumer>

            </div>
        )
    }
}
