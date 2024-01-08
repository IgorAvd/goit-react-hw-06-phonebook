import { useDispatch } from 'react-redux';
import { FilterDescr } from './Filter.styled';
import { filteredValue } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterSubmit = e => {
    const filterValue = e.target.value.trim();

    dispatch(filteredValue(filterValue));
  };

  return (
    <div>
      <FilterDescr>Find contacts by name</FilterDescr>
      <input type="text" name="name" required onChange={handleFilterSubmit} />
    </div>
  );
};
