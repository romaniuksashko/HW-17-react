import style from "./ContactItem.module.css"

function ContactsItem({ id, name, number, handleDelete }) {
  return (
    <li key={id}>
      <p className={style.contact}>
        {name}: {number}
      </p>
      <button type="button" onClick={() => handleDelete(id)} className={style.delete}>
        Delete
      </button>
    </li>
  );
}

export default ContactsItem;
