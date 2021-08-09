import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Validate from '../../utils/Validate';

const WorkerForm = ({submit,firstName,lastName,department}) => {
    const [state, setState] = useState({
        firstName: firstName || '',
        lastName:lastName || '',
        department:department || ''
    });

    const handleChange = (prop) => (event) => {
        setState({ ...state, [prop]: event.target.value });
    };
    const submitForm = (event) => {
        event.preventDefault();
        const validate = new Validate();
        if(!validate.isObjectPropsHaveValues(state)){
           alert("you must fill all fields")
           return;
        }
        if(submit){
            submit(state)
        }
        setState(()=>({
            firstName:  '',
            lastName: '',
            department: ''
        }))
    }
    return (
        <form className="reigster-login-form" onSubmit={submitForm}>
            <div>
                <TextField
                    label="First Name"
                    value={state.firstName}
                    onChange={handleChange('firstName')}
                    fullWidth
                />
                <TextField
                    label="Last Name"
                    value={state.lastName}
                    onChange={handleChange('lastName')}
                    fullWidth
                />
                <TextField

                    label="Department"
                    value={state.department}
                    onChange={handleChange('department')}
                    fullWidth
                />
            </div>
            <button className="sign-up-btn">Submit</button>
        </form>
    )

}
export default WorkerForm;