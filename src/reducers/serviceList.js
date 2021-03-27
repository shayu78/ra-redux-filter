import { nanoid } from 'nanoid';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SERVICE':
      const { id, name, price } = action.payload;
      if (id) return state.map((value) => (value.id === id) ? { id, name, price } : value);
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case 'REMOVE_SERVICE':
      const data = action.payload;
      return state.filter((value) => value.id !== data.id);
    default:
      return state;
  }
}
