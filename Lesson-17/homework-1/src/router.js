import About from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Fact from "./pages/FactsPage";
import MainPage from "./pages/MainPage";

const router = [
    {
        element: <MainPage/>,
        path: "/"
    },

    {
        element: <About/>,
        path: "/about"
    },
    {
        element: <Fact/>,
        path: "/facts/:factId"
    },
    {
        element: <ErrorPage/>,
        path: '*'
    }
]

export default router