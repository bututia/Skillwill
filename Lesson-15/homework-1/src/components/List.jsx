import { useCallback, useEffect, useRef, useState } from "react";
import Todo from "./TodoList";
import Done from "./DoneList";
import sun from "../assets/icon-sun.png";
import addDark from "../assets/icon-add-dark.png";
import moon from "../assets/icon-moon.png";
import addLight from "../assets/icon-add-light.png";
import useLocalStorage from "../hooks/useLocalStorage";
import useWindowResize from "../hooks/useWindowResize";


const List = () => {

const [inputValue, setInputValue] = useState("");
const [to_do, setTo_do] = useState([{ id: 1, task: "eat"},{ id: 2, task: "die"}]);
const [done, setDone] = useState([]);
const [theme, changePageTheme] = useLocalStorage("mode", "light");
const iconRef = useRef(null);
const themeDiv = useRef(null)
const {width} = useWindowResize()

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

const lightMode = () => {
    changePageTheme("light");
    iconRef.current.src = sun
    iconRef.current.classList.remove("theme");
    document.documentElement.style.setProperty("--body", "#b1b1b1");
    document.documentElement.style.setProperty("--text", "#333333");
    document.documentElement.style.setProperty("--color-1", "#e4e4e4");
    document.documentElement.style.setProperty("--color-2", "#bebebe");
}

const darkMode = () => {
    changePageTheme("dark");
    iconRef.current.src = moon;
    iconRef.current.classList.add("theme");
    document.documentElement.style.setProperty("--body", "#222222");
    document.documentElement.style.setProperty("--text", "#c7c7c7");
    document.documentElement.style.setProperty("--color-1", "#525252");
    document.documentElement.style.setProperty("--color-2", "#333333");
}

useEffect(() => {
    if(theme === "light"){
        lightMode()
    }else{
        darkMode()
    }
}, [])

useEffect(() => {
    if(width <= 480){
        lightMode()
        themeDiv.current.style.pointerEvents = "none"
    }else{
        themeDiv.current.style.pointerEvents = "all"
    }
}, [width])




        return (
            <div className="container">
                    <div className="input">
                    <div>
                    <input type="text" placeholder="Add Task" onChange={taskValue} value={inputValue}/>
                    <button onClick={addTask}><img src={theme === "light" ? addDark : addLight} alt="add"/></button>
                    </div>
                    <div className="themeDiv" ref={themeDiv} onClick={(theme === "light") ? darkMode : lightMode}><img src={sun} alt="mode" ref={iconRef} /></div>
                    </div>
                    
                <div className="to-do">
                    <h1>To-Do :</h1>
{to_do.map((i) => (
<Todo key={i.id} id={i.id} task={i.task} action={markAsDone} theme={theme}/>
))}
                
                </div>

                <div className="done">
                    <h1>Done :</h1>
{done.map((i) => (
 <Done key={i.id} id={i.id} task={i.task} action1={reDoTask} action2={removeTask} theme={theme}/>
))}
                </div>

            </div>
        )
    }


export default List