import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        return (
            <Aux>
                <Backdrop show />
                <div className='ModalPost' style={{zIndex: '100', position: 'fixed'}}>
                    <h1>hello from Modal.js</h1>
                </div>
            </Aux>
        );
    }
}

export default Modal;