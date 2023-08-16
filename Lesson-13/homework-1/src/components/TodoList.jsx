import { PureComponent } from 'react';
import done from '../assets/done-icon.png';

class Todo extends PureComponent {   
    render(){
        const {id, task, action} = this.props
        return (
                        <div>
                        <p>{task}</p>
                        <button onClick={() => action(id)}><img src={done} alt="done" /></button>
                        </div>
                    )
    }
}


export default Todo