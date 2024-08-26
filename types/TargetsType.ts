/**
 * amount - overall target for the plan
 * 
 * needs
 * - budget for needs ONLY
 * - value that is less than 1 will be considered percentage
 * wants
 * - budget for wants ONLY
 * - value that is less than 1 will be considered percentage
 * savings
 * - budget for savings ONLY
 * - value that is less than 1 will be considered percentage
 */
type TargetsType = {
  amount: number;
  needs: number;
  wants: number;
  savings: number;
};

export default TargetsType;