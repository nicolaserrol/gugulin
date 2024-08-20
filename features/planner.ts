import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

import { getBiMonthlyRange, getMonthlyRange } from '@/lib/date';
import {
  PlanType,
  BudgetCategoryType,
} from "@/types";
import { GroupEnum } from '@/constants/Enums';

const biMonthlyRange = getBiMonthlyRange();
const monthlyRange = getMonthlyRange();

type PlannerState = {
  biMonthly: Array<PlanType> | Array<any>;
  monthly: PlanType,
}

const defaultPlan: PlanType = {
  categories: [],
  from: monthlyRange.from,
  to: monthlyRange.to,
  margin: 0,
  stats: {
    digital: {
      needs: 0,
      wants: 0,
      savings: 0,
    },
    cash: {
      needs: 0,
      wants: 0,
      savings: 0,
    },
  },
};

const initialState: PlannerState = {
  monthly: defaultPlan,
  biMonthly: [
    {
      ...defaultPlan,
      from: biMonthlyRange.first.from,
      to: biMonthlyRange.first.to,
    },
    {
      ...defaultPlan,
      from: biMonthlyRange.second.from,
      to: biMonthlyRange.second.to,
    },
  ],
};

const calculateSum = (categories: Array<BudgetCategoryType>) => {
  const rawStats = categories.reduce((sum, c: BudgetCategoryType) => {
    const amountType = c.amountType.value;
    if (['cash', 'digital'].includes(c.amountType.value)) {
      const type = amountType === 'cash'
        ? sum.cash
        : sum.digital;
      const { needs, wants, savings } = type || {};
      
      let _needs = needs + (c.group.value === GroupEnum.NEEDS ? (c.amount || 0) : 0);
      let _wants = wants + (c.group.value === GroupEnum.WANTS ? (c.amount || 0) : 0);
      let _savings = savings + (c.group.value === GroupEnum.SAVINGS ? (c.amount || 0) : 0);

      const newValue = {
        needs: _needs,
        wants: _wants,
        savings: _savings,
      };

      return {
        cash: amountType === 'cash' ? newValue : sum.cash,
        digital: amountType === 'digital' ? newValue : sum.digital,
      }
    }
    else
      return sum;
  }, {
    cash: { needs: 0, wants: 0, savings: 0 },
    digital: { needs: 0, wants: 0, savings: 0 },
  });

  return rawStats;
};

export const plannerSlice = createSlice({
  initialState,
  name: 'planner',
  reducers: {
    resetPlanner: () => initialState,
    removeCategory: (state, action) => {
      const categoryId = action.payload;

      /**
       * TODO add support for multiple plans per month
       */
      const plan = state.monthly;
      let { categories } = plan || {};
      categories = _.reject(categories, { _id: categoryId });

      const rawStats = calculateSum(categories);

      state.monthly = {
        ...state.monthly,
        stats: rawStats,
        categories,
      }
    },
    setCategory: (state, action) => {
      const newCategory: BudgetCategoryType = action.payload;
      const { _id  } = newCategory || {};

      /**
       * TODO add support for multiple plans per month
       */
      const plan = state.monthly;
      let { categories } = plan || {};
      const oldCategory = _.find(categories, { _id });

      if (!_.isEmpty(oldCategory)) {
        categories = _.reject(categories, { _id });
      }
      categories = [
        ...categories,
        newCategory,
      ];

      const rawStats = calculateSum(categories);

      state.monthly = {
        ...state.monthly,
        stats: rawStats,
        categories,
      }
    },
    setMonthlyPlan: (state, action) => {
      state.monthly = action.payload;
    },
    setBiMonthlyPlan: (state, action) => {
      state.biMonthly = action.payload;
    },
  },
});

export const {
  resetPlanner,
  removeCategory,
  setBiMonthlyPlan,
  setCategory,
  setMonthlyPlan,
} = plannerSlice.actions;

export default plannerSlice.reducer;
