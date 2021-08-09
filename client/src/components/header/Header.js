import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogOut } from '../../actions/auth';

const Header = (props) => {
    const logOut =async () => {
        try{
            await props.startLogOut()
        }catch(e){
           alert(e.message)
        }
    }

    return (
        <header className="header">
            <NavLink to="/auth/workers" className="link" activeClassName="link-BlindActive">Workers</NavLink>
           {(props.auth.user && props.auth.user.role === "admin") && <NavLink to="/auth/addWorker" className="link" activeClassName="link-BlindActive">Add Worker</NavLink>}
            <button onClick={logOut}>Log out</button>
        </header>

    );
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);