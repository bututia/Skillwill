import { useEffect, useState } from "react";
import ToDo from "./ToDo";

const API_KEY = "lvhPMXfEBe7Qdb6mQ9oqH9gzveIgxpgC6JHH_n-W9Sf7yauOsQ";

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const onSubmit = (name, task) => {
        fetch("/api/v1/toDo", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
            body: JSON.stringify([{name, task, isCompleted : true}])
            }).then((res) => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then(data => setTasks((prev) => [{name : data.items[0].name, task: data.items[0].task, id: data.items[0]._uuid}, ...prev]))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch("/api/v1/todo", {
            method: "GET",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
            }).then((res) => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then(data => setTasks(data.items.map(i => {
                return {name: i.name, task : i.task, id: i.id}
            }))).catch(err => console.log(err))
    }, [])

   

    return <div>
        <ToDo onSubmit={onSubmit}/>
        {tasks.map(t => {
            return (
                <div style={{border: "1px solid gray", marginBottom: "5px"}} key={t.id}>
                    <h2>{t.name}</h2>
                    <p>{t.task}</p>
                </div>
            )
        })}
    </div>
}

export default TaskList