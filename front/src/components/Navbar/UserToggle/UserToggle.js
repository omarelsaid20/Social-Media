import React from 'react';

const UserToggle = (props) => {
    return (
        <div className="user-account-settingss">
            <h3>Online Status</h3>
            <ul className="on-off-status">
                <li>
                    <div className="fgt-sec">
                        <input type="radio" name="cc" id="c5" />
                        <label htmlFor="c5">
                            <span></span>
                        </label>
                        <small>Online</small>
                    </div>
                </li>
                <li>
                    <div className="fgt-sec">
                        <input type="radio" name="cc" id="c6" />
                        <label htmlFor="c6">
                            <span></span>
                        </label>
                        <small>Offline</small>
                    </div>
                </li>
            </ul>
            <h3>Custom Status</h3>
            <div className="search_form">
                <form>
                    <input type="text" name="search" />
                    <button type="submit">Ok</button>
                </form>
            </div>
            {/* --search_form end-- */}
            <h3>Setting</h3>
            <ul className="us-links">
                <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                <li><a href="#" title="">Privacy</a></li>
                <li><a href="#" title="">Faqs</a></li>
                <li><a href="#" title="">Terms and Conditions</a></li>
            </ul>
            <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
        </div>
    );
};

export default UserToggle;