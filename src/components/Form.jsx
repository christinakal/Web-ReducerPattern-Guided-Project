import React, { useState } from 'react';

// step 1 design a nice initial component state
const initialState = {
  fname: '',
  lname: '',
  // isModalOpen: false,
  // validationErrors: [],
};

// step 2
const SUBMIT = 'SUBMIT';
const INPUT_CHANGE = 'INPUT_CHANGE';
const RESET = 'RESET';
// const CLOSE_MODAL = 'CLOSE_MODAL'; // ETC
// const ERROR = 'ERROR';

// step 3
function reducer(state, action) {
  switch (action.type) {
    case SUBMIT:
      return initialState;
    case INPUT_CHANGE: // { fname: 'a', lname: '' }, { type: INPUT_CHANGE, payload: { whichInput: 'fname', value: 'ab' } }
  }
}

export default function Form() {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  });
  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };
  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}
