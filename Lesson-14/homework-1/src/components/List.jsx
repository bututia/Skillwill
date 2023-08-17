import { useCallback, useState } from "react";
import Todo from "./TodoList";
import Done from "./DoneList";

const List = () => {

    const [inputValue, setInputValue] = useState("")
    const [to_do, setTo_do] = useState([{ id: 1, task: "eat"},{ id: 2, task: "die"}])
    const [done, setDone] =useState([])

const taskValue = (event) => {
    setInputValue(event.target.value)
}

const addTask = () => {
    if(inputValue !== ""){
        const task = {id: to_do.length + 1, task: inputValue}
        setInputValue('')
        setTo_do(prevState => [...prevState, task])
    }
}

const markAsDone = useCallback((id) => {
    const finishedTask = to_do.find(x => x.id === id);
    const task = {id: done.length + 1, task: finishedTask.task}
    setTo_do(prevState => prevState.filter((task) => task !== finishedTask))
    setDone(prevState => [...prevState, task])
}, [done.length, to_do])


const reDoTask = useCallback((id) => {
    const reDo = done.find(x => x.id === id);
    const task = {id: to_do.length + 1, task: reDo.task}
    setDone(prevState => prevState.filter((task) => task !== reDo))
    setTo_do(prevState => [...prevState, task])
}, [done, to_do.length])

const removeTask = useCallback((id) => {
    setDone(prevState => prevState.filter((task) => task.id !== id))
}, [])


        return (
            <div className="container">
                    <div className="input">
                    <input type="text" placeholder="Add Task" onChange={taskValue} value={inputValue}/>
                    <button onClick={addTask}>Add to List</button>
                    </div>

                <div className="to-do">
                    <h1>To-Do :</h1>
{to_do.map((i) => (
<Todo key={i.id} id={i.id} task={i.task} action={markAsDone}/>
))}
                
                </div>

                <div className="done">
                    <h1>Done :</h1>
{done.map((i) => (
 <Done key={i.id} id={i.id} task={i.task} action1={reDoTask} action2={removeTask}/>
))}
                </div>

            </div>
        )
    }


export default List