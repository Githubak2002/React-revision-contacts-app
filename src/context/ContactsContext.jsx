import React, { createContext, useContext, useState } from 'react';

const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [CCcontacts, setCCcontacts] = useState([]);

  const addContact = (newContact) => {
    setCCcontacts([...CCcontacts,newContact]);
  }
  const deleteContact = (index) => {
    const newContacts = CCcontacts.filter((contact,i) => i !== index );
    setCCcontacts(newContacts);
  }
  const contextValue = {
    CCcontacts,
    setCCcontacts,
    addContact,
    deleteContact
  };

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
};

const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
};

// export { ContactsProvider,ContactsContext };
export { ContactsProvider, useContacts,ContactsContext };
