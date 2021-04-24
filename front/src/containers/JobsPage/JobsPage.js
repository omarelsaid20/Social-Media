import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Fillter from '../../components/JobsMain/Fillter/Fillter';
import JobPosts from '../../components/JobsMain/JobsPosts/JobPosts';
import JobsMain from '../../components/JobsMain/JobsMain';
import Modal from '../../components/UI/Modal/Modal';

class JobsPage extends Component {
    render() {
        return (
            <Aux>
                <Fillter />
                <div className="col-lg-6">
                    <JobPosts />
                </div>
            </Aux>
        );
    }
}

export default JobsPage;