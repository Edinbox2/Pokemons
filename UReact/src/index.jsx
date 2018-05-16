import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './assets/style.css'
import Input from './components/Input'
import Output from './components/Output'
import { METHODS } from 'http';

class App extends Component {
    state = {
        fields: [
            { content: "user name" },
            { content: "enter your last name" }
        ]
    }

    changeNameHandler = (event) => {
        this.setState({
            fields: [
                {content: event.target.value},
                {content: "enter your name"}
                
            ]
        })
    }

    changeName = () =>{
        this.setState({
            fields:[
                { content: "user name" },
                {content: "Rado"}
            ]
        })
        
    }

    render() {
        return (
            <div className="app">
                <Input changed = {this.changeNameHandler} name = {this.state.fields[0].content}/>
                <button onClick={this.changeName.bind(document.getElementsByClassName('input').value)}>last name</button>
                <Output name = {this.state.fields[0].content} />
                <Output name = {this.state.fields[1].content}/>
                
            </div>
        )
    }
}


ReactDom.render(<App />, document.getElementById('app'))

export default App; 