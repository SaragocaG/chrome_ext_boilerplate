import { UPDATE_SETTINGS } from '../actions/actionTypes';

const initialState = {
  darkMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        [action.payload.field]: action.payload.newValue
      };

    default:
      return state;
  }
};

export default reducer;
