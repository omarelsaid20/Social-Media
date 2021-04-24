import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';

class JobsPosts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('http://localhost:8080/posts')
            .then(response => {
                const posts = response.data.posts;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch(err => console.log(err))
    }


    render() {

        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post._id}
                    title={post.position_name}
                    content={post.job_description}
                    salary={post.salary}
                    createdDate={post.createdDate} />
            )
        });

        return (
            <div className="posts-section">
                {posts}
            </div>
        );
    }
}

export default JobsPosts