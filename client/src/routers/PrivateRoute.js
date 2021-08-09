import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({auth,component: Component,role='user',redirect="/",...rest}) => {
    return  (<Route {...rest} component={(props) => {
        return (
            (!!(auth.user) && (auth.user.role === role || auth.user.role === "admin")) ? (
                    <Component {...props} />
            ) : (
                    <Redirect to={redirect} />
                )
    
        )
    }} />)
};

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute);