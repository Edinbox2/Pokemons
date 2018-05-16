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


    detailsHandler = (post) => (event) => {
        this.setState({ loading: true })
        fetch(post.url)
            .then((response) => response.json())
            .then((posts) => {
                const newPosts = posts.map((post) => {
                    if (post.name === response.name) {
                        post.forms = response.forms;
                    }
                    return post
                })
                this.setState({ posts: newPosts, loading: false })
            })
            .catch(() => {
                this.setState({ posts: [], loading: false })
            })
    }

    render() {
        const { post } = this.props
        const posts = this.state

        return (
            <ul>
                {posts.map((post) => <li><Post
                    details={this.detailsHandler(post)}
                    post={post}

                />
                </li>)}
            </ul>
        )
    }
}
