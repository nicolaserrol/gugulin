import BudgetCategory from "./BudgetCategoryType";

type PlanType = {
  categories: Array<any> | Array<BudgetCategory>;
  from: string;
  to: string;
  margin: number;
  stats: {
    digital: {
      needs: number;
      wants: number;
      savings: number;
    },
    cash: {
      needs: number;
      wants: number;
      savings: number;
    },
  };
};
export default PlanType;