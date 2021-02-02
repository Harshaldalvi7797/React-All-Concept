import React, { useState, useEffect } from 'react'
import axios from "axios"

function DataFetching() {
    const [posts, SetPost] = useState([])
    const [id, SetId] = useState(1)
    const [idFromButton, SetidFromButton] = useState(1)
    useEffect(() => {
        const res = axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then((res) => {
                console.log(res)
                SetPost(res.data)
            })
            .catch((err) => console.log(err))

    }, [idFromButton])
    const handleClick = () => {
        SetidFromButton(id)

    }

    return (

        <div>
            <input type="text" value={id} onChange={(e) => SetId(e.target.value)} />
            <button onClick={handleClick}>click</button>
            <div>{posts.title}</div>
            {/* {
                posts.map(item => <div key={item.id}><h1>{item.title}</h1></div>)
            } */}

        </div>
    )
}
export default DataFetching