import {
    createTransform,
    persistStore,
    persistReducer,
  } from 'redux-persist';
  import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
  import Immutable from 'immutable';
  import { immutable } from '@redux-devtools/serialize';
  import { AnyAction, configureStore } from '@reduxjs/toolkit';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  import appReducer from '@/reducers/index';
  
  type ImmutableConfig = {
    blacklist?: Array<string>;
    records?: (new (data: object) => unknown)[];
    whitelist?: Array<string>;
  }
  
  const rootReducer = (state: RootState, action: AnyAction) => {
    return appReducer(state, action);
  };
  
  const immutableTransform = (config: ImmutableConfig) => {
    config = config || {};
    const serializer = immutable(Immutable, config.records);
    return createTransform(serializer.stringify, serializer.parse, config);
  };
  
  export const persistedReducer = persistReducer({
    blacklist: [],
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage: AsyncStorage,
    transforms: [
      immutableTransform({
        whitelist: [],
      }),
    ],
  }, rootReducer);
  
  /**
   * `middleware` field is a workaround for:
   *
   * WARNING:
   * - "ImmutableStateInvariantMiddleware took 69ms, which is more than the warning threshold of 32ms."
   * SOLUTION:
   * - `serializableCheck: false`
   *
   * ERROR:
   * - "A non-serializable value was detected in the state, in the path: `analytics.session.id`. Value: "63859d686f0d398d01a9f3f4"
   * Take a look at the reducer(s) handling this action type: SET_SETTING.
   * SOLUTION:
   * - `serializableCheck: false`
   */
  export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
    reducer: persistedReducer,
  });
  
  export const persistor = persistStore(store);
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof appReducer>;
  