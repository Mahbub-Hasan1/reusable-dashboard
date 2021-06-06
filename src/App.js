import React, { createContext } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import './Assets/Styles/SCSS/main.css';
import Footer from './Components/ShareComponents/Footer';
import routes from './Routes/routes';
import RouteWithSubRoutes from './Routes/RouteWithSubRoutes';

export const AppContext = createContext();

function App() {
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(
        () =>
            setTimeout(() => {
                setLoading(false);
            }, 2000),
        []
    );

    return (
        <div id="App">
            {loading ? (
                <div className="react-spinner">
                    <RingLoader color="#1266f1" loading={loading} size={60} />
                    <h5>Mahbub-Hasan....</h5>
                </div>
            ) : (
                <AppContext.Provider value={{ open, setOpen }}>
                    <BrowserRouter>
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </AppContext.Provider>
            )}
        </div>
    );
}

export default App;
