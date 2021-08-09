import React, { useState } from 'react';
import { Input, InputAdornment, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const LoginForm = (props) => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    email: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = (event)=>{
    event.preventDefault();
    props.submit(values.email,values.password);
  }



  return (

    <form className="reigster-login-form" onSubmit={submitForm}>
      <FormControl className="reigster-login-form-input" >
        <InputLabel htmlFor="standard-email" >Email</InputLabel>
        <Input
          id="standard-email"
          type="text"
          value={values.email}
          onChange={handleChange('email')}
        />
      </FormControl>
      <FormControl className="reigster-login-form-input">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <button className="sign-in-btn">Sign In</button>
    </form>

  )

}
export default LoginForm;