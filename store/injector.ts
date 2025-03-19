import { EnhancedStore } from '@reduxjs/toolkit';
let store: EnhancedStore;

export const injectStore = (_store: EnhancedStore) => {
  store = _store;
};

export { store };