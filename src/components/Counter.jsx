import React, { useReducer } from 'react';

// STEP 1 - DECIDE WHAT STATE THE COMPONENT NEEDS (OBJECT)
// this thing will serve as our default initial state
const initialState = {
  count: 0,
  isModalOpen: false,
  friends: [],
};

// STEP 2 - DECIDE WHAT TYPES OF 'THINGS' MIGHT HAPPEN
// that would result in a change of state (STRINGS)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const RESET_COUNT = 'RESET_COUNT';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// STEP 3 - BUILD A REDUCER FUNCTION
// WHAT IS A REDUCER?
//    - function that takes state and returns new (or same) state
//    - always returns state
//    - no mutation!!!!
function reducer(state, action) { // { count: 7, etc } STATE { type: INCREMENT } ACTION
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    case RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState); // 1 -> reducer, 2 -> initial state
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <div className='component'>
      The count is {state.count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dev</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
