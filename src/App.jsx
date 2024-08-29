import React, { useState } from 'react';
import TodolistItems from './components/TodolistItems';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/slice/todoSlice';

const App = () => {
 const todo = useSelector((state)=> state.todo.todoList)
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const add =()=>{
    if(text === ""){
      alert("type something")
    }else {
dispatch((addTodo({content: text, id: Date.now()})))
    }
  }
  return (
    <div>
      <div>
      <h1>Todo List</h1>
      </div>
      <div>
        <input type='text'
        placeholder='type something'
         onChange={(e) => setText(e.target.value)}
        />
        <button onClick={()=>add()}>Add</button>
      </div>
      <div>
        {todo.map((item)=> (
          <TodolistItems item = {item.content} id= {item.id} key = {item.id}/>
        ))}
      
      </div>
    </div>
  );
}

export default App;

