import React from "react";
import { Trash } from 'lucide-react';
import { useContacts } from "../context/ContactsContext";

const ContactCard = (props) => {
  // console.log(props);
  const {name,email,index} = props;
  const {CCcontacts,deleteContact} = useContacts();

  const deleteContactHandler = (i) => {
    deleteContact(i);
  }
  return (
    <main className="flexBetween sm:px-10 px-3 border-b-2 py-3">
      <div className="text-xl">

      <h2>{name}</h2>
      <h2>{email}</h2>
      </div>

      <button onClick={() => deleteContactHandler(index)} >
        <Trash color="red" size={26} />
      </button>

    </main>
  );
};

export default ContactCard;
