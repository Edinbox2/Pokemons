import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post'

export default class PostsList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }


    render() {
        const { post, posts, detailsPost, postclick } = this.props
        return (
            <ul>
                {posts.map((post) => <li><Post
                    details={detailsPost}
                    post={post}
                    postclick={postclick}
                />
                </li>)}
            </ul>
        )
    }
}
