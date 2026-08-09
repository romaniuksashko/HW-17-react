import { useEffect } from "react";

function useLocalStorage(name, variable) {
  useEffect(() => {
    const jsonContacts = JSON.stringify(variable);

    localStorage.setItem(name, jsonContacts);
  }, [variable]);
}

export default useLocalStorage;