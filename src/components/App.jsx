import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContactsArr } from '../redux/contacts/contactsSlice';
import { getFilterValue } from '../redux/filter/filterSlice';

export const App = () => {
  const contacts = useSelector(getContactsArr);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </>
  );
};
