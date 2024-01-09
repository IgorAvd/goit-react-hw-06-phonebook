import { ContactItem } from './ContactItem';
import { StyledContactList } from './ContactList.styled';
import { getFilterValue } from '../../redux/filter/filterSlice';
import { getContactsArr } from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContactsArr);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </StyledContactList>
  );
};
