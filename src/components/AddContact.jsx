import React, { useState } from 'react';
import { useContacts } from '../context/ContactsContext.jsx';

// input CSS class
const inputCss = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const btnCss = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";


const AddContact = () => {
  const {addContact} = useContacts(); 

  const [input,setInput] = useState({
    name:"user",
    email:"user@c.in",
  });

  // props.newContact = () => {
  //   return input; 
  // } 
    
  const handelChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };
  
  const add = (e) => {
    e.preventDefault();
    addContact(input);
    // props.newContact(input);
    // console.log(input);
  }

  return (
    <section className="flexCenter">

      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={add}>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Contact</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`${inputCss}`}            
            onChange={handelChange}
            name="name"
            value={input.name}
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`${inputCss}`}
            onChange={handelChange}
            name="email" 
            value={input.email}
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flexCenter">
          <button className={btnCss} type="submit">
            Add
          </button>
        </div>
        
      </form>
    </section>
  );
};

export default AddContact;
