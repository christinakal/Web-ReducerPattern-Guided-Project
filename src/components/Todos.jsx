import React, { useState } from 'react';

const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

export default function Todos() {
  const [todos, setTodos] = useState(todoList);
  const markTodo = (id, isComplete) => () => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return { id: todo.id, name: todo.name, completed: isComplete };
    }));
  };
  return (
    <div className='component'>
      {
        todos.map((todo) => (
          <div key={todo.id} style={{ color: !todo.completed ? 'red' : 'green' }}>
            {todo.name}
            <button onClick={markTodo(todo.id, true)}>Mark complete</button>
            <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
          </div>
        ))
      }
    </div>
  );
}
