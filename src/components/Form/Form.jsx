import { useState, useRef, useEffect, useReducer } from "react"
import { nanoid } from "nanoid";

import style from "./Form.module.css";

const initialState = {
  name: "",
  number: ""
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    default:
      return state;
  }
}

function Form({ contacts, сontactsDispatch }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const focused = useRef(null);

  useEffect(() => {
    focused.current.focus();
  }, []);

  const handleUserName = (event) => {
    dispatch({ type: "SET_NAME", payload: event.target.value });
  };

  const handleUserNumber = (event) => {
    dispatch({ type: "SET_NUMBER", payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactExists = contacts.some(
      (item) => item.name.toLowerCase() === state.name.toLowerCase(),
    );

    if (contactExists) {
      alert(`${state.name} вже існує`);
      return;
    }

    const newUser = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };

    сontactsDispatch({ type: "SET_CONTACTS", payload: newUser });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name" className={style.label}>
        Name:
      </label>
      <input
        ref={focused}
        type="text"
        id="name"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={state.name}
        onChange={handleUserName}
        placeholder="Enter name"
        className={style.input}
      />
      <label htmlFor="number" className={style.label}>
        Number:
      </label>
      <input
        type="tel"
        id="number"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.number}
        onChange={handleUserNumber}
        placeholder="Enter phone number"
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
}

export default Form