import React from "react";

import Aux from '../../hoc/Auxiliary/Auxiliary';

const AddResume = () => {
    return (
        <Aux>
            <div class="company-title">
                <h3 style={{textAlign: 'center'}}>Add Your Resume</h3>
            </div>
            <form className="addResume">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Position Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Category</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Skills</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Work Experience</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputEmail4">Experience Years</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputPassword4">Country</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputPassword4">City</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Continue</button>
            </form>
        </Aux >
    );
};

export default AddResume;
