import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WorkersPage from '../pages/WorkersPage';
import AddWorkerPage from '../pages/AddWorkerPage';
import EditWorkerPage from '../pages/EditWorkerPage';
import Header from '../components/header/Header';
import PrivateRoute from './PrivateRoute';

const AuthRouter = (props) => {
    return (
        <BrowserRouter>
           <Header />
            <Switch>
                <Route path='/auth/workers' component={WorkersPage}  />
                <PrivateRoute path='/auth/addWorker' component={AddWorkerPage} role={'admin'} redirect={"/auth/workers"} />
                <PrivateRoute path='/auth/editWorker/:id' component={EditWorkerPage} role={'admin'} redirect={"/auth/workers"}  />
            </Switch>
        </BrowserRouter>
    );

}

export default AuthRouter;