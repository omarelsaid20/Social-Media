import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';
import NavUser from './NavUser/NavUser';
import Backdrop from '../UI/Backdrop/Backdrop';

class Navbar extends Component {
    state = {
        showSidebar: false
    }

    closeSidebarHandler = () => {
        this.setState({ showSidebar: false });
    }

    showSidebarHandler = () => {
        this.setState((prevState) => { return { showSidebar: !prevState.showSidebar } });
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.state.showSidebar}
                    clicked={this.closeSidebarHandler} />
                <header>
                    <div className='container'>
                        <div className='header-data'>
                            <div className="logo">
                                <a title=""><Logo /></a>
                            </div>
                            <div className="search-bar">
                                <form>
                                    <input type='text' name='search' placeholder='Search' />
                                    <button type="submit"><i className="la la-search"></i></button>
                                </form>
                            </div>
                            <NavItems show={this.state.showSidebar} />
                            <div onClick={this.showSidebarHandler} className="menu-btn">
                                <a style={{ color: 'white', cursor: 'pointer' }}>
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>
                            <NavUser />
                        </div>
                    </div>
                </header>
            </Aux>
        );
    }
}


export default Navbar;