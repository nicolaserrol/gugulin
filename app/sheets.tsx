import { SheetDefinition, registerSheet } from 'react-native-actions-sheet';
import { PlanBudgetSheet } from '@/components/action_sheets';
import {
  CategoryType,
  GroupType,
  AmountTypeType,
} from "@/types";

 
registerSheet('plan-budget-sheet', PlanBudgetSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'plan-budget-sheet': SheetDefinition<{
      payload: {
        data: Array<object>,
        selected: {
          name: string;
          value: string;
        },
        title: string,
      },
      returnValue: CategoryType | GroupType | AmountTypeType,
    }>;
  }
}
 
export {};