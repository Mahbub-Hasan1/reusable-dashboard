import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../Components/Dashboard/About';
import ContactInfo from '../Components/Dashboard/ContactInfo';
import Dashboard from '../Components/Dashboard/Dashboard';
import Services from '../Components/Dashboard/Services';
import Login from '../Components/Login/Login';
import Navbar from '../Components/ShareComponents/Navbar';
import Sidebar from '../Components/ShareComponents/Sidebar';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <h3>home!</h3>,
        main: () => <Dashboard />,
    },
    {
        path: '/about',
        sidebar: () => <h3>about!</h3>,
        main: () => <About />,
    },
    {
        path: '/services',
        sidebar: () => <h3>services!</h3>,
        main: () => <Services />,
    },
    {
        path: '/contactInfo',
        sidebar: () => <h3>Contact Info!</h3>,
        main: () => <ContactInfo />,
    },
    {
        path: '/login',
        sidebar: () => <h3>Login!</h3>,
        main: () => <Login />,
    },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Layout = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    return (
        <div>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />

                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        {/* Navbar/App bar ======================================== */}
                        <Navbar open={open} setOpen={setOpen} />
                    </AppBar>

                    {/* sidebar contents ============================================= */}
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader} onClick={() => setOpen(!open)}>
                            <div className="sidebar_logo">
                                <img
                                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                                    alt=""
                                />
                            </div>
                            <IconButton>
                                {theme.direction === 'ltr' ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>
                        </div>

                        <Divider />

                        {/* sidebar links --------------- */}
                        <Sidebar />
                    </Drawer>

                    <Divider />

                    {/* main contents ============================================= */}
                    <main
                        className={`${clsx(classes.content, {
                            [classes.contentShift]: open,
                        })} main-contents`}
                    >
                        <div className={classes.drawerHeader} />
                        <Container maxWidth="xl" className="p-0">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={
                                            <div className="route_sidebar">
                                                <route.sidebar />
                                            </div>
                                        }
                                    />
                                ))}
                            </Switch>
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </Container>
                    </main>
                </div>

                {/* footer ========================================== */}
            </Router>
        </div>
    );
};

export default Layout;
