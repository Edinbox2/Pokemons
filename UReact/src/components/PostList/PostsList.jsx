import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Post from './Post'

export default class PostsList extends PureComponent {

    static defaultProps = {
        posts: []
    }

    render() {
        const { posts, post } = this.props

        return (
            <ul>
                {posts.map((post) => <li><Post
                    //запрашиваю информацию о покемоне при нажатии на кнопку
                    details={this.detailsHandler = () => {
                        this.setState({ loading: true })
                        fetch(post.url)
                            .then((response) => response.json())
                            .then((posts) => {
                                this.setState({ posts: posts.forms, loading: false })
                                //смог вывести информацию только через консоль
                                console.log("name: " + posts.name + ' weight: ' + posts.weight)
                            })
                            .catch(() => {
                                this.setState({ posts: [], loading: false })
                            })
                    }}
                    post={post}
                />
                </li>)}
            </ul>
        )
    }
}
