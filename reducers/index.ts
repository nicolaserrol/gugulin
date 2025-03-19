import { combineReducers } from '@reduxjs/toolkit';

import planner from '@/features/planner';
import preference from '@/features/preference';

const appReducer = combineReducers({
  planner,
  preference,
});

export default appReducer;
