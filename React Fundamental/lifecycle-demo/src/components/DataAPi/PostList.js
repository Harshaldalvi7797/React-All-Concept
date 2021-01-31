import React, { Component } from 'react'
import axios from "axios"


class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }


    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                this.setState({ posts: res.data })

            })
            .catch((err) => {
                console.log(err)
                this.setState({ errorMsg: "error to fetch data" })
            })

    }
    render() {
        const { posts, errorMsg } = this.state;
        console.log(posts)
        return (
            <div>
                {
                    posts.length ?
                        posts.map((post) => (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                            </div>
                        ))
                        : null


                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>

        )
    }
}
export default PostList;