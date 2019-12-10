import React, { useReducer } from 'react';

const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

const initialState = {
  todoList,
  // etc
};

const MARK_TODO = 'MARK_TODO'; // we will use the same to "complete" and "uncomplete"
// etc

const reducer = (state, action) => {
  switch (action.type) {
    case MARK_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: action.payload.completed };
          }
          return todo;
        }),
      };
    // other cases etc
    default:
      return state;
  }
};

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const markTodo = (id, completed) => event => dispatch({
    type: MARK_TODO,
    payload: { id, completed },
  });

  return (
    <div className='component'>
      {
        state.todoList.map((todo) => (
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
