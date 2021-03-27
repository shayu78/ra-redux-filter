const initialState = {
  id: null,
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SERVICE_FIELD':
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case 'EDIT_SERVICE':
      const { id, name, price } = action.payload;
      return { id, name, price };
    case 'ADD_SERVICE':
      return { ...initialState };
    case 'CANCEL_SERVICE':
      return { ...initialState };
    default:
      return state;
  }
}
