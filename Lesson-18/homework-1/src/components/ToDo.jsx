import { useRef} from "react"

const ToDo = ({onSubmit}) => {
    const nameInputRef = useRef(null)
    const taskInputRef = useRef(null)

    const onClick = () => {
        onSubmit(nameInputRef.current.value, taskInputRef.current.value)
        nameInputRef.current.value = ""
        taskInputRef.current.value = ""
    }

    return <div>
        <input type="text" placeholder="name..." ref={nameInputRef}/>
        <input type="text" placeholder="task..." ref={taskInputRef}/>
        <button onClick={onClick}>add</button>
    </div>
}


export default ToDo