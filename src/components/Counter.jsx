import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);
  const reset = () => setCount(0);

  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dev</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
