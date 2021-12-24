import React, { Component } from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            Username: '',
            comments: '',
            topic: 'React'
        }
    }

    handlerUsernameChange = (event) =>{
        this.setState({
            Username: event.target.value
        })
    }

    handlerComments = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit= event => {
        alert(`${this.state.Username} ${this.state.comments} ${this.state.topic}`)
    }
    render(){
        const {Username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input typr="text" value={Username} 
                    onChange={this.handlerUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <input typr="text" value={comments} 
                    onChange={this.handlerComments}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handlerTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="next">NextJs</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form