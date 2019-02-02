import types from '../actionTypes';

const preferencesCreator = (preference, isChecked) => ({
    type: types.PREFERENCES,
    payload: {preference, isChecked}
});

export default preferencesCreator;