const STATE_KEY = 'state';

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem(STATE_KEY);
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  }  catch (err) {
      return undefined;
  }
};

export const persistState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(STATE_KEY, serializedState);
  }  catch (err) {
      // Ignore error
  }
};