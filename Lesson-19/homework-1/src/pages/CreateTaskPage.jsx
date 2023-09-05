import { useNavigate } from "react-router-dom"
import Inputs from "../components/Inputs"
import useRequest from "../hooks/useRequest"

const CreateTask = () => {
    const {sendRequest} = useRequest({url: "/api/v1/toDoList", method: "POST"})
    const navigate = useNavigate()
    
    const onSubmit = (taskName, task, firstName, lastName, term) => {
        sendRequest([{taskName, task, isCompleted : false, firstName, lastName, term}])
        .then(() => navigate("/"))
        .catch(err => console.log(err))
    }
    return <Inputs onSubmit={onSubmit}/>
}

export default CreateTask