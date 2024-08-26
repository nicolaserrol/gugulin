import BudgetCategory from "./BudgetCategoryType";
import TargetsType from "./TargetsType";

type PlanType = {
  categories: Array<any> | Array<BudgetCategory>;
  from: string;
  targets: TargetsType,
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