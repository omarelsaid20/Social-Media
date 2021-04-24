import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Posts from '../../components/JobsMain/JobsPosts/JobPosts';
import AddPost from '../../components/AddPost/AddPost';
import Login from '../../components/Auth/Login';
import Signup from '../../components/Auth/Signup';
class HomePage extends Component {
    render() {
        return (
            <Aux>
                <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                    <div class="main-left-sidebar no-margin">
                        <div className='sign_in_sec current'
                            style={
                                {
                                    padding: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #ddd'
                                }
                            }>
                            <h3>Login</h3>
                            <Login />
                        </div>
                        {/* <div class="user-data full-width">
                            <div class="user-profile">
                                <div class="username-dt">
                                    <div class="usr-pic">
                                        <img src="images/resources/user-pic.png" alt="" />
                                    </div>
                                </div>
                                <div class="user-specs">
                                    <h3>John Doe</h3>
                                    <span>Graphic Designer at Self Employed</span>
                                </div>
                            </div>
                            <ul class="user-fw-status">
                                <li>
                                    <h4>Following</h4>
                                    <span>34</span>
                                </li>
                                <li>
                                    <h4>Followers</h4>
                                    <span>155</span>
                                </li>
                                <li>
                                    <a href="http://www.gambolthemes.net/workwise-new/my-profile.html" title="">View Profile</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 no-pd">
                    <AddPost />
                    <Posts />
                </div>
                <div class="col-lg-3 pd-right-none no-pd">
                    <div class="right-sidebar">
                        <div class="widget widget-about">
                            <img src="images/wd-logo.png" alt="" />
                            <h3>Track Time on Workwise</h3>
                            <span>Pay only for the Hours worked</span>
                            <div class="sign_link">
                                <h3><a href="/auth" title="">Sign up</a></h3>
                                <a href="/auth" title="">Learn More</a>
                            </div>
                        </div>
                        <div class="widget widget-jobs">
                            <div class="sd-title">
                                <h3>Top Jobs</h3>
                                <i class="la la-ellipsis-v"></i>
                            </div>
                            <div class="jobs-list">
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior Product Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior UI / UX Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Junior Seo Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior PHP Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior Developer Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget widget-jobs">
                            <div class="sd-title">
                                <h3>Most Viewed This Week</h3>
                                <i class="la la-ellipsis-v"></i>
                            </div>
                            <div class="jobs-list">
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior Product Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Senior UI / UX Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                                <div class="job-info">
                                    <div class="job-details">
                                        <h3>Junior Seo Designer</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                    </div>
                                    <div class="hr-rate">
                                        <span>$25/hr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget suggestions full-width">
                            <div class="sd-title">
                                <h3>Most Viewed People</h3>
                                <i class="la la-ellipsis-v"></i>
                            </div>
                            <div class="suggestions-list">
                                <div class="suggestion-usd">
                                    <img src="images/resources/s1.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>Jessica William</h4>
                                        <span>Graphic Designer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="suggestion-usd">
                                    <img src="images/resources/s2.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>John Doe</h4>
                                        <span>PHP Developer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="suggestion-usd">
                                    <img src="images/resources/s3.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>Poonam</h4>
                                        <span>Wordpress Developer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="suggestion-usd">
                                    <img src="images/resources/s4.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>Bill Gates</h4>
                                        <span>C &amp; C++ Developer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="suggestion-usd">
                                    <img src="images/resources/s5.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>Jessica William</h4>
                                        <span>Graphic Designer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="suggestion-usd">
                                    <img src="images/resources/s6.png" alt="" />
                                    <div class="sgt-text">
                                        <h4>John Doe</h4>
                                        <span>PHP Developer</span>
                                    </div>
                                    <span><i class="la la-plus"></i></span>
                                </div>
                                <div class="view-more">
                                    <a href="#" title="">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default HomePage;