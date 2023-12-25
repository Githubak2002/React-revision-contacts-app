import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContactsProvider } from './context/ContactsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContactsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContactsProvider>
)
