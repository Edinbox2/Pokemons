import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './assets/style.css'
import PostsList from 'containers/PostsListContainer'

class App extends Component {

    render() {
        return (
            <div className="app">
                <PostsList />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))
export default App; 