import { ContactItem } from './ContactItem';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => (
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
