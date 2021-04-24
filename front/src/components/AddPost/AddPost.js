import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import PostForm from './PostForm/PostForm';

import UserImage from '../../assets/images/resources/omar.jpg';

class AddPost extends Component {
    state = {
        ShowAddPost: false
    }

    showAddPostHandler = () => {
        this.setState((prevState) => { return { ShowAddPost: !prevState.ShowAddPost } })
    }

    render() {
        return (
            <Aux>
                <PostForm showForm={this.state.ShowAddPost} close={this.showAddPostHandler} />
                <div className="post-topbar">
                    <div className="user-picy">
                        <img src={UserImage} alt="" />
                    </div>
                    <div className="post-st">
                        <ul>
                            {/* <Button>Add Post</Button> */}
                            <li><a href='#' className="post_project" >Post a Project</a></li>
                            <li><a href='#'
                                className="post-jb active"
                                onClick={this.showAddPostHandler}
                            >Post a Job</a></li>
                        </ul>
                    </div>
                </div>
            </Aux>
        );
    };
}

export default AddPost;