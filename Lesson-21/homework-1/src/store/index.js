import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todo/todo.slice"

const rootReducer = combineReducers({
   todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})