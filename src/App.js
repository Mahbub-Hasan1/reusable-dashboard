import React, { createContext } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './Assets/Styles/SCSS/main.css';
import Footer from './Components/ShareComponents/Footer';
import routes from './Routes/routes';
import RouteWithSubRoutes from './Routes/RouteWithSubRoutes';

export const AppContext = createContext();

function App() {
    const [open, setOpen] = React.useState(true);

    return (
        <AppContext.Provider value={{ open, setOpen }}>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/home' />
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
                <Footer />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
