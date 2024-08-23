import { createSlice } from '@reduxjs/toolkit';
import { CURRENCIES, DEFAULT_CATEGORIES, DEFAULT_CURRENCY } from '@/constants/Default';
import {
  CategoryType,
  CurrencyType,
} from "@/types";

type PreferenceState = {
  budgetType: 'monthly' | 'biMonthly';
  categories: Array<CategoryType>;
  currencies: Array<CurrencyType>;
  currency: CurrencyType;
}

const initialState: PreferenceState = {
  categories: DEFAULT_CATEGORIES,
  budgetType: 'monthly' || 'biMonthly',
  currencies: CURRENCIES,
  currency: DEFAULT_CURRENCY,
};

export const preferenceSlice = createSlice({
  initialState,
  name: 'preference',
  reducers: {
    resetOptions: (state) => {
      state.categories = DEFAULT_CATEGORIES;
      state.currencies = CURRENCIES;
    },
    resetPreference: () => initialState,
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
  resetOptions,
  resetPreference,
  setBudgetType,
  setCategories,
  setCurrency,
} = preferenceSlice.actions;

export default preferenceSlice.reducer;
