import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greerHandler("child")}>Click</button>
        </div>
    )
}
