import ToDo from "./ToDo";

const API_KEY = "U5K8pFzZJE32_noDlyFuYMAEKEs3rCwA-qWtTzXSaIqpFlYcUA";

const TaskList = () => {
    const onSubmit = (name, task) => {
        fetch("/api/v1/task", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify([{name, task}])
            })
    }

    return <div>
        <ToDo onSubmit={onSubmit}/>
    </div>
}

export default TaskList