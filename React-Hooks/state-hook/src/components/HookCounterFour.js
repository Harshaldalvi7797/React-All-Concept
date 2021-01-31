import React, { useState } from 'react'

export default function HookCounterFour() {
    const [items, SetItems] = useState([])

    const addItem = () => {
        SetItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])

    }
    return (
        <div>
            <button onClick={addItem}>Add Items</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }

            </ul>

        </div>
    )
}
