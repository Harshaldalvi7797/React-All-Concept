import React from 'react'

const Greet = (props) => {
    const { name, children } = props;
    console.log(props)
    return (
        <div>
            <h1>Hello {name}{children}</h1>

        </div>
    )
}
export default Greet;