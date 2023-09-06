import { useRef } from "react"
import { langOptions, useLangContext } from "../contexts/langContext"

const Inputs = ({onSubmit, taskName, task, firstName, lastName, term}) => {
    const nameInputRef = useRef(null)
    const taskInputRef = useRef(null)
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const termRef = useRef()
    const {lang} = useLangContext()
    const dict = langOptions[lang]

    const onClick = () => {
        onSubmit(nameInputRef.current.value, taskInputRef.current.value, firstnameRef.current.value, lastnameRef.current.value, termRef.current.value)
        nameInputRef.current.value = ""
        taskInputRef.current.value = ""
        firstnameRef.current.value = ""
        lastnameRef.current.value = ""
        termRef.current.value = ""
    }

    return <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "5px"}}>
        <input type="text" placeholder={dict.taskName + '...'} ref={nameInputRef} defaultValue={taskName}/>
        <input type="text" placeholder={dict.task + '...'} ref={taskInputRef} defaultValue={task}/>
        <input type="text" placeholder={dict.firstName + '...'} ref={firstnameRef} defaultValue={firstName}/>
        <input type="text" placeholder={dict.lastName + '...'} ref={lastnameRef} defaultValue={lastName}/>
        <input type="text" placeholder={dict.term + '...'} ref={termRef} defaultValue={term}/>
        <button onClick={onClick}>{dict.addTask}</button>
    </div>
}


export default Inputs