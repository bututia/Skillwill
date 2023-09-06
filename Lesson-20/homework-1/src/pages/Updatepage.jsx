import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Inputs from "../components/Inputs"
import useRequest from "../hooks/useRequest"

const UpdateTask = () => {
    const param = useParams()
    const navigate = useNavigate()
    const {sendRequest} = useRequest({url: `/api/v1/toDoList/${param.id}`, method: "PUT"})
    const {response} = useFetch({url: `/api/v1/toDoList/${param.id}`, method: "GET"})

    if(!response) return <p>loading...</p>;

    const onSubmit = (taskName, task, firstName, lastName, term) => {
        sendRequest({taskName, task, isCompleted : false, firstName, lastName, term})
        .then(() => navigate("/"))
        .catch(err => console.log(err))
    }

    return <div>
        <Inputs onSubmit={onSubmit} taskName={response.taskName} task={response.task} firstName={response.firstName} lastName={response.lastName} term={response.term}/>
    </div>
}

export default UpdateTask