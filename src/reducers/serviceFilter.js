const initialState = {
  filter: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_SERVICE':
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    default:
      return state;
  };
}
