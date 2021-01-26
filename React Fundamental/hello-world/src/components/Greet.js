import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}{props.children}</h1>

        </div>
    )
}
export default Greet;