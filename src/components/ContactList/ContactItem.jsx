import { useDispatch } from 'react-redux';
import { ContactItemBtn, StyledContactItem } from './ContactItem.styled';

import { deleteContact } from '../../redux/contacts/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledContactItem>
      <span>{name}:</span>
      {number}
      <ContactItemBtn type="submit" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ContactItemBtn>
    </StyledContactItem>
  );
};
