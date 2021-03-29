import { UPDATE_SETTINGS } from './actionTypes';

export const updateSettings = (field, newValue) => ({
  type: UPDATE_SETTINGS,
  payload: {
    field,
    newValue
  },
});

export default { updateSettings };
