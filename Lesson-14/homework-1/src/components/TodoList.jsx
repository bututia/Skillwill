import React from 'react';
import done from '../assets/done-icon.png';

const Todo = ({id, task, action}) => {   
        return (
               <div>
               <p>{task}</p>
               <button onClick={() => action(id)}><img src={done} alt="done" /></button>
               </div>
           )
    }


export default React.memo(Todo)