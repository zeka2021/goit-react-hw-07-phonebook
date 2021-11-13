import  { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './ContactList/Contact';
import Filter from './Filter';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = [...contacts].filter(({ name }) =>
    name.toLowerCase().includes(filter),
  );
 
 

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter  />      

      <ContactList>
          {filteredContacts.map(contact => (
            <Contact key={uuidv4()} contact={contact} />
          ))}
        </ContactList>
      </div>
    );
  }

export default App;
