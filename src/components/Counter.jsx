import React, { useReducer } from 'react';

const increment = 'INCREMENT';
const decrement = 'DECREMENT';

const initialCount = 0;

function countReducer(count, action) {
  switch (action.type) {
    case increment:
      return count + 1;
    case decrement:
      return count - 1;
    default:
      return count;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  const increment = () => dispatch({ type: increment });
  const decrement = () => dispatch({ type: decrement });
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
