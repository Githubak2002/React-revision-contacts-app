import React from 'react'
import ContactCard from './ContactCard';
import { useContacts } from '../context/ContactsContext';

const ContactList = (props) => {
  // console.log(props.allContacts);

  const {CCcontacts} = useContacts();
  console.log(CCcontacts);
  return (
    <main className='max-w-[480px] mx-auto mb-10'>
      <h2 className='text-center my-5 text-2xl font-bold'>Contact List</h2>
      {
        CCcontacts.map((ele,i) => {
          return(
            <ContactCard key={i} index={i} name={ele.name} email = {ele.email} /> 
          )
        })
      }
    </main>
  )
}

export default ContactList