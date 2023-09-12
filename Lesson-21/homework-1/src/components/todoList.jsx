import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteDone, deleteTodo, markAsDone } from "../store/todo/todo.slice"

const TodoList = () => {
    const [value, setValue] = useState('')
    const { todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodo({value, isComplete: false}))

        setValue('')
    }

 

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="type..." value={value} onChange={e => setValue(e.target.value)}/>
            <button>add</button>
        </form>
        <div style={{backgroundColor: "#ff000033"}}>
            <h1>todo:</h1>
            {todoList.td.map((item) => 
                <div key={item.value}> {item.value}
                <button onClick={() => dispatch(deleteTodo(item.value))}>delete</button>
                <button onClick={() => dispatch(markAsDone(item.value))}>done</button>
                </div>)
            }
        </div>
        <div style={{backgroundColor: "#00ff1533"}}>
        <h1>done:</h1>
            {todoList.done.map((item) => <div key={item.value}> {item.value} <button onClick={() => dispatch(deleteDone(item.value))}>delete</button></div>)}
        </div>
    </div>
}

export default TodoList