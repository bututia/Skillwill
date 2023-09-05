import { useRef } from "react"

const Inputs = ({onSubmit, taskName, task, firstName, lastName, term}) => {
    const nameInputRef = useRef(null)
    const taskInputRef = useRef(null)
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const termRef = useRef()

    const onClick = () => {
        onSubmit(nameInputRef.current.value, taskInputRef.current.value, firstnameRef.current.value, lastnameRef.current.value, termRef.current.value)
        nameInputRef.current.value = ""
        taskInputRef.current.value = ""
        firstnameRef.current.value = ""
        lastnameRef.current.value = ""
        termRef.current.value = ""
    }

    return <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "5px"}}>
        <input type="text" placeholder="task name..." ref={nameInputRef} defaultValue={taskName}/>
        <input type="text" placeholder="task..." ref={taskInputRef} defaultValue={task}/>
        <input type="text" placeholder="first name..." ref={firstnameRef} defaultValue={firstName}/>
        <input type="text" placeholder="last name..." ref={lastnameRef} defaultValue={lastName}/>
        <input type="text" placeholder="term..." ref={termRef} defaultValue={term}/>
        <button onClick={onClick}>add task</button>
    </div>
}


export default Inputs