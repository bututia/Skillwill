import { useEffect, useState } from "react";
import ToDo from "./ToDo";

const API_KEY = "U5K8pFzZJE32_noDlyFuYMAEKEs3rCwA-qWtTzXSaIqpFlYcUA";

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const onSubmit = (name, task) => {
        fetch("/api/v1/todo", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify([{name, task, isCompleted : true}])
            }).then(res => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then(data => setTasks((prev) => [{name : data.items[0].name, task: data.items[0].task}, ...prev]))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch("/api/v1/todo", {
            method: "Get",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
            }).then(res => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then(data => setTasks(data.items.map(i => {
                return {name: i.name, task : i.task}
            }))).catch(err => console.log(err))
    })

   

    return <div>
        <ToDo onSubmit={onSubmit}/>
        {tasks.map(t => {
            return (
                <div style={{border: "1px solid gray", marginBottom: "5px"}}>
                    <h2>{t.name}</h2>
                    <p>{t.task}</p>
                </div>
            )
        })}
    </div>
}

export default TaskList