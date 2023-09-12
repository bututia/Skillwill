import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: {
        td: [],
        done: []
    }
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action){
            state.todoList.td.push(action.payload)
        },
        deleteTodo(state, action) {
            state.todoList.td = state.todoList.td.filter(item => item.value !== action.payload)
        },
        markAsDone(state, action) {
            const doneTask = state.todoList.td.find(item => item.value === action.payload)
            doneTask.isCompleted = true;
            state.todoList.td = state.todoList.td.filter(item => item.value !== action.payload)
            state.todoList.done.push(doneTask)
        },
        deleteDone(state, action) {
            state.todoList.done = state.todoList.done.filter(item => item.value !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo, markAsDone, deleteDone} = todoSlice.actions
export default todoSlice.reducer