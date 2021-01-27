import React from 'react'

export default function NameList() {
    const names =
        [
            {
                id: 1,
                name: "harshal",
                lname: "Dalvi"
            },
            {
                id: 2,
                name: "harshal",
                lname: "Dalvi"
            }
        ]
    return (
        <div>

            {names.map(name => (
                <div key={name.id}>
                    <h1>{name.name} {name.lname}</h1>

                </div>
            )


            )}

        </div>



    )
}

