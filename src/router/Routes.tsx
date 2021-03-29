import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
        </Switch>
    );
}

export default Routes;