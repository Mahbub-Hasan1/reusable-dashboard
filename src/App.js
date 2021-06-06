import { css } from '@emotion/react';
import React, { createContext } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import './Assets/Styles/SCSS/main.css';
import Footer from './Components/ShareComponents/Footer';
import routes from './Routes/routes';
import RouteWithSubRoutes from './Routes/RouteWithSubRoutes';

export const AppContext = createContext();

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function App() {
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [color, setColor] = React.useState('#ffffff');

    React.useEffect(
        () =>
            setTimeout(() => {
                setLoading(false);
            }, 2000),
        []
    );

    return (
        <div>
            {loading ? (
                <ClipLoader color={color} loading={loading} css={override} size={150} />
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
