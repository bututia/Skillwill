import { createContext, useContext, useMemo, useState } from "react"

export const langOptions = {
    eng: {
        taskName: 'task name' ,
        task: 'task',
        firstName: 'user first name',
        lastName: 'user last name',
        term: 'term',
        addTask: 'add task',
        user: 'user',
        status: 'status',
        edit: 'edit',
        notCompleted: 'not completed',
        completed: 'completed',
        delete: 'delete',
        complete: 'complete',
        createTask: 'create task'
    
    },
    geo: {
        taskName: 'დავალების სახელი' ,
        task: 'დავალება',
        firstName: 'მომხმარებლის სახელი',
        lastName: 'მამხმარებლის გვარი',
        term: 'ვადა',
        addTask: 'დავალების დამატება',
        user: 'მომხმარებელი',
        status: 'სტატუსი',
        edit: 'რედაქტირება',
        notCompleted: 'დაუსრულებელი',
        completed: 'დასრულებული',
        delete: 'წაშლა',
        complete: 'დასრულება',
        createTask: 'დავალების შექმნა'
    }
}

const LangContext = createContext(null)

const LangContextProvider = ({children}) => {
    const [isEng, setIsEng] = useState(true)

    const contextValue = useMemo(() => ({
        lang: isEng ? 'eng' : 'geo',
        toggleLang: () => setIsEng((prev) => !prev)
    }))

    return <LangContext.Provider value={contextValue}>
        {children}
    </LangContext.Provider>
}

export const useLangContext = () => {
    const contextValue = useContext(LangContext)
    if(!contextValue) throw new Error('Your component is not inside UserContextProvider')

    return contextValue
}

export default LangContextProvider