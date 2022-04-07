import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";

const handlers = {
    [ADD_TODO]: (state, {title}) => ({...state, todos: [{id: Math.random().toString(), title}, ...state.todos]}),
    [REMOVE_TODO]: (state, {id}) => {
        console.log(id,'hehehe')
       return ({...state, todos: state.todos.filter(t => t.id !== id)})
    },
    [UPDATE_TODO]: (state, {title, id}) => ({
        ...state, todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        })
    }),
    DEFAULT: state => state
}


export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}