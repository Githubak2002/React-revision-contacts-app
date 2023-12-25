import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import AddContact from './components/AddContact.jsx'
import ContactList from './components/ContactList.jsx'
import { useContacts } from './context/ContactsContext.jsx'

const App = () => {

  const {CCcontacts,setCCcontacts} = useContacts();

  const LS_KEY = "ContactsLocalStorage";
  
  // useEffect(() => {
    // const x = localStorage.getItem("LS");
    // console.log(x);
    // setCCcontacts(x);
    // console.log(CCcontacts);
  // },[])

  useEffect(() => {
    localStorage.setItem(LS_KEY,JSON.stringify(CCcontacts));
  },[CCcontacts]);

  return (
    <>
    <section className='max-w-[1400px] mx-auto'>
      <Header />
      <AddContact />
      {/* <AddContact newContact = {contactHandler} /> */}
      <ContactList allContacts = {CCcontacts} />

    </section>
    </>

  )
}

export default App