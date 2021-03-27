import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ServiceFilter() {
  const item = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'FILTER_SERVICE', payload: { field: name, value } });
  };

  return (
    <div className="filter__wrapper">
      <label className="filter__label">Фильтрация
        <input className="filter__input w-50" name='filter' onChange={handleChange} value={item.value} />
      </label>
    </div>
  );
}
