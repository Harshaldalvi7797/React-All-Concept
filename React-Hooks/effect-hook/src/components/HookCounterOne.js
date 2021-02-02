import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, SetCount] = useState(0)
    const [name, SetName] = useState('')
    useEffect(() => {
        console.log("useEffect-updating")
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => SetName(e.target.value)} />
            <button onClick={() => SetCount(count + 1)}>click {count}</button>

        </div>
    )
}
export default HookCounterOne;