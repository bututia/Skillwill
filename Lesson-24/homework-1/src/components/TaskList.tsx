import { useEffect, useState } from "react";
import ToDo from "./ToDo";

const API_KEY = "8XROXZe8Q9flbsQlbThoHao-9LHtXARF_8MetVx5b0p_A3eJLA";

interface Itask {
    name: string | null
    task: string | null
    _uuid: string
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Itask[]>([])
    const onSubmit = (name: string, task: string) => {
        fetch("/api/v1/toDoList", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
            body: JSON.stringify([{name, task, isCompleted : true}])
            }).then((res) => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then(data => setTasks((prev) => [{name : data.items[0].name, task: data.items[0].task, _uuid: data.items[0]._uuid}, ...prev]))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch("/api/v1/toDoList", {
            method: "GET",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
            }).then((res) => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()
            }).then((data) => setTasks(data.items.map((i: Itask )=> {
                return {name: i.name, task : i.task, _uuid: i._uuid}
                
                
            }))).catch(err => console.log(err))
    }, [])

   

    return <div>
        <ToDo onSubmit={onSubmit}/>
        {tasks.map(t => {
            return (
                <div style={{border: "1px solid gray", marginBottom: "5px"}} key={t._uuid}>
                    <h2>{t.name}</h2>
                    <p>{t.task}</p>
                </div>
            )
        })}
    </div>
}

export default TaskList