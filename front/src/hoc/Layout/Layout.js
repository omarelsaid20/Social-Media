import React, { Component } from 'react';

// import Aux from '../../hoc/Auxiliary/Aux';
import Navbar from '../../components/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <div className='Wrapper'>
                <Navbar />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    {/* <JobsPage /> */}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Layout;