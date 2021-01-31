import React, { useState } from 'react'

export default function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count Increse </button>
            <button onClick={() => setCount(count - 1)}>Count Decrease </button>

            <h2>{count}</h2>

        </div>
    )
}
