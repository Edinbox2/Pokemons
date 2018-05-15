import React, { PureComponent } from 'react';
import Loading from 'components/Loading';
import PostsList from 'components/PostList';


export default class PostsListContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
            .then((response) => response.json())
            .then((posts) => {
                this.setState({ posts: posts.results, loading: false })
            })
            .catch(() => {
                this.setState({ posts: [], loading: false })
            })
    }


    render() {
        const { loading, posts } = this.state;
        return (
            loading ? <Loading /> : <PostsList posts={posts} />
        )
    }
}