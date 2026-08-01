import ContactsItem from "../ContactsItem/ContactsItem";

function ContactsList({ filtered, handleDelete }) {
  return (
    <ul>
      {filtered.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} handleDelete={handleDelete}/>
      ))}
    </ul>
  );
}

export default ContactsList;
