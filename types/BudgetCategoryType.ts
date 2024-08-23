import AmountTypeType from "./AmountTypeType";
import CategoryType from "./CategoryType";
import GroupType from "./GroupType";

type BudgetCategoryType = {
  _id: string | string[];
  amount: number;
  amountType: AmountTypeType;
  group: GroupType;
  category: CategoryType;
  remarks: string;
};
export default BudgetCategoryType;