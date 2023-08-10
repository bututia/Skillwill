import { Component } from "react";


import Todo from "./TodoList";
import Done from "./DoneList";

class List extends Component {

    state = {
        inputValue: '',
        to_do: [
            { id: 1, task: "eat"},
            { id: 2, task: "die"}
        ]
        ,
        done: []
        
}

taskValue = (event) => {
    this.setState({
       inputValue: event.target.value
    })
}

addTask = () => {
    const task = {id: this.state.to_do.length + 1, task: this.state.inputValue}

    this.setState({inputValue: '', to_do: [...this.state.to_do, task]})
}

markAsDone = (id) => {
    const finishedTask = this.state.to_do.find(x => x.id === id);
    const newTodo = this.state.to_do.filter((task) => task !== finishedTask);
    const task = {id: this.state.done.length + 1, task: finishedTask.task}
    
     this.setState({to_do: newTodo, done: [...this.state.done, task]})
}


reDoTask = (id) => {
    const reDo = this.state.done.find(x => x.id === id);
    const newDone = this.state.done.filter((task) => task !== reDo);
    const task = {id: this.state.to_do.length + 1, task: reDo.task}
    
     this.setState({to_do: [...this.state.to_do, task], done: newDone})
}

removeTask = (id) => {
    const newDone = this.state.done.filter((task) => task.id !== id)
    this.setState({done: [...newDone]})
}

    render() {
        return (
            <div className="container">
                    <div className="input">
                    <input type="text" placeholder="Add Task" onChange={this.taskValue} value={this.state.inputValue}/>
                    <button onClick={this.addTask}>Add to List</button>
                    </div>

                <div className="to-do">
                    <h1>To-Do :</h1>
{this.state.to_do.map((i) => (
<Todo key={i.id} id={i.id} task={i.task} action={this.markAsDone}/>
))}
                
                </div>

                <div className="done">
                    <h1>Done :</h1>
{this.state.done.map((i) => (
 <Done key={i.id} id={i.id} task={i.task} action1={this.reDoTask} action2={this.removeTask}/>
))}
                </div>

            </div>
        )
    }
}

export default List