import  React, { useState } from "react"

interface Itodo {
    onSubmit: Function  
}

const ToDo:React.FC<Itodo>= ({onSubmit}) => {
    const [name, setName] = useState<string>('')
    const [task, setTask] = useState<string>('')

    const onClick = () => {
        onSubmit(name, task)
        setName('')
        setTask('')
    }

    return <div>
        <input type="text" placeholder="name..."  onChange={(e) => setName(e.target.value) }/>
        <input type="text" placeholder="task..." onChange={(e) => setTask(e.target.value) }/>
        <button onClick={onClick}>add</button>
    </div>
}


export default ToDo