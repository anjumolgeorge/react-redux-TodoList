import React, { useState } from 'react';

const TodolistItems = () => {
    const [edit, setEdit] = useState("")
    const [update, setUpdate] = useState("")
  return (
    <div>
      <div>
        <input type='text'
        onChange={(e)=>setUpdate(e.target.value)}/>
        <button>Edit</button>
        <button>Update</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default TodolistItems;
