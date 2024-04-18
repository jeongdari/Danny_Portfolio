import App from "./App.js";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ErrorPage = lazy(() => import('./error-page'));

const RouteRule = {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            title: "Home",
            index: true,
            nav: true,
            element: <Home />,
        },
        {
            title: "About",
            path: "about",
            nav: true,
            element: <About />,
        },
        {
            title: "Resume",
            path: "resume",
            nav: true,
            element: <Resume />,
        },
        {
            title: "Portfolio",
            path: "portfolio",
            nav: true,
            element: <Portfolio />,
        },
    ],
};

export default RouteRule;