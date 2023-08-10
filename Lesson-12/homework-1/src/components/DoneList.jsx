import replay from '../assets/replay-icon.png';
import remove from '../assets/delete-icon.png';

const Done = ({id, task, action1, action2}) => {
    return (
        <div>
    <p>{task}</p>
    <button onClick={() => action1(id)}><img src={replay} alt="re-do" /></button>
    <button onClick={() => action2(id)}><img src={remove} alt="delete" /></button>
    </div>
    )
}

export default Done