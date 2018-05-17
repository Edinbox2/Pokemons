import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Post extends PureComponent {
    
    static defaultProps = {
        posts: []
    }
    
    render() {
        const { post, details, postclick } = this.props
        
        return (
            <div>
                <h3>{post.name}</h3>
                <a href={post.url} >ссылка на {post.name}</a><br/>
                <button onClick={details} postclick={postclick}>Информация о покемоне</button>

                <div>
                    {postclick.name}
                </div>
            </div>
        )
    }
}