import CreateTask from "../pages/CreateTaskPage";
import MainPage from "../pages/MainPage";
import UpdateTask from "../pages/Updatepage";

const routes = [
    {
        element: <MainPage/>,
        path: "/"
    },
    {
        element: <CreateTask/>,
        path: "/create"
    },
    {
        element: <UpdateTask/>,
        path: "/update/:id"
    }
]

export default routes