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

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
    })
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
      todos={todos}
      completeTodo={completeTodo}
      />
    </div>
  );
}

export default TodoList;
