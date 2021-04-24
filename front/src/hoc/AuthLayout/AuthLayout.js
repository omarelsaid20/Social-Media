import React from 'react';

import mainImage from "../../assets/images/resources//undraw_authentication_fsn5.png";
import Aux from '../Auxiliary/Auxiliary';
import Login from '../../components/Auth/Login';
import Signup from '../../components/Auth/Signup';
import Footer from '../../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <Aux>
            <div class="sign-in-page">
                <div class="signin-popup">
                    <div class="signin-pop">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="cmp-info">
                                    <div class="cm-logo">
                                        <img src="images/cm-logo.png" alt="" />
                                        <h1 >FaceLook</h1>
                                        <hr />
                                        <p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                                    </div>
                                    <img src={mainImage} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="login-sec">
                                    <ul class="sign-control">
                                        <li data-tab="tab-1" class="current"><a href="#" title="">Sign in</a></li>
                                        <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
                                    </ul>
                                    <div class="sign_in_sec "><Login /></div>
                                    <div class="sign_in_sec current"><Signup /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </Aux>
    )
}

export default AuthLayout;