import React, { useReducer } from 'react';

// step 1 design a nice initial component state
const initialState = {
  fname: '',
  lname: '',
  // isModalOpen: false,
  // validationErrors: [], // ETC
};

// step 2
const SUBMIT = 'SUBMIT';
const INPUT_CHANGE = 'INPUT_CHANGE';
// const RESET = 'RESET';
// const CLOSE_MODAL = 'CLOSE_MODAL';
// const ERROR = 'ERROR'; // ETC

// step 3
function reducer(state, action) {
  switch (action.type) {
    case SUBMIT:
      return initialState;
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onValueChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: INPUT_CHANGE,
      payload: { name, value },
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({ type: SUBMIT });
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={state.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={state.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}
