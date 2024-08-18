import { combineReducers } from '@reduxjs/toolkit';

import preference from '@/features/preference';

const appReducer = combineReducers({
  preference,
});

export default appReducer;
