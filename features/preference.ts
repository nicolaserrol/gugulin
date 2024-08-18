import { createSlice } from '@reduxjs/toolkit';
import { CURRENCIES, DEFAULT_CATEGORIES } from '@/constants/Default';

export type Category = {
  code: string;
  icon: string;
  name: string;
  remarks?: string;
}

export type Currency = {
  code: string,
  name: string,
  prepend?: boolean;
  symbol: string,
}

type PreferenceState = {
  budgetType: string;
  categories: Array<Category>;
  currencies: Array<Currency>;
  currency: object;
}

const initialState: PreferenceState = {
  categories: DEFAULT_CATEGORIES,
  budgetType: 'monthly' || 'bi-monthly',
  currencies: CURRENCIES,
  currency: {
    code: 'php',
    name: 'Philippine Peso',
    symbol: '₱',
  },
};

export const preferenceSlice = createSlice({
  initialState,
  name: 'preference',
  reducers: {
    resetCategories: (state) => {
      state.categories = DEFAULT_CATEGORIES;
    },
    resetPreference: (state) => {
      state = initialState;
    },
    setBudgetType: (state, action) => {
      state.budgetType = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const {
  resetCategories,
  resetPreference,
  setBudgetType,
  setCategories,
  setCurrency,
} = preferenceSlice.actions;

export default preferenceSlice.reducer;
