import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { combineReducers } from "redux";
import Aux from "../../hoc/Auxiliary/Auxiliary";

import * as actions from '../../store/action/index';

const Signup = (props) => {
    const [userName, setUserName] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [errors, setErrors] = useState([]);

    const userNameChangedHandler = (event) => {
        setUserName(event.target.value);
    };
    const userCountryChangedHandler = (event) => {
        setUserCountry(event.target.value);
    };
    const userEmailChangedHandler = (event) => {
        setUserEmail(event.target.value);
    };
    const userPasswordChangedHandler = (event) => {
        setUserPassword(event.target.value);
    };
    const errorHandler = () => {
        setErrors(props.error);
    }

    useEffect(() => {
        // console.log(errors);
        errorHandler()
    }, [props.error])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSubmit(!submit)
        props.onAuth(userName, userCountry, userEmail, userPassword);
        console.log('Starting submitting');
    }


    let btnLoading = (
        <button
            type="submit"
            value="submit">
            Get Started </button>
    )
    if (props.loading === true) {
        btnLoading = (
            <button value="submit" type="submit" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        )
    }

    let num = 1;
    return (

        <Aux >
            {
                errors.map(elem => (
                    <div key={num++} class="alert alert-warning" role="alert">
                        {elem.param}: {elem.msg}
                    </div>
                ))
            }

            < form onSubmit={onSubmitHandler} >
                <div class="row">
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={userName}
                                onChange={userNameChangedHandler} />
                            <i class="la la-user"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={userCountry}
                                onChange={userCountryChangedHandler} />
                            <i class="la la-globe"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail address"
                                value={userEmail}
                                onChange={userEmailChangedHandler} />
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userPassword}
                                onChange={userPasswordChangedHandler} />
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input
                                type="password"
                                name="repeat-password"
                                placeholder="Repeat Password"
                            />
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                            <div class="fgt-sec">
                                <input type="checkbox" name="cc" id="c2" />
                                <label for="c2">
                                    <span></span>
                                </label>
                                <small>
                                    Yes, I understand and agree to the workwise Terms &
                                        Conditions.</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        {btnLoading}
                    </div>
                </div>
            </form >
        </Aux>

    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.authErrors,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (userName, country, email, password) => {
            dispatch(actions.auth(userName, country, email, password));
            console.log('dispatched successfully');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
