import React, { useState } from 'react'

export default function HookCounterThree() {
    const [name, SetName] = useState({ firstname: '', lastname: '' })

    return (
        <div>
            <form>
                <input type="text" value={name.firstname}
                    onChange={e => SetName({ ...name, firstname: e.target.value })} />
                <input type="text" value={name.lastname}
                    onChange={e => SetName({ ...name, lastname: e.target.value })} />
            </form>
            <h2>Your first name is {name.firstname}</h2>
            <h2>Your last name is {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
            <button>click</button>

        </div>
    )
}
