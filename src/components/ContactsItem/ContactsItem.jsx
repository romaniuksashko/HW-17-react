import style from "./ContactItem.module.css"

import { useContext } from "react";
import { DeletingContext } from "../../context/DeletingContext";

function ContactsItem({ id, name, number }) {
  const handleDelete = useContext(DeletingContext);
  

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
