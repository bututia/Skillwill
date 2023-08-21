import React from 'react';
import doneDark from '../assets/icon-done-dark.png';
import doneLight from '../assets/icon-done-light.png';

const Todo = ({id, task, action, theme}) => {   
        return (
               <div>
               <p>{task}</p>
               <button onClick={() => action(id)}><img src={theme === "light" ? doneDark : doneLight} alt="done" /></button>
               </div>
           )
    }


export default React.memo(Todo)