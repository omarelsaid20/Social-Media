import React, { Component } from 'react';

import UserImage from '../../../assets/images/resources/omar.jpg';
import UserToggle from '../UserToggle/UserToggle';

class NavUser extends Component {
    state = {
        show: false
    }

    toggleUserHandler = () => {
        this.setState((prevState) => { return { show: !prevState.show } });
    }
    

    render() {

        let toggleUser = null;
        if (this.state.show) {
            toggleUser = <UserToggle />
        }

        return (
            <div className='user-account'>
                <div onClick={this.toggleUserHandler} className="user-info">
                    <img src={UserImage} alt=""></img>
                    <a href="#" title="">Omar</a>
                    <i className="la la-sort-down"></i>
                </div>
                {toggleUser}
            </div>
        )
    }
}

export default NavUser;