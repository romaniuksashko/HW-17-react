import { useState, useEffect, useReducer } from "react";

import ContactsList from "./components/ContactsList/ContactsList"
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

import { DeletingContext } from "./context/DeletingContext";
import useLocalStorage from "./hooks/useLocalStorage";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  filter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useLocalStorage("contacts", state.contacts);

  const handleFilter = (event) => {
    dispatch({type:"SET_FILTER", payload: event.target.value})
  };  

  const filtered = state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase()),
  );    

  const handleDelete = (identificator) => {
    const updatedContacts = state.contacts.filter((item) => item.id !== identificator);
    dispatch({ type: "DELETE_CONTACTS", payload: updatedContacts });
  }

  return (
    <DeletingContext.Provider value={handleDelete}>
      <h1>Phonebook</h1>
      <Form contacts={state.contacts} сontactsDispatch={dispatch} />

      <h2>Contacts</h2>
      <Filter filter={state.filter} handleFilter={handleFilter} />

      <ContactsList filtered={filtered} handleDelete={handleDelete} />
    </DeletingContext.Provider>
  );
}

export default App;
