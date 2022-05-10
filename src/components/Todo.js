import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  const [edit, setEdit] = useState({
      id: null,
      value: ''
  })

  return TodoList.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-tow complete' : 'todo-row'}></div>
  ))
}

export default Todo;
