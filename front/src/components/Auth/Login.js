import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'

const Login = () => {
    return (
        <Aux>
            <form>
                <div class="row">
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="text" name="username" placeholder="Username" />
                            <i class="la la-user"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="password" name="password" placeholder="Password" />
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="checky-sec">
                            <div class="fgt-sec">
                                <input type="checkbox" name="cc" id="c1" />
                                <label for="c1">
                                    <span></span>
                                </label>
                                <small>Remember me</small>
                            </div>
                            <a href="#" title="">Forgot Password?</a>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit">Sign in</button>
                    </div>
                </div>
            </form>
            <div class="login-resources">
                <h4>Login Via Social Account</h4>
                <ul>
                    <li><a href="#" title="" class="fb"><i class="fa fa-facebook"></i>Login Via Facebook</a></li>
                    <li><a href="#" title="" class="tw"><i class="fa fa-twitter"></i>Login Via Twitter</a></li>
                </ul>
            </div>
        </Aux>
    )
}

export default Login;