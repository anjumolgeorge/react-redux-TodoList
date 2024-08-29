// slice create cheythathinu shesham aane store create akua
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addTodo : (state,actions)=>{
            state.todoList.push({content: actions.payload.content, id: actions.payload.id
                 })

        }

    }
})
 export default todoSlice.reducer
 export const {addTodo} = todoSlice
