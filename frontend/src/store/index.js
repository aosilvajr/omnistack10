import { configureStore } from '@reduxjs/toolkit';

import devsReducer from './ducks/devs';

export default configureStore({
  reducer: {
    devs: devsReducer,
  },
});
