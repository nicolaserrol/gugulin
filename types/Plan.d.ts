type Plan = {
  categories: Array<any> | Array<BudgetCategory>;
  from: string;
  targets: Targets,
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