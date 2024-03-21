import { useState } from "react";
import "./components/App.css";
import ContactList from "./components/ContactList";
import initialContacts from "./initialContacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactList contacts={contacts} />
        {/* <ContactForm />
        <SearchBox />
        <ContactList /> */}
      </div>
    </>
  );
}

export default App;
