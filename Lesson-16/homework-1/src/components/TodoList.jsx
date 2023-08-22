import React from 'react';
import doneDark from '../assets/icon-done-dark.png';
import doneLight from '../assets/icon-done-light.png';
import inProgressDark from '../assets/icon-in-progress-dark.png'
import inProgressLight from '../assets/icon-in-progress-light.png'

const Todo = ({id, task, action1, action2, theme}) => { 
    const colorsDark = ["#3b3b3b", "#9e9e9e", "#626262"]
    const colorsLight = ["#9e9e9e", "#757575", "#eeeeee"]
    const num = Math.floor(Math.random() * colorsDark.length)

        return (
               <div style={{borderColor: theme === "light" ? colorsDark[num] : colorsLight[num]}}>
               <p>{task}</p>
               <button onClick={() => action1(id)}><img src={theme === "light" ? inProgressDark : inProgressLight} alt="inProgress" /></button>
               <button onClick={() => action2(id)}><img src={theme === "light" ? doneDark : doneLight} alt="done" /></button>
               </div>
           )
    }


export default React.memo(Todo)