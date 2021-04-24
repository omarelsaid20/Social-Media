import React, { Component } from 'react';

import HomeLogo from '../../../assets/images/icon1.png';
import CompaniesLogo from '../../../assets/images/icon2.png';
import ProjectsLogo from '../../../assets/images/icon3.png';
import ProfileLogo from '../../../assets/images/icon4.png';
import JobsLogo from '../../../assets/images/icon5.png';
import MessagesLogo from '../../../assets/images/icon6.png';
import NotificationLogo from '../../../assets/images/icon7.png';


class NavItems extends Component {


    render() {

        let activeClass = null;
        if (this.props.show) {
            activeClass = 'active'
        }

        return (
            <nav className={activeClass}>
                <ul>
                    <li>
                        <a href="/" title="">
                            <span><img src={HomeLogo} alt="" /></span>
									Home
								</a>
                    </li>
                    <li>
                        <a href="companies.html" title="">
                            <span><img src={CompaniesLogo} alt="" /></span>
									Companies
								</a>

                    </li>
                    <li>
                        <a href="projects.html" title="">
                            <span><img src={ProjectsLogo} alt="" /></span>
									Projects
								</a>
                    </li>
                    <li>
                        <a href="profiles.html" title="">
                            <span><img src={ProfileLogo} alt="" /></span>
									Profiles
								</a>

                    </li>
                    <li>
                        <a href="/jobs" title="">
                            <span><img src={JobsLogo} alt="" /></span>
									Jobs
								</a>
                    </li>
                    <li>
                        <a href="#" title="" className="not-box-openm">
                            <span><img src={MessagesLogo} alt="" /></span>
									Messages
								</a>
                    </li>
                    <li>
                        <a href="#" title="" className="not-box-open">
                            <span><img src={NotificationLogo} alt="" /></span>
									Notification
								</a>
                    </li>

                </ul>
            </nav>
        )
    }
}


export default NavItems;