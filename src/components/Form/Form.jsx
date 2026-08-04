import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid";

import style from "./Form.module.css";

function Form({contacts, setContacts}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const focused = useRef(null);

  useEffect(() => {
    focused.current.focus()
  }, [])
  

  const handleUserName = (event) => {
    setName(event.target.value);
  };

  const handleUserNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactExists = contacts.some(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );

    if (contactExists) {
      alert(`${name} вже існує`);
      return;
    }

    const newUser = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts([...contacts, newUser]);
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
        value={name}
        onChange={handleUserName}
        // onBlur={activateInput}
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
        value={number}
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