import About from "../Components/Dashboard/About";
import ContactInfo from "../Components/Dashboard/ContactInfo";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
import HomePage from "../Pages/HomePage";
import PageNotFound from "../Pages/PageNotFound";

const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        // addad nested routes 
        routes: [
            {
                path: '/dashboard/about',
                component: About,
            },
            {
                path: '/dashboard/contactInfo',
                component: ContactInfo,
            },
        ]
    },
    {
        path: '*',
        component: PageNotFound,
    },
];

export default routes;