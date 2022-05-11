import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
      
      />
    </div>
  );
}

export default TodoList;
