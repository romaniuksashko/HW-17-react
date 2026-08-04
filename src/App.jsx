import { useState, useEffect } from "react";


import ContactsList from "./components/ContactsList/ContactsList"
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

import { DeletingContext } from "./context/DeletingContext";


function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const jsonContacts = JSON.stringify(contacts);
    
    localStorage.setItem("contacts", jsonContacts)
  }, [contacts])
  

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };  

  const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
  );    

  const handleDelete = (identificator) => {
    const updatedContacts = contacts.filter((item) => item.id !== identificator);
    setContacts(updatedContacts);
  }

  return (
    <DeletingContext.Provider value={handleDelete}>
      <h1>Phonebook</h1>
      <Form contacts={contacts} setContacts={setContacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />

      <ContactsList filtered={filtered} handleDelete={handleDelete} />
    </DeletingContext.Provider>
  );
}

export default App;
