import React, { useState } from 'react'

export default function HookCounterTwo() {
    const initialCount = 0;
    const [count, Setcount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            Setcount(prevCount => prevCount + 1)
            // Setcount(count + 1)
        }
    }
    return (
        <div>
            <h2>cout:{count}</h2>
            <button onClick={() => Setcount(initialCount)}>Reset</button>
            <button onClick={() => Setcount(count + 1)}>Increment</button>
            <button onClick={() => Setcount(count - 1)}>Dcrement</button>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    )
}
