import React from "react";
import LoginForm from "../components/forms/LoginForm";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { connect } from "react-redux";
import { startLoginIn } from '../actions/auth';




const LoginPage = (props) => {

    const submit = async (user, password) => {
        try {
            await props.startLoginIn(user, password);
            props.history.push(`/auth/workers`);
        } catch (e) {
            alert(e.message);
        }

    }


    return (
        <div className="reigster-login-page">
            <h1 className="main-title-sign-in">Sign In</h1>
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
                <LoginForm submit={submit} />
                <div className="reigster-login-form-container-text">
                    <p className="blue_color_text under_line_text forgot-password-text">Forgot password?</p>
                </div>
            </div>

            <p className="reigster-login-page_link-login text">
                <span className="bold_text">Don't have an account?</span>
                <NavLink to="/register" className="blue_color_text none_under_line"> Sign up</NavLink>
            </p>
            <p className="service-text-login under_line_text bold_text">Our Terms of Use and Privacy Policy</p>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    startLoginIn: (user, password) => dispatch(startLoginIn(user, password))
})
export default connect(undefined,mapDispatchToProps)(LoginPage);