import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './Assets/Styles/SCSS/main.css';
import routes from './Routes/routes';
import RouteWithSubRoutes from './Routes/RouteWithSubRoutes';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/home' />
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
