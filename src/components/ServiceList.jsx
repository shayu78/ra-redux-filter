import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const current = useSelector((state) => state.serviceAdd);
  const filterValue = useSelector((state) => state.serviceFilter).filter.toLowerCase();
  const dispatch = useDispatch();

  const filteredItems = items.filter((value) => (value.name.toLowerCase().includes(filterValue)
    || value.price.toString().includes(filterValue)));

  const handleRemove = (id) => {
    if (current.id === id) dispatch({ type: 'CANCEL_SERVICE' });
    dispatch({ type: 'REMOVE_SERVICE', payload: { id } });
  }

  const handleEdit = (data) => {
    const { id, name, price } = data;
    dispatch({ type: 'EDIT_SERVICE', payload: { id, name, price } });
  };

  return (
    <ul className="list">
      {filteredItems.map((value) => (
        <li className="list__item" key={value.id}>
          <span className="list__item__name">{value.name}</span>
          <span className="list__item__price">{value.price}</span>
          <div className="buttons__wrapper">
            <i className="material-icons mini__button" onClick={() => handleEdit(value)}>edit</i>
            <i className="material-icons mini__button" onClick={() => handleRemove(value.id)}>close</i>
          </div>
        </li>
      ))}
    </ul>
  );
}
