type BudgetCategory = {
  _id: string | string[];
  amount: number;
  amountType: AmountType;
  group: Group;
  category: Category;
  remarks: string;
};