import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import NotFoundPage from '../pages/NotFoundPage';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <Route path='/register' component={RegisterPage}  />
                <PrivateRoute path='/auth' component={AuthRouter} />  
                <Route path='*' component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );

}
export default AppRouter;