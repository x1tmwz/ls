import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { register } from '../actions/auth'
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

const RegisterWorkerPage = (props) => {

    const submit = async (user, password,firstName,lastName) => {
        try{
            await register(user,password,firstName,lastName);
            props.history.push(`/`);
            alert("success register")
        }catch(e){
            alert(e.message)
        }
    }



    return (
        <div className="reigster-login-page">
            <h1 className="main-title-sign-up">Sign Up</h1>
            <div className="reigster-reigster-login-form-avatar">
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={<Icon className="badge">+</Icon>}
                >
                    <Avatar src="/images/face.png" className="reigster-reigster-login-form-avatar-image" />
                </Badge>
            </div>
            <div className="reigster-login-form-container">
                <RegisterForm submit={submit} />
            </div>
            <p className="reigster-login-page_link-register text">
                <span className="bold_text">Have an account?</span>
                <NavLink to="/" className="blue_color_text none_under_line"> Sign In</NavLink>
            </p>
            <p className="service-text-register under_line_text old_text">Our Terms of Use and Privacy Policy</p>
        </div>
    );

}

export default RegisterWorkerPage;