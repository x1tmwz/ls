import React, { useReducer } from 'react';
import { Input, InputAdornment, InputLabel, FormControl, IconButton, TextField, FormHelperText } from '@material-ui/core';
import Validate from '../../utils/Validate';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
    init,
    reducer,
    setName,
    setLastName,
    setEmail,
    setPassword,
    setRetypePassword,
    toggleShowPassword,
    toggleShowRetypePassword,
    defaultState
} from '../../formReducer/registerReducer';

const RegisterForm = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState, init)
    const handleChange = (func) => (event) => {
        const value = func(event.target.value)
        dispatch(value);
    };
    const handleClickShowPassword = () => {
        dispatch(toggleShowPassword())
    };
    const handleClickShowRetypePassword = () => {
        dispatch(toggleShowRetypePassword())
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const submitForm = (event) => {
        event.preventDefault();
        const validate = new Validate();
        const isError =validate.isErrors([state.emailError,state.retypePasswordError,state.passwordError]);
        const formRelvantValues = [ 'password','retypePassword','email','firstName','lastName'];
        if(isError){
            alert("some there is errors in the form")
            return;
        }
        if(!validate.isObjectPropsHaveValues(state,formRelvantValues)){
           alert("you must fill all fields")
           return;
        }
         props.submit(state.email,state.password,state.firstName,state.lastName);
        

        
    }

    return (
        <form className="reigster-login-form" onSubmit={submitForm}>
            <div>
                <h1 className="sub-title">Personal Detilas</h1>
                <TextField
                    id="register-first-name"
                    label="First Name"
                    value={state.firstName}
                    onChange={handleChange(setName)}
                    fullWidth
                />
                <TextField
                    id="register-last-name"
                    label="Last Name"
                    value={state.lastName}
                    onChange={handleChange(setLastName)}
                    fullWidth
                />
                <TextField
                    id="register-email"
                    label="Email"
                    value={state.email}
                    onChange={handleChange(setEmail)}
                    fullWidth
                    error={state.emailError}
                    helperText={state.emailError ? "Email must be in this format XXX@XXX.XXX" : ""}
                />
            </div>

            <div>
                <h1 className="sub-title">Password</h1>
                <FormControl fullWidth error={state.passwordError} >
                    <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={state.showPassword ? 'text' : 'password'}
                        value={state.password}
                        onChange={handleChange(setPassword)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {state.passwordError && <FormHelperText id="standard-weight-helper-text">Password must contain 8 chars</FormHelperText>}
                </FormControl>
                <FormControl fullWidth error={state.retypePasswordError}>
                    <InputLabel htmlFor="standard-adornment-retype-password" >Retype Password</InputLabel>
                    <Input
                        id="standard-adornment-retype-password"
                        type={state.showRetypePassword ? 'text' : 'password'}
                        value={state.retypePassword}
                        onChange={handleChange(setRetypePassword)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowRetypePassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {state.showRetypePassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {state.retypePasswordError && <FormHelperText id="standard-retypePasswordError-text">Passwords arent match</FormHelperText>}
                </FormControl>
            </div>

            <button className="sign-up-btn">Sign Up</button>
        </form>
    )

}
export default RegisterForm;