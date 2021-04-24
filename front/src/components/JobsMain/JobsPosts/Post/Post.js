import React, { useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useHistory } from 'react-router-dom'

import UserImage from '../../../../assets/images/resources/omar.jpg'
import icon8 from '../../../../assets/images/icon8.png'
import icon9 from '../../../../assets/images/icon9.png'

const Post = (props) => {
    
    const [options, setOptions] = useState(false);
    
    const optionsIsClicked = () => {
        setOptions(!options);
    }
    
    let optionsMenu = null;
    
    if (options === true) {
        optionsMenu = (
            <ul className="ed-options active">
                <li><a href="#" title="">Edit Post</a></li>
                <li><a href="#" title="">Unsaved</a></li>
                <li><a href="#" title="">Unbid</a></li>
                <li><a href="#" title="">Close</a></li>
                <li><a href="#" title="">Hide</a></li>
            </ul>
        )
    }

    const history = useHistory();
    const showDetails = () => {
        history.push('/post-detail/' + props.key);
    }

    let postDuration = null;
    let postDurationElement = null;
    const CalcDuration = () => {
        // postDuration = moment(props.createdDate).startOf('Day').fromNow();
        postDurationElement = <Moment date={props.createdDate}
            durationFromNow
        />

    }

    CalcDuration();

    return (
        <div className="post-bar">
            <div className="post_topbar">
                <div className="usy-dt">
                    <img style={{ borderRadius: '50%', width: '44px' }} src={UserImage} alt="" />
                    <div className="usy-name">
                        <h3>Omar Elsaid</h3>
                        <span><img src="images/clock.png" alt="" />
                            {postDurationElement} minuts ago
                        </span>
                    </div>
                </div>
                <div className="ed-opts">
                    <a onClick={optionsIsClicked} href="#" title="" className="ed-opts-open"><i
                        className="la la-ellipsis-v"></i></a>
                    {optionsMenu}
                </div>
            </div>
            <div className="epi-sec">
                <ul className="descp">
                    <li><img src={icon8} alt="" /><span>{props.title}</span></li>
                    <li><img src={icon9} alt="" /><span>Egypt</span></li>
                </ul>
                {/* <ul className="bk-links">
                    <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                    <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                </ul> */}
            </div>
            <div className="job_descp"  onClick={showDetails}>
                <h3>{props.title}</h3>
                <ul className="job-dt">
                    <li><a href="#" title="">Full Time</a></li>
                    <li><span>{props.salary} per Month</span></li>
                </ul>
                <p>{props.content.slice(0, 200) + '... '}<a href="#" title="">view more</a></p>

            </div>
            <div className="job-status-bar">
                <ul className="like-com">
                    <li>
                        <a
                            style={{ fontSize: '115%' }}
                            href="#" className="">
                            <i class="fas fa-heart"></i>Like
                            </a>

                    </li>
                </ul>
                <a style={{ fontSize: '115%' }} href="#" className="comments"><i class="fas fa-comment-alt"></i>Comments 15</a>
                {/* <a href="#"><i class="fas fa-eye"></i>Views 50</a> */}
            </div>
        </div>
    );
};

export default Post;