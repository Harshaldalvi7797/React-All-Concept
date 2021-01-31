import React, { Component } from 'react'
import axios from "axios"

export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })

    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })


    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div> UserId:
                         <input type="text" value={userId} name="userId" onChange={this.changeHandler} />
                    </div>
                    <div> title:
                        <input type="text" value={title} name="title" onChange={this.changeHandler} />
                    </div>
                    <div> body:
                          <input type="text" value={body} name="body" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="submit" name="submit" />
                    </div>
                </form>

            </div>
        )
    }
}
