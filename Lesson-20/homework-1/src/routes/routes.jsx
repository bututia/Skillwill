import Header from "../components/header";
import LangContextProvider from "../contexts/langContext";
import CreateTask from "../pages/CreateTaskPage";
import MainPage from "../pages/MainPage";
import UpdateTask from "../pages/Updatepage";
import { Outlet } from "react-router-dom"

const routes = [
    {
        element: (
            <div>
                <LangContextProvider>
              <Header/>
              <Outlet/>
              </LangContextProvider>
            </div>
        ),
        path: "/",
        children: [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <CreateTask/>,
                path: "create"
            },
            {
                element: <UpdateTask/>,
                path: "update/:id"
            }
        ]
    }
]

export default routes