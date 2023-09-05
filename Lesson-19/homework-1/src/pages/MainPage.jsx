import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import useRequest from "../hooks/useRequest"

const MainPage = () => {
    const {response, resendRequest} = useFetch({url: "/api/v1/toDoList", method: "GET"})
    const {sendRequest} = useRequest({method: "DELETE"})
    const {sendRequest: completeTask} = useRequest({method: "PUT"})
    const tasks = response?.items.map((i) => {
        return {taskName: i.taskName, task : i.task, firstName: i.firstName, lastName: i.lastName, term: i.term, isCompleted: i.isCompleted, id: i._uuid}
    }) || []

    const deleteTask = (id) => {
       sendRequest(null, `/api/v1/toDoList/${id}`).then(() => resendRequest() )
    }

    const markAsDone = (id) => {
      completeTask({isCompleted: true},  `/api/v1/toDoList/${id}`).then(() => resendRequest())
    }
    

    return <div>
        <button style={{border: "1px solid gray", padding: "10px", margin: "10px", fontSize: "15px"}}><Link to={"/create"}>create task</Link></button>
        
        {tasks.map(t => {
            return (
                <div style={{border: "1px solid gray", marginBottom: "5px", padding: "10px"}} key={t.id}>
                    <h2>{t.taskName}</h2>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}><h4>task:</h4> <p>{t.task}</p></div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}><h4>user:</h4> <p>{t.firstName} {t.lastName}</p></div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}><h4>term:</h4> <p>{t.term}</p></div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}><h4>status:</h4>{!t.isCompleted ? <p style={{color: "red"}}>not completed</p> : <p style={{color: "green"}}>completed</p>}</div>
                    <div>
                    <button style={{border: "1px solid gray", padding: "10px", margin: "10px 0", fontSize: "15px"}}><Link to={`/update/${t.id}`}>edit</Link></button>
                    <button style={{border: "1px solid gray", padding: "10px", margin: "10px 5px", fontSize: "15px", cursor: "pointer" }} onClick={() => deleteTask(t.id)}>delete</button>
                    <button style={{border: "1px solid gray", padding: "10px", margin: "10px 5px", fontSize: "15px", cursor: "pointer" }} onClick={() => markAsDone(t.id)}>Complete</button>
                    </div>
                </div>
            )
        })} 
    </div>
}

export default MainPage