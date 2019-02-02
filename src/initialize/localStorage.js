const STATE_KEY = 'state';

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem(STATE_KEY);
      if (serializedState === null) {
          return undefined;
      }

      console.log(`state from LS: ${serializedState}`);
      return JSON.parse(serializedState);
  }  catch (err) {
      return undefined;
  }
};

export const persistState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      console.log(serializedState);
      localStorage.setItem(STATE_KEY, serializedState);
  }  catch (err) {
      // Ignore error
  }
};