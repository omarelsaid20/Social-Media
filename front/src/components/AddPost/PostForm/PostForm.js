import React, { Component } from 'react';

import axios from 'axios';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

class PostForm extends Component {
    state = {
        jobTitle: '',
        description: '',
        skills: '',
        experienceYears: null,
        qualification: '',
        salary: null,
        preferedAge: '',
        jobType: ''
    }

    postDataHandler = () => {
        const data = {
            jobTitle: this.state.jobTitle,
            description: this.state.description,
            skills: this.state.skills,
            experienceYears: this.state.experienceYears,
            qualification: this.state.qualification,
            salary: this.state.salary,
            preferedAge: this.state.preferedAge,
            jobType: this.state.jobType
        };

        console.log(data)
        axios.post('http://localhost:8080/post_job', {} ,{ params: data })
            .then(response => {
                console.log(response);
            })
    }

    render() {

        let activeClass = 'post-popup job_post';
        if (this.props.showForm) {
            activeClass = 'post-popup job_post active'
        };

        return (
            <Aux>
                <Backdrop
                    show={this.props.showForm}
                    clicked={this.props.close} />
                <div className={activeClass}>
                    <div className="post-project">
                        <h3>Post a job</h3>
                        <div className="post-project-fields">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="text" name="title" placeholder="Title" onChange={(event) => this.setState({ jobTitle: event.target.value })} />
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="inp-field">
                                            <select>
                                                <option>Category</option>
                                                <option>Category 1</option>
                                                <option>Category 2</option>
                                                <option>Category 3</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <input type="text" name="skills" placeholder="Skills" onChange={(event) => this.setState({ skills: event.target.value })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="preferedAge" placeholder="prefered age" onChange={(event) => this.setState({ preferedAge: event.target.value })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="jobtype" placeholder="job type" onChange={(event) => this.setState({ jobType: event.target.value })} />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="price-br">
                                            <input type="text" name="price1" placeholder="Price" onChange={(event) => this.setState({ salary: event.target.value })} />
                                            <i className="la la-dollar"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <input type="text" name="experience" placeholder="experience years" onChange={(event) => this.setState({ experienceYears: event.target.value })} />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" name="qualification" placeholder="qualification" onChange={(event) => this.setState({ qualification: event.target.value })} />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="description" placeholder="Description" onChange={(event) => this.setState({ description: event.target.value })}></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul>
                                            <li><button className="active" type="submit" value="post" onClick={this.postDataHandler}>Post</button></li>
                                            <li><a href="#" title="" onClick={this.props.close}>Cancel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="#" title="" onClick={this.props.close}><i className="la la-times-circle-o"></i></a>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default PostForm;