import React from 'react';
import resetDark from '../assets/icon-reset-dark.png';
import removeDark from '../assets/icon-delete-dark.png';
import resetLight from '../assets/icon-reset-light.png';
import removeLight from '../assets/icon-delete-light.png';

const Done = ({id, task, action1, action2, theme}) => {
    const colorsDark = ["#3b3b3b", "#9e9e9e", "#626262"] 
    const colorsLight = ["#9e9e9e", "#757575", "#eeeeee"]
    const num = Math.floor(Math.random() * colorsDark.length)
    
        return (
            <div style={{borderColor: theme === "light" ? colorsDark[num] : colorsLight[num]}}>
        <p>{task}</p>
        <button onClick={() => action1(id)}><img src={theme === "light" ? resetDark : resetLight} alt="reset" /></button>
        <button onClick={() => action2(id)}><img src={theme === "light" ? removeDark : removeLight} alt="delete" /></button>
        </div>
        )
    }


export default React.memo(Done)